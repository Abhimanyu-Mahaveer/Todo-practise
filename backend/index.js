const express =require('express') 
const { createTodo, updateTodo } = require('./type')
const app=express() 
const port=3000
app.use(express.json())

app.post('/todo', function(req,res)
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
    //mongo db logic -> 

    
})

app.get('/todo', function(req, res){

})

app.put('/completed', function(req, res){
    const createPayLoad=req.body; 
    const parsePayLoad=updateTodo.safeParse(createPayLoad); 
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:"Your input is wrong"
        })
    return;
    }
})
app.listen(port);  