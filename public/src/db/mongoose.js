const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/todo", {useNewUrlParser: true, useUnifiedTopology: true})

// mongoose module with the name of the collection , the type of data it accept
const Todo = mongoose.model("Todo", {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// exporting the module to the files that need to access it 
module.exports = Todo