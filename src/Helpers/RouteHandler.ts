import { IncomingMessage, ServerResponse } from "node:http"

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
const routes:Map<string,Map<string,RouteHandler>> = new Map()

function addRoutes(medthod: string, path: string, handler:RouteHandler){
    if(!routes.has(medthod)) routes.set(medthod, new Map())
        routes.get(medthod)!.set(path, handler)
}

export default addRoutes;