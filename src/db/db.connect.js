const mongoose=require('mongoose')
require('dotenv').config()
let db = "mongodb://13.50.201.122:27017/jenkinsDb"

mongoose.connect(db).then(()=>{
    console.log("database has to connect")
},()=>{
    console.log("database has not connected")
})