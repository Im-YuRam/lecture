const http = require("http");
console.log("Hello from Node")
const server = http.createServer((req,res)=>{
    if (req.url==="/"){
        res.writeHead(200,{
        "Content-Type":"text/plain; charset=utf-8"
        });
        res.end("Home alone");
        return;
    }
    if (req.url==="/about"){
        res.writeHead(200,{
        "Content-Type":"text/plain; charset=utf-8"
        });
        res.end("About");
        return;
    }
    if (req.url==="/contact"){
        res.writeHead(200,{
        "Content-Type":"text/plain; charset=utf-8"
        });
        res.end("Contact");
        return;
    }
    res.writeHead(404,{
        "Content-Type":"text/plain; charset=utf-8"
    });
    res.end("Nothing There");
})

server.listen(3000,()=>{
    console.log("http://localhost:3000");
})