var express = require("express");
var osInfo = require("os");
var app = express.createServer(express.logger());

var content = "<h1>WEB SERVER USING node.js & heroku</h1><br><font color = 'red'>welcome!</font><br>";
    content += "<h2> --== SERVER INFO ==--</h2><br><font color = 'orange'>";
    content += "Architecture : " + osInfo.arch() + "<br>";
    content += "Free Memory : " + osInfo.freemem() + "<br>";
    content += "Host Name : " + osInfo.hostname() + "<br>";
    content += "Load Average : " + osInfo.loadavg() + "<br>";
app.get('/', function(req, res){
    res.send(content);
    });
    
var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Listening on %d",port);
});