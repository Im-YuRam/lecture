const express =require("express");
const app=express();
const MAX=100
app.use(express.json())
let posts=[
    {
        id:1,
        title:"First Post",
        text:"First text"
    }
]
let nextid=2
app.post("/posts",(req,res)=>{
    const{title}=req.body;
    if (!title){
        return res.status(400).json({error:"title is required"})
    }
    if (title.length>100){
        return res.status(400).json({error:"title is so long"})
    }
    const post ={id:nextid++ ,title:req.body.title};
    posts.push(post);
    res.status(201).json(posts)
})

let posterior=[
    {
        id:1,
        title:"First Post",
        text:"First text"
    }
]
app.post("/comments",(req,res)=>{
    const{text}=req.body;
    if (!text){
        return res.status(400).json({error:"text is required"})
    }
    if (text.length>100){
        return res.status(400).json({error:"text is so long"})
    }
    const post ={id:nextid++ ,text:req.body.text};
    posterior.push(post);
    res.status(201).json(posterior)
})


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