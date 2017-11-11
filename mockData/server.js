/**
 * mock服务器
 */
'use strict';

var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');
var port = 3004;

http.createServer(function (request, response) {
    var reqPath = request.url.split('?')[0];
    var filePath;
    if (/\/$/.test(reqPath)) {
        filePath = path.join(__dirname, reqPath + 'index.js');
    } else {
        filePath = path.join(__dirname, reqPath + '.js');
    }

    console.log(request.method + '  ' + request.url);
    response.writeHead(200, {'Content-Type': 'application/json'});

    if (fs.existsSync(filePath)) {
        let data = require(filePath);
        var query = url.parse(request.url, true).query;
        if (query.pageNum) {
            data.currentPage = query.pageNum;
        }
        // 增加随机结果数
        data.totalCount = parseInt(Math.random() * 100, 10);
        response.end(JSON.stringify(data));
    }
    else {
        response.end('{}');
    }
}).listen(port);

console.log(`Mock Server running at http://127.0.0.1:${port}/`);
