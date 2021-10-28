/**
 * title: Uptime monitor
 * author: nahid940
 * date: 28-10-2021
 */

//dependencies
const http=require('http');
const url =require('url');
const {StringDecoder}=require('string_decoder');

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
    const path=url_parse.pathname;
    const trimmed_path=path.replace(/^\/+|\/+$/g,'');
    const method=req.method.toLowerCase();
    const query_string_object=url_parse.query;
    const header_object=req.headers;

    const string_decoder=new StringDecoder('utf-8');
    let readData={};
    req.on('data',(buffer)=>{
        realData+=string_decoder.write(buffer);
    })

    req.on('end',()=>{
        realData+=string_decoder.end();
        console.log(realData);
    })
    console.log(trimmed_path);
    res.end("Done")
}

//start server
app.createServer();