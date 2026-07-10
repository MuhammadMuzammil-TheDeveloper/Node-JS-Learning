// const num1 = 100
// const num2 = 100

// console.log("Result", num1+num2)

// import fs, { read } from "fs";

// const createFile = () => {
//     fs.writeFileSync("name.txt", "Muhammad Muzammil")
// }
// createFile()

// const readFile = (() => {
//     fs.readFile("./name.txt", "utf-8", (err, success)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(success)
//         }
//     })
// })()

// const updateFile = (() =>{
//     fs.appendFile('./name.txt', "\nMuhammad Ahmed", (err, success)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(success)
//         }
//     })
// })()

// const deleteFile = (()=>{
//     fs.unlink('./name.txt', (err, success)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(success)
//         }
//     })
// })()

// // writeFile= create
// // readFile = read
// // appendFile = update
// // unlink = delete

// const creatFolder =( () => {
//     fs.mkdir("./Cheking/check100/heelo.txt", (err, success)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(success)
//         }
//     })
// })()

// console.log("Its working....")

// const {add, sub} = require("./math")
// console.log("Math value is ",sub(10, 80))
// console.log("Math value is ",add(10, 80))

// creating server
// const http = require('http')

// http.createServer((req, res)=>{
//  res.end("Heelo wordl")
// }).listen(8080)

const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    console.log("req", req.url);
    if (req.url === "/") {
      res.end("You are in the Home Page");
    } else if (req.url === "/about") {
      res.end("Its about page");
    } else if (req.url === "/contact") {
      res.end("Contact....");
    }
  })
  .listen(port);
