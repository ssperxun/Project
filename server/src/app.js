let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

app.get('/status', function (req,res){
    res.send('Hello nodejs server belong to Songwut')
})

app.get('/hello/:name', function(req,res){
    console.log('hello - ' + req.params.name)
    res.send('say hello with ' + req.params.name)
})

let port = 8080
app.listen(port, function(){
    console.log('server runing on ' + port)
})  