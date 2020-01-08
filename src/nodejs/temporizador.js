const schedule = require('node-schedule')

const tafera1 = scheduleJob('*/5 * 12 * * 2',function (){
    console.log('Executando tarefa 1!', new Date(),getSeconds())
})

setTimeout(function(){
    tarefa2.cancel()
    console.log('Cancelando Tarefa!')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.schedeleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})