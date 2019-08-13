module.exports.prime2=(a,b)=>
{
    var x;
    var i;
    var b
    var a;
    var flag
    while (a < b)
    {
        flag = 0;
        for(i = 2; i <= a/2; ++i)
        {
            if(a % i == 0)
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0){
            console.log(a);}
        ++a;
    }
    return 0;

}