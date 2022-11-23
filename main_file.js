// const express=require("express");
// const app=express();
// // //for server creating;
// app.get("/home",(req,res)=>{
//     res.send("hello raja")
// })
// app.listen(5000,()=>{
//     console.log("Listening on port 3000");
// });


const express=require("express");
const app=express();
const knex=require('./conection');
const port=3000

app.use(express.json())

app.listen(port,()=> {
    console.log("server listing...")
})

// insert data.

app.post("/insert",async(req,res) => {
    try{
        await knex("crud").insert(req.body)
        res.send({data:req.body,massage:"your data inserted successfuly.."})
    }
    catch (error){
        res.send("Your Data Is Not Inserted........!")
    }

})


// Display all Data....

app.get("/read",async(req,res)=>{
    try{
        const info=await knex("crud")
        res.send(info)
    }
    catch(error){
        res.send("something here wrong.....! ")
    }
})

// Display single Data......

app.get("/single_data/:id",async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.params.id})
        res.send(info)

    }catch(error){
        res.send(error)

    }
})

// update data..

app.patch("/update/:id",async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.params.id}).update(req.body)
        res.send(200).json({message:info})

    }
    catch(error){
        res.send(error)
    }
})

// delete data.....

app.delete("/delete/:id",async(req,res)=>{
    try{
        const info=await knex("crud").where({id:req.params.id}).delete(req.body)
        res.send(200).json({message:info})
    }
    catch(error){
        res.send(error)
    }
})