const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    Title : {
        type : String,

    },
    created_By : {
        type:String

    },
    createdOn : {
        type : Date
    },
    content : {
        type : String
    },
    DeadLine : {
        type : Date
    }

    
})

const Document = mongoose.model("ToDo_List" ,schema)
module.exports =Document
