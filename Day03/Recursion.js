function isEven(num){
    if (num<0)
     num = Math.abs(num);
    
    if (num===0)
        return true;
    
     if (num===1)
        return false;
    
    else
    
        return isEven(num-2);
    
 }

 console.log(isEven(-113));


 
