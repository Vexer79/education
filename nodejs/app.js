const http = require("http");

const server = http.createServer((req, res) => {
    res.write(`
    <html>
    <head><title>First app</title></head>
    <body><h1>url - ${req.url}, method - ${req.method}, headers - ${JSON.stringify(req.headers)}</h1></body>
    </html>
    `);
    res.end();
});

server.listen(3000);
