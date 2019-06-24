---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.module.ts
---
<%
    lowCamel = h.inflection.camelize(collection, true)
    camel = h.inflection.camelize(collection)
%>import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { <%= camel %>Service } from './<%= lowCamel %>.service';
import { <%= camel %>Gateway } from './<%= lowCamel %>.gateway';
import { <%= camel %>Controller } from './<%= lowCamel %>.controller';
import { <%= camel %> } from './<%= lowCamel %>.entity';

@Module({
  imports: [TypeOrmModule.forFeature([<%= camel %>])],
  providers: [
    <%= camel %>Service,
    <%= camel %>Gateway,
  ],
  controllers: [<%= camel %>Controller],
})
export class <%= camel %>Module {}
