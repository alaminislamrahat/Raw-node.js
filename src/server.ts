import http, { IncomingMessage, Server, ServerResponse } from 'http'
import { json } from 'stream/consumers';
import config from './config';
import addRoutes, { RouteHandler, routes } from './Helpers/RouteHandler';
import "./routes"




const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running...")

    const method = req.method?.toUpperCase() || ""

    const path = req.url || ""

    const methodMap = routes.get(method);

    const handler: RouteHandler | undefined = methodMap?.get(path)

    if(handler){
        handler(req, res)
    }else{
        res.writeHead(404,{"content-type": "application/json"});
        res.end(JSON.stringify({
            success: false,
            message: "Not found",
            path
        }))
    }

    

   

   
})

server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`)
})