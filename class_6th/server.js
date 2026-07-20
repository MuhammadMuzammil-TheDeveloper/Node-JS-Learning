import express from "express"
import mongoose from "mongoose"
import fs, { readFileSync } from "fs"
import { setServers } from "dns";
import StdModel from "./models/studentSchema.js";
setServers(['8.8.8.8', '1.1.1.1'])

// const URI = "mongodb+srv://admin:<db_password>@cluster0.fvidglr.mongodb.net/";
const URI = "mongodb+srv://admin:admin@cluster0.fvidglr.mongodb.net/NotesDB?retryWrites=true&w=majority";
mongoose.connect(URI)

mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
    console.log(err);
});

const app = express()
app.use(express.json())



app.post("/", (req, res)=>{
    res.send("User Created")
})

app.post("/singup", (req, res)=>{
    const isFileExist = fs.existsSync("users.txt");
    const users = req.body
    if(isFileExist){
        // res.send("File already exist")   
        const userData = JSON.parse(fs.readFileSync("users.txt", "utf-8"))
        const isUserExist = userData.find(obj => obj.email === users.email)
         if(isUserExist){
           return res.send("Email already Exist")
         }else{
             userData.push(req.body)
             fs.writeFileSync("users.txt", JSON.stringify(userData))
            return res.send("New user added sucessfully")
         }

    }else{
        fs.writeFileSync("users.txt", JSON.stringify([users]))
        res.send("File created")
    }
})

app.post("/login", (req, res)=>{
    const userData = JSON.parse(fs.readFileSync("users.txt", "utf-8"))
    const user = req.body
    const isUserCheck = userData.find(obj => obj.email === user.email)
    if(isUserCheck){
        console.log(isUserCheck)
        if(isUserCheck.password === user.password){         
            return res.send("Successfully Login")
        }else{
            res.send("Email and password are wrong")
        }
        
    }
    else{
        res.send("user not exist")
    }
})

// app.put('/edit-user', (req,res)=>{
//     const user = req.body
//     const userData = JSON.parse(fs.readFileSync("users.txt", "utf-8"))
//     const isUserExist = userData.findIndex(obj => obj.email === user.email)
//     if(isUserExist === -1){
//         return res.end("User not exist")
//     }
//     const updateObj ={
//         ...userData[isUserExist],
//         ...user
//     }
//     userData.splice(isUserExist,1,updateObj)
//     fs.writeFileSync('users.txt', JSON.stringify(userData))
//     res.send("User updated succesfuuly")
   
// })

app.post('/create-user', async (req,res)=>{
   await StdModel.create(req.body)
    res.send("created sucessfully")
})

app.put("/edit-user", (req, res)=>{

})


app.listen("5000", ()=> console.log("Server Is running on 5000"))