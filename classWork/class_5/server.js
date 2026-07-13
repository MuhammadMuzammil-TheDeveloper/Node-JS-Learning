import express from "express"

const app = express()
const PORT = 5000
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello")

})
app.post('/singup', (req, res)=>{
    res.send("User Created!")
    console.log("Data", req.body)
    // console.log(req.body)
})
app.listen(PORT, ()=> console.log("Server"))