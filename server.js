var express = require('express');
var app = express();
var platform = require('platform');
var useragent = require("useragent")
var requestLanguage = require('express-request-language');

app.get("/", function(req, res){
    var ip = req.headers['x-forwarded-for'].split(",")[0];
    var agent = useragent.parse(req.headers['user-agent']);
    var language = req.headers['accept-language']
    
    var result = {
        "ipadress": ip,
        "OS": agent.os.toString(),
        "Version": agent.os.toVersion(),
        "Language": language.split(",")[0]
    }
    res.end(JSON.stringify(result));
    console.log(ip)
    console.log(useragent.parse(req.headers['user-agent']).toString());
    console.log(req.headers["accept-language"])
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
