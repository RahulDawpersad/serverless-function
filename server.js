const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('DesignX Web Solutions');
    res.end(); // End the response
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
