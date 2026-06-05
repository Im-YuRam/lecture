const express =require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Express")
})
app.get("/about",(req,res)=>{
    res.send("Hello About")
})
const post=[
    {id:1,title:"First post"},
    {id:2,title:"Secondary post"}
];
app.get("/post",(req,res)=>{
    res.json(post)
})
app.use((req,res)=>{
    res.status(404).send("Not Found Error")
})


app.listen(3000,()=>{
    console.log("http://localhost:3000")
})