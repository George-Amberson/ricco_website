const express = require("express")
const MongocCLI = require("mongodb").MongoClient
const BodyParser =  require("body-parser")
const cors = require('cors')
const App = express()
App.use(BodyParser.json({extended: true}))
App.use(express.static('dist'))
App.use(cors({
    origin: 'http://localhost:8080'
}))
async function run(){
    try{
       
        App.post('/pizzaList', (req, res)=>{
            return res.send([])
        })
        
        App.post('/newOrder', (req, res)=>{
            if(!req.body) return res.sendStatus(400)
            bd.collection('orders').updateOne({},{$push:{orders:req.body}})
            return res.sendStatus(200)
        })
        
        App.post('/clientscomment', (req, res)=>{
            if(!req.body) return res.sendStatus(400)
            bd.collection('orders').updateOne({},{$push:{comments:req.body}})
            return res.sendStatus(200) 
        })
        App.post('/pizzaPhoto', (req,res)=>{
            if(!req.body) return res.sendStatus(400)
            return res.download('./'+String(req.body.num)+'.png')
        })
        App.get('/', (req, res) => {
            console.log(123)
            return res.sendFile('./dist/index.html')
        })
        App.listen(1488, ()=>{
            console.log("we are on 1488 port")
        })

    }catch(err){
        console.log(err)
    }

}
run()