const http = require('http');
const hostname = '127.0.0.1';
const port = 3003;

const orders = require('./models/orders');

const server = http.createServer(async (req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // res.end('burrito order app')
    if (req.url.startsWith("/burritos")) {
        const allBurritoOrders = await orders.getAll();
        const burritoJSON = JSON.stringify(allBurritoOrders);
        res.end(burritoJSON);
    } else {
        res.end(`{message: "Thank you for being you. Please send bitcoin."}`);
    }

});


server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});