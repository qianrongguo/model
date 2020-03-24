// var util = require('util')
// function Base(){
//     this.name = 'base'
//     this.base = 1991;
//     this.sayHello = function () {
//         console.log('Hello ' + this.name)
//     }
// }
//
// Base.prototype.showName = function () {
//     console.log(this.name)
// }
//
// function Sub() {
//     this.name = 'sub'
// }
//
// util.inherits(Sub,Base)
//
// var objBase = new Base();
// objBase.showName();
// // objBase.sayHello();
// console.log(objBase,'++++');
// var objSub = new Sub()
// objSub.showName();
// objSub.sayHello();
// console.log(objSub,'------')
// var dns = require('dns');
//
// dns.lookup('www.github.com', function onLookup(err, address, family) {
//     console.log('ip 地址:', address);
//     dns.reverse(address, function (err, hostnames) {
//         if (err) {
//             console.log(err.stack);
//         }
//
//         console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
//     });
// });

var EventEmitter = require('events').EventEmitter;
var domain = require('domain')

// 创建 eventEmitter 对象
var emitter1 = new EventEmitter();

// 返回一个domain对象
// var domain1 = domain.create();
//
// domain1.on('error',function (err) {
//     console.log('domain1 处理这个错误 （' + err.message + ')');
// })
//
// domain1.add(emitter1);
//
// // 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// emitter1.on('error',function (err) {
//     console.log('监听处理此错误（' + err.message + ')')
// })
//
// emitter1.emit('error',new Error('通过监听器来处理'))  // 按参数的顺序执行每个监听器
//
// emitter1.removeAllListeners('error');  // 移除所有事件的所有监听器
//
// emitter1.emit('error',new Error('通过 domain1 处理'))
//
// var domain2 = domain.create();
// domain2.on('error',function (err) {
//     console.log('domain2 处理这个错误 （' + err.message + ')')
// })
//
// domain2.run(function () {
//     var emitter2 = new EventEmitter();
//     emitter2.emit('error',new Error('通过 domain2 处理'))
// })
//
// // 删除事件
// domain1.remove(emitter1);
// emitter1.emit('error',new Error('转换为异常，系统将崩溃'))

var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;

    console.log('request for' + pathname + ' received.')

    fs.readFile(pathname.substr(1),function (err,data) {
        if (err){
            console.log(err)
            response.writeHead(404,{'Content-Type': 'text/html'})
        } else {
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write(data.toString())
        }
        response.end();
    })
}).listen(8081)


// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
