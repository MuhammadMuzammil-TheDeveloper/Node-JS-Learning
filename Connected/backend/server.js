import express from 'express'
import fs from "fs"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

app.post('/', (req, res)=>{
 res.send("Your are in root page ")
})

app.post('/api/singup', (req, res)=>{
    const user = req.body
    const isFileExist = fs.existsSync("users.txt")
    if(isFileExist){
        // res.send("File exist ")
        const userFileData =JSON.parse( fs.readFileSync("users.txt", "utf-8"))
        const isUserExist = userFileData.find(obj => obj.email === user.email)
        if(isUserExist){
            return res.send("user already exist")
        }else{
            userFileData.push(user)
            fs.writeFileSync("users.txt", JSON.stringify(userFileData))
            res.send("User added successfully")
        }
        
    }else{
        fs.writeFileSync("users.txt", JSON.stringify([user]))
        res.send("File and user created sucssesfully")
    }


})

app.post('/api/login', (req, res)=>{
    const user = req.body
    const userFileData = JSON.parse(fs.readFileSync('users.txt', "utf-8"))
    const isUserExist = userFileData.find(obj => obj.email === user.email)
    if(isUserExist){
        if(user.password === isUserExist.password){
           return res.send("USer successfully login ")
        }else{
            res.send("Your email and password are incorrect")
        }
    }
    else{
        res.send("user does not exist")
    }
})

app.listen(2001, ()=>{
    console.log("Sever is running")
})

