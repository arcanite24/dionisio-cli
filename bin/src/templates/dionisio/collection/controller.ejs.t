---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.controller.ts
---
<%
    lowCamel = h.inflection.camelize(collection, true)
    camel = h.inflection.camelize(collection)
    plural = h.inflection.pluralize(lowCamel)
%>import { Controller, Get, Param, Post, Body, Delete, Patch, Query } from '@nestjs/common';
import { <%= camel %>Service } from './<%= lowCamel %>.service';
import { <%= camel %>Dto } from './<%= lowCamel %>.dto';
import { <%= camel %>Gateway } from './<%= lowCamel %>.gateway';

@Controller('<%= lowCamel %>')
export class <%= camel %>Controller {

  constructor(
    private <%= plural %>: <%= camel %>Service,
    private gateway: <%= camel %>Gateway,
  ) {}

  @Get()
  findAll() {
    return this.<%= plural %>.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.<%= plural %>.findOne(id);
  }

  @Post('query')
  find(
    @Body() query: any,
  ) {
    return this.<%= plural %>.find(query);
  }

  @Post()
  async create(
    @Body() body: <%= camel %>Dto,
    @Query('key') realtimeKey?: string,
  ) {

    const <%= lowCamel %> = await this.<%= plural %>.create(body);

    this.gateway.server.emit('<%= lowCamel %>', {
      collection: '<%= lowCamel %>',
      type: 'CREATE',
      payload: <%= lowCamel %>,
     });

    if (realtimeKey) {
       this.gateway.server.emit(realtimeKey, {
         collection: '<%= lowCamel %>',
         type: 'CREATE',
         payload: <%= lowCamel %>,
         key: realtimeKey,
       });
     }

    return <%= lowCamel %>;

  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('<%= lowCamel %>', {
      collection: '<%= lowCamel %>',
      type: 'DELETE',
      payload: { id },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: '<%= lowCamel %>',
        type: 'DELETE',
        payload: { id },
        key: realtimeKey,
      });
    }

    return this.<%= plural %>.delete(id);

  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: <%= camel %>Dto,
    @Query('key') realtimeKey?: string,
  ) {

    this.gateway.server.emit('<%= lowCamel %>', {
      collection: '<%= lowCamel %>',
      type: 'UPDATE',
      payload: { id, body },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: '<%= lowCamel %>',
        type: 'UPDATE',
        payload: { id, body },
        key: realtimeKey,
      });
    }

    return this.<%= plural %>.update(id, body);

  }

  @Patch('modify/:id')
  async modify(
    @Param('id') id: number,
    @Body() body: {field: string, delta: number},
  ) {

    this.gateway.server.emit('<%= lowCamel %>', {
      collection: '<%= lowCamel %>',
      type: 'MODIFY',
      payload: { id, body },
    });

    if (realtimeKey) {
      this.gateway.server.emit(realtimeKey, {
        collection: '<%= lowCamel %>',
        type: 'MODIFY',
        payload: { id, body },
        key: realtimeKey,
      });
    }

    return this.<%= plural %>.modifiyValue(id, body.field, body.delta);

  }

}

