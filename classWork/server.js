import express from "express"

const app = express()

app.listen(5000, ()=> console.log("server running on POrt "))

const obj = {
    'name': "muhammad-Muzammil",
    'age': 20
}

app.get('/', (req, res)=>{
    res.send("Server Running")
})
app.get('/userCreated', (req, res)=>{
    res.json(obj)
})
app.get('/userUpdate', (req, res)=>{
    res.send("User Updated Sucessfuly")
})
app.get('/userDelete', (req, res)=>{
    res.send("User Deleted Successfully")
})



