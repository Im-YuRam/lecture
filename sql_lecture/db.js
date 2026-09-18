const express =require("express");
const app=express();
app.use(express.json())
const Database = require("better-sqlite3");
const db = new Database("app.db");
//dbが残ってしまうので、回数を重ねると投稿の数がずれます。気になるならdb消すなりidを取得してね
db.exec(`
    CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    created_at TEXT
    )
`);

app.get("/",(req,res)=>{
    res.send("Hello Express")
})

app.get("/posts",(req,res)=>{
    const keyword = req.query.keyword;
    let rows;
    if (keyword) {
        rows = db.prepare("SELECT * FROM posts WHERE title LIKE ?").all(`%${keyword}%`);
    } else {
        rows = db.prepare("SELECT * FROM posts").all();
    }
    res.json(rows);
})

app.post("/posts",(req,res)=>{
    const titles = req.body;
    if (!Array.isArray(titles)) {
        return res.status(400).json({ error: "配列で送ってね" });
    }
    const created =[]
    for (const item of titles) {
        if (!item.title) {
            return res.status(400).json({ error: "titleは必須" });
        }
        const info = db.prepare("INSERT INTO posts (title) VALUES (?)").run(item.title);
        const row = db.prepare("SELECT * FROM posts WHERE id = ?").get(info.lastInsertRowid);
        created.push(row);
    }
    res.status(201).json(created);
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})