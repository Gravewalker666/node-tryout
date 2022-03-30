module.exports = {
    extractRoutesAndParams: function (request) {
        const destructuredUrl = request.url.split('?');
        const params = {};
        console.log(destructuredUrl);
        if (destructuredUrl.length > 1) {
            const destructuredParamStrings = destructuredUrl[1].split('&');
            console.log(destructuredParamStrings);
            destructuredParamStrings.map((paramString) => {
               const keyValPair = paramString.split('=');
               params[keyValPair[0]] = keyValPair[1];
            });
        }
        console.log(params);
        return {
            route: destructuredUrl[0],
            params: params,
        };
    }
}
