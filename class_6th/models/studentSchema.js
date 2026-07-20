import mongoose from "mongoose"

const stdSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    age : Number,
    email : String

})

const StdModel = mongoose.model("Students", stdSchema)
export default StdModel


