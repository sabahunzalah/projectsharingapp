import express from "express"
const app = express()
const PORT =3000

app.use(express.json())
app.listen(PORT,(console.log(
    "port is running 3000"
)))

app.get("/",(req,res)=>{
    res.send("hello world")
})