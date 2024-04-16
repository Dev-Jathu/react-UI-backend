const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    Title : {
        type : String,

    },
    created_By : {
        type:String

    },
    createdOn : {
        type : String
    },
    content : {
        type : String
    },
    DeadLine : {
        type : String
    }

    
})

const Document = mongoose.model("ToDo" ,schema)
module.exports =Document
