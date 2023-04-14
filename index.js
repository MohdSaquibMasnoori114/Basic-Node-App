const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res)=>{
        const url = req.url
    if(url === "/"){
        
        const  html = fs.readFileSync("./index.html","utf-8")
    res.writeHead(200, {"content-type":"text/html"})
    res.write(html)
    res.end()
}  if(url === "/about"){
        
    const  html = fs.readFileSync("./about.html","utf-8")
res.writeHead(200, {"content-type":"text/html"})
res.write(html)
res.end()
} if(url === "/contact-me"){
        
    const  html = fs.readFileSync("./contact-me.html","utf-8")
res.writeHead(200, {"content-type":"text/html"})
res.write(html)
res.end()
}if(url === "/404"){
        
    const  html = fs.readFileSync("./404.html","utf-8")
res.writeHead(404, {"content-type":"text/html"})
res.write(html)
res.end()
}

})


server.listen(8080, ()=>console.log("Server is listening"))