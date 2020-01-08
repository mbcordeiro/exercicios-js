const moduloA = require('../../moduloA')
console.log(moduloA.ola)

/*const moduloNodeModules = require('modulo')
console.log(moduloNodeModules.moduloNode)*/

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)