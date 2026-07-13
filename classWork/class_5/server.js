import express from "express"
import fs from "fs"

const app = express()
const PORT = 5000
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("hello")

})
app.post('/singup', (req, res)=>{
    // res.send("User Created!")
    // console.log("Data", req.body)
    // // console.log(req.body)
    const userObj = req.body
    if(fs.existsSync("users.txt")){
        const userData = JSON.parse()

    }else{
        fs.writeFileSync('user.txt', JSON.stringify([userObj]))
        res.send("user Createddd!!")
    }

})
app.listen(PORT, ()=> console.log("Server"))