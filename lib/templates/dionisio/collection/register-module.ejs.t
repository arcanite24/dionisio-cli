---
inject: true
to: src/app.module.ts
after: dionisio.imports
---
    <%= h.inflection.camelize(collection) %>Module,