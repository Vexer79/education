const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        const body = [];
        req.on("data", (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on("end", ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });
        return res.end();
    }
    res.write(`
    <html>
    <head><title>First app</title></head>
    <body>
    <h1>url - ${req.url}, method - ${req.method}, headers - ${JSON.stringify(req.headers)}</h1>
    <form action="/" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>
    </body>
    </html>
    `);
    res.end();
});

server.listen(3000);
