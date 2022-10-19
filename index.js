const http=require("http");
http.createServer((req,res)=>{
    res.end("Welcome");
}).listen(3000,(err)=>{

    console.log("Server Started");
    
});