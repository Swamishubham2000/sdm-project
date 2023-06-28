var exp=require('express');
var bd=require('body-parser');
var app=exp();
app.use(bd.urlencoded({extended: false}));
app.get('/getform',function(req,res)
{
    res.sendFile(__dirname+"/exam.html");
});

app.post('/getDataTable',function(req,res)
{
    var name=req.body.name;
    var date=req.body.date;
    var email=req.body.email;
    var quli=req.body.quli;
    res.write("<table border=1>");
    res.write("<tr>");
    res.write("<td>name:</td>");
    res.write("<td>"+name+"</td></tr>");
    res.write("<tr>");
    res.write("<td>birth date:</td>");
    res.write("<td>"+date+"</td></tr>");
    res.write("<tr>");
    res.write("<td>emailid:</td>");
    res.write("<td>"+email+"</td></tr>");
    res.write("<tr>");
    res.write("<td>qulificattion:</td>");
    res.write("<td>"+quli+"</td></tr>");
    res.write("</table>");

   

})



app.all('*',function(req,res)
{
    res.send("invalid url");
});




app.listen(9000,function(){
    console.log(" server started at port 9000");
})