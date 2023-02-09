const http = require('http');
const port = process.env.PORT || 1337;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const msg = 'Hello Node from Gaurav!\n'
    res.end(msg);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});