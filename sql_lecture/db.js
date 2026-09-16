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

db.prepare("INSERT INTO posts (title) VALUES (?)").run(" 初投稿 ");
db.prepare("INSERT INTO posts (title) VALUES (?)").run(" 2投稿 ");
db.prepare("INSERT INTO posts (title) VALUES (?)").run(" 3投稿 ");
const rows = db.prepare("SELECT * FROM posts").all();
console.log(rows);