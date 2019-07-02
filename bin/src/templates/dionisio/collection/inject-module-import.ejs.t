---
inject: true
to: src/app.module.ts
after: dionisio.modules
skip_if: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.module
---
import { <%= h.inflection.camelize(collection) %>Module } from './<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.module';