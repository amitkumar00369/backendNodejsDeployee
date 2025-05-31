const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
require('dotenv').config()
const app=express()
const databas=require('./src/db/db.connect')
const routes=require('./src/routes/routes')


app.use(cors({
    origin:'*'
}))

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
app.use('',routes)


app.listen(process.env.port,function(){
    console.log('application running on port no: ',process.env.port)
})