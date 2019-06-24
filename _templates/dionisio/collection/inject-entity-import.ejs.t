---
inject: true
to: src/app.module.ts
after: dionisio.entities
---
import { <%= h.inflection.camelize(collection) %> } from './<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.entity';