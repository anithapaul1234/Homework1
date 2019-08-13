module.exports.reverse=(x)=>
{
    var x
    var reve= 0
    var re
    while(x>0)
    {
        re = x%10;
        reve = reve*10 + re;
        x =x/10;
    }
    console.log("Reversed Number"+reve);
    

}