import parseBody from "../Helpers/parseBody"
import addRoutes from "../Helpers/RouteHandler"
import sendJson from "../Helpers/sendJson"

addRoutes("GET", "/", (req, res)=>{
    sendJson(res,200,{
        message: "hello from nodejs",
        path: req.url
    })
})

addRoutes("GET", "/api", (req, res)=>{
    sendJson(res,200,{
        message: "Health status ok",
        path: req.url
    })
})

addRoutes("POST", "/api/users", async(req, res)=> {
    const body = await parseBody(req);
    sendJson(res, 201, {success: true, data:body})
})