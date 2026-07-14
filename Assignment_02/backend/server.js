import express from "express";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());

app.post("/signup", (req, res) => {
  console.log(req.body);

  res.send({message:  "User Created Successfully"});
  
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});
