/**
 * title: Uptime monitor
 * author: nahid940
 * date: 28-10-2021
 */

//dependencies
const http=require('http');
const url =require('url');

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

app.handleReqRes=(req,res)=>{
    const url_parse=url.parse(req.url,true);
    console.log(url_parse);
    res.end("Done")
}

//start server
app.createServer();