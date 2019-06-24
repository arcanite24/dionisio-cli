---
inject: true
to: src/app.module.ts
after: dionisio.orm
---
        <%= h.inflection.camelize(collection) %>,