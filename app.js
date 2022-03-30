const http = require('http');
const {router} = require("./route-manager");

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    router(req, res);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const object = {
        name: 'Heshan',
        someOtherAttribute: 'Bleh'
    }
    res.end(JSON.stringify(object));
});

server.listen(port, host, () => { console.log("The server is on the listen for incoming http rockets 🚀")});
