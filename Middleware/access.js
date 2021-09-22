const access=(req,res,next)=>{
    const date=new Date();
    if(date.getHours()>=9 && date.getHours()<=17 && date.getDay()>=1 && date.getDay()<=5){
        next()
    }
    else{
       res.sendFile(__dirname+"/notAvailable.html")
    }
}

module.exports=access