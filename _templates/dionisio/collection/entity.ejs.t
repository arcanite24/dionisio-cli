---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.entity.ts
---
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class <%= h.inflection.camelize(collection) %> {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

}
