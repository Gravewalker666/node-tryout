const {extractRoutesAndParams} = require("./utils");
const {index, something, notFoundMsg} = require("./controller");

module.exports = {
    router: function (req, res) {
        const routeAndParams = extractRoutesAndParams(req);
        switch (routeAndParams.route) {
            case '/':
                index(req, res);
                break;
            case '/something':
                something(req, res);
                break;
            default:
                notFoundMsg(req, res);
        }
    }
}