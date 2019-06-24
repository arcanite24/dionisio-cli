---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.service.ts
---
<%
    lowCamel = h.inflection.camelize(collection, true)
    camel = h.inflection.camelize(collection)
%>import { <%= camel %> } from './<%= lowCamel %>.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { <%= camel %>Dto } from './<%= lowCamel %>.dto';

@Injectable()
export class <%= camel %>Service {

  constructor(
    @InjectRepository(<%= camel %>)
    private readonly repo: Repository<<%= camel %>>,
  ) {}

  findAll(): Promise<<%= camel %>[]> {
    return this.repo.find();
  }

  findOne(id: string): Promise<<%= camel %>> {
    return this.repo.findOne(id);
  }

  find(query: any): Promise<<%= camel %>[]> {
    return this.repo.find(query);
  }

  create(body: <%= camel %>Dto): Promise<<%= camel %>> {

    const <%= lowCamel %> = new <%= camel %>();
    <%= lowCamel %>.text = body.text;

    return this.repo.save(<%= lowCamel %>);

  }

  delete(id: string) {
    return this.repo.delete(id);
  }

  update(id: string, body: <%= camel %>Dto) {
    return this.repo.update(id, body);
  }

  modifiyValue(id: number, field: string, delta: number) {
    return Math.sign(delta) > 0 ? this.repo.increment({ id }, field, delta) : this.repo.decrement({ id }, field, -delta);
  }

}
