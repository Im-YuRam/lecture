const express =require("express");
const app=express();
let PostsId=2;
let CommentsId=2;
let ChocoId=2;
const MAX=100
app.use(express.json())
let posts=[
    {
        id:1,
        title:"First Post",
        text:"First text"
    }
]
app.post("/posts",(req,res)=>{
    const{title}=req.body;
    
    if (!title){
        return res.status(400).json({error:"title is required"})
    }
    if (title.length>100){
        return res.status(400).json({error:"title is so long"})
    }
    const post ={id:PostsId++ ,title:req.body.title};
    posts.push(post);
    res.status(201).json(posts)
})


app.get("/posts",(req,res)=>{
    res.json(posts)
})

app.get("/posts/:id",(req,res)=>{
    const id =Number(req.params.id)
    const post =posts.find(p=>p.id ===id);
    if (!post){
        return res.status(404).json({error:"Not found"})
    }
    res.json(post);
})

app.patch("/posts/:id",(req,res)=>{
    const id =Number(req.params.id)
    const post =posts.find(p=>p.id ===id);
    if (!post){
        return res.status(404).json({error:"Not found"})
    }

    if (req.body.title !== undefined){
        post.title=req.body.title;
    }
    res.json(post);
})

app.delete("/posts/:id",(req,res)=>{
    const id =Number(req.params.id)
    const index =posts.findIndex(p=>p.id ===id);
    if (index ===-1){
        return res.status(404).json({error:"Not found"})
    }

    posts.splice(index,1)
    res.status(204).end()
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
    if (text.length>MAX){
        return res.status(400).json({error:"text is so long"})
    }
    const post ={id:CommentsId++ ,text:req.body.text};
    posterior.push(post);
    res.status(201).json(posterior)
})

let chocolates=[
    {
        id:1,
        cacao:"First cacao",
    }
]
app.post("/chocolates",(req,res)=>{
    const{cacao}=req.body;
    
    if (!cacao){
        return res.status(400).json({error:"cacao is required"})
    }
    if (cacao.length>MAX){
        return res.status(400).json({error:"cacao is so big"})
    }
    const post ={id:ChocoId++ ,cacao:req.body.cacao};
    chocolates.push(post);
    res.status(201).json(chocolates)
})


app.get("/chocolates",(req,res)=>{
    res.json(chocolates)
})

app.get("/chocolates/:id",(req,res)=>{
    const id =Number(req.params.id)
    const post =chocolates.find(p=>p.id ===id);
    if (!post){
        return res.status(404).json({error:"Not found"})
    }
    res.json(post);
})

app.patch("/chocolates/:id",(req,res)=>{
    const id =Number(req.params.id)
    const post =chocolates.find(p=>p.id ===id);
    if (!post){
        return res.status(404).json({error:"Not found"})
    }

    if (req.body.cacao !== undefined){
        post.cacao=req.body.cacao;
    }
    res.json(post);
})

app.delete("/chocolates/:id",(req,res)=>{
    const id =Number(req.params.id)
    const index =chocolates.findIndex(p=>p.id ===id);
    if (index ===-1){
        return res.status(404).json({error:"Not found"})
    }

    chocolates.splice(index,1)
    res.status(204).end()
})




app.get("/",(req,res)=>{
    res.send("Hello Express")
})
app.get("/about",(req,res)=>{
    res.send("Hello About")
})
app.use((req,res)=>{
    res.status(404).send("Not Found Error")
})




app.listen(3000,()=>{
    console.log("http://localhost:3000")
})