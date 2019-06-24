---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.dto.ts
---
export class <%= h.inflection.camelize(collection) %>Dto {
  readonly id: number;
  readonly text: string;
}
