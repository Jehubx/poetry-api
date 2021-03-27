import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('poetryDb.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(port);