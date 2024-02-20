const mongoose=require ("mongoose");
mongoose.connect("mongodb+srv://admin:supro%402001@cluster0.vnu8x4o.mongodb.net/todos")  
const todoSchema= mongoose.Schema({ 
    title:String, 
    description: String,
    completed :Boolean
})

const todo=mongoose.model('todo', todoSchema); 
module.exports={
    todo
}