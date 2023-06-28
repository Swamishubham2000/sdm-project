var exp=require("express");
var app=exp();
var mysql=require("mysql2");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"shubham@2000",
    database:"dac"
});
con.connect(function(err){
    if(!err)
    {
        console.log(" database connected ");
    }
    else
    {
        console.log("connection failed");
    }
});
app.get('/empform',function(req,res)
{
    res.sendFile(__dirname+"/empform.html");
});
app.get('/getname',function(req,res)
{
    var eid=req.query.empid;
    console.log(eid);
    con.query("select * from emp where empno="+eid,function(err1,result)
    {
        if(!err1)
        {
            str="";
            result.forEach(function(r)
            {
                str+="<h1> welcome "+r.ENAME+"</h1>";
            })   
            res.send(str);
            console.log(str);


        }
    })
})
app.listen(9000,function(){
    console.log(" server started at port 9000");
})