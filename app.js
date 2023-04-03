var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended : true
}))

mongoose.set('strictQuery',true);

mongoose.connect("mongodb+srv://admin:Amar5002@cluster0.mtfjbub.mongodb.net/Rescon",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in connecting to database"));
db.once('open',()=>console.log("Connected to Database"));

app.post("/newsletter", (req,res)=>{
    var email = req.body.email;

    var data = {
        "email": email,
    };

    db.collection('Newsletter').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Request Submitted")
    });
    return res.redirect('index.html')
});

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on Port");