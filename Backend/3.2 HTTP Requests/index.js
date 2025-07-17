import express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res) =>
{
res.send("<h1> Hello </h1>");
});


app.get("/About",(req, res) =>
{
res.send("<h1> Hello About  </h1>");
});


app.get("/Contact",(req, res) =>
{
res.send("<h1> Hello Contact </h1>");
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}.`);
}) 

