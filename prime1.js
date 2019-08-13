module.exports.prime=(x)=>
{
    var x;
    for(let i=2;i<x;i++)
    {
        if(x%i==0)
        {
            console.log("not prime number");
            break;
        }
        else{
            console.log("prime number");
            break;
        }
    }
}