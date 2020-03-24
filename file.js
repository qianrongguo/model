var fs = require('fs')

// fs.readFile('input.txt',function (err,data) {
//     if (err){
//         return console.error(err)
//     }
//     console.log(data.toString() + ' :异步读取')
// })
//
// var data = fs.readFileSync('input.txt')
// console.log('同步读取： '+data)
// console.log('程序执行完毕。')
// console.log('准备打开文件！')
// fs.stat('input.txt',function (err,stats) {
//     if (err){
//         return console.error(err)
//     }
//     console.log(stats)
//     console.log('读取文件信息成功！')
//
//     console.log('是否为文件（isFile)?' + stats.isFile())
//     console.log('是否为目录（isDirectory)?' + stats.isDirectory())
// })

// console.log('准备写入文件')
// fs.writeFile('input.txt','我是通过写入的文件内容！',function (err) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('数据写入成功')
//     console.log('-------我是分割线------------')
//     console.log('读取写入的数据')
//     fs.readFile('input.txt',function (err,data) {
//         if (err){
//             return console.error(err)
//         }
//         console.log('异步读取文件数据： ' + data.toString())
//     })
// })

//
// console.log('准备打开已存在的文件！')
// fs.open('input.txt',function (err,fd) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件打开成功！')
//     console.log('准备读取文件: ')
//     fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
//         if (err){
//             console.error(err)
//         }
//         console.log(bytes + ' 字节被读取',fd,'++++++')
//         if (bytes > 0){
//             console.log(buf.slice(0,bytes).toString())
//         }
//     })
// })

// console.log('准备打开文件！')
// fs.open('input.txt','r+',function (err,fd) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件打开成功！')
//     console.log('准备读取文件！')
//     fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
//         if (err){
//             console.log(err,'=====')
//         }
//         if (bytes > 0){
//             console.log(buf.slice(0,bytes).toString(),'-----',bytes,fd)
//         }
//         fs.close(fd,function (err) {
//             if (err){
//                 console.error(err)
//             }
//             console.log('文件关闭成功')
//         })
//     })
// })

// var buf = new Buffer(1024)
// console.log('准备打开文件')
// fs.open('input.txt','r+',function (err,fd) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件打开成功')
//     console.log('截取10字节后的文件内容。');
//     fs.ftruncate(fd,10,function (err) {
//         if (err){
//             console.log(err)
//         }
//         console.log("文件截取成功。");
//         console.log("读取相同的文件");
//         fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
//             if (err){
//                 console.log(err)
//             }
//             if (bytes > 0){
//                 console.log(buf.slice(0,bytes).toString(),bytes);
//             }
//
//             fs.close(fd,function (err) {
//                 if (err){
//                     console.log(err)
//                 }
//                 console.log('文件关闭成功')
//             })
//         })
//     })
// })


// console.log('准备删除文件')
// fs.unlink('input.txt',function (err) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件删除成功')
// })

// console.log('创建目录/tmp/test/')
// fs.mkdir('/tmp/test',function (err) {
//     if (err){
//         console.error(err)
//     }
//     console.log('目录创建成功')
// })


// console.log('查看目录/tmp')
// fs.readdir('/tmp',function (err,files) {
//     if (err){
//         console.error(err)
//     }
//     files.forEach(function (file) {
//         console.log(file)
//     })
// })

// console.log('删除文件目录/tmp/test')
// fs.rmdir('/tmp/test',function (err) {
//     if (err){
//         console.error(err)
//     }
//     console.log('读取tmp目录')
//     fs.readdir('/tmp',function (err,files) {
//         if (err){
//             console.error(err)
//         }
//         files.forEach(function (file) {
//             console.log(file)
//         })
//     })
// })

// var http = require('http')
// var url = require('url')
// var util = require('util')

// http.createServer(function (req,res) {
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end(util.inspect(url.parse(req.url,true)))
// }).listen(3000)
// var http = require('http');
// var querystring = require('querystring');
// var util = require('util');
//
// http.createServer(function(req, res){
//     var post = '';     //定义了一个post变量，用于暂存请求体的信息
//
//     req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//         post += chunk;
//     });
//
//     req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
//         post = querystring.parse(post);
//         res.end(util.inspect(post));
//     });
//     console.log(post)
// }).listen(3000);
// var os = require('os')
// console.log(os.endianness(),'endianness')
// console.log(os.type(),'type')
// console.log(os.platform(),'platform')
// console.log(os.totalmem(),'totalmem')
// console.log(os.freemem(),'freemem')

var path = require('path')

console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'))
console.log('joint path : ' + path.join('/test','test1','2slashes/1slash','tab','..'))
console.log('resolve: ' + path.resolve('main.js'))
console.log('ext name: ' + path.extname('main.js'))
