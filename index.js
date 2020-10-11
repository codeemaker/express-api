var express=require("express");
var body=require("body-parser");
var ap=require("path");
var student=require("./student");
var app=express();
app.use(body.json());
app.get("/",(req,res)=>{
 res.json(student);
});
app.post("/login",(req,res)=>{
  const user={
    id : student.length+1,
    name : req.body.name
  }
  student.push(user);
  res.json(user);
 });
 app.put("/api/:id",(req,res)=>{
   var index=student.findIndex((st)=>{
     return (st.id===parseInt(req.params.id))
   });
   if(index>=0){
     var std=student[index];
     std.name=req.body.name;
     res.json(std);
   }
   else{
     res.status(400);
     res.send(req.params.id+" "+index);
   }
 })
.listen(8080);
