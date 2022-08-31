
var express = require('express');//引入express
const cors = require('cors'); 
// import express from 'express';

const app:any = express();//實例化一個app

app.use(cors({
	origin: true,//server 允許(true)這個跨來源請求
	credentials: true
}));

app.get("/",(res:any)=>{
  res.send("you are on home page"); //res.sendFile(__dirname + "/index.html")
})


const port = 8763;//端口設定 本地8763
app.listen( port, () => console.log(`App listening on port ${port}!`));

// routes
const routes = require('./src/routes')

routes.install(app);

