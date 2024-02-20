const express =require('express') 
const { createTodo, updateTodo } = require('./type')
const { todo } = require('./db')
const app=express() 
const port=3000
app.use(express.json())

app.post('/todo',async function(req,res)
{
    const createPayLoad=req.body; //the user input that is requested from browser 
    const parsePayLoad=createTodo.safeParse(createPayLoad); //parsing the body using zod for validation
    //message if the inputs are given wrong
    if(!parsePayLoad.success){ 
        res.status(411).json({
            msg:"Your input is wrong"
        }); 
    return; 
    }
    //putting in mongo db ->  
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed:false 
    })
    res.jsonp({ 
        msg:"Todo Created"
    })
    
    
})

app.get('/todo', async function(req, res){
    const todos =await todo.find({});
    res.json({
        todos 
    })
})

app.put('/completed', async function(req, res){
    const updatePayLoad=req.body;  
    const parsePayLoad=updateTodo.safeParse(updatePayLoad); 
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:"Your input is wrong"
        })
    return;
    }
    await todo.update({
        _id: req.body.id
    },{completed: true
    }) 
    res.json({ 
        msg: "Your task is completed"
    })
})
app.listen(port);    