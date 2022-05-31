const jsonServer = require('json-server')
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middleware = jsonServer.defaults({
    static : './dist'
})

const PORT = process.env.PORT || 8080;
server.use(middleware);
server.use(jsonServer.rewriter({
    '/*' : '/$1'
}))

server.use(router);
server.listen(PORT,()=>{
    console.log('Listening to port')
})