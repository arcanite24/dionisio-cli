---
to: src/<%= h.inflection.camelize(collection, true) %>/<%= h.inflection.camelize(collection, true) %>.gateway.ts
---
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class <%= h.inflection.camelize(collection) %>Gateway {

    @WebSocketServer()
    server: Server;

}