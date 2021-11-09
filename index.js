/**
 * title: Uptime monitor
 * author: nahid940
 * date: 28-10-2021
 */

//dependencies
const http=require('http');
const url =require('url');
const {handleReqRes}=require('./helper/handleReqRes');

//app object
//scafold
const app={}

//configurations
app.config={
    port:3000
}

//create server
app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}`)
    })
}

app.handleReqRes=handleReqRes

//start server
app.createServer();