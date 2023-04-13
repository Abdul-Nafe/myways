let ans = "";
const fizzBuzz = ( number) =>{
    let sum = 0;
    for(let i =  0 ; i < number.length ; i++){
        sum+=number[i];
    }
    for(let  i= 1 ; i <= sum ; i++){
        if(i % 4 == 0){
            ans+=" Fizz ";
        }
        else if(i % 5 == 0){
            ans+=" Buzz "
        }
        else if(i % 5 == 0  && i % 4 == 0){
            ans+=" FizzBuzz ";
        }
        else 
       ans+=i+" ";
    }
    console.log(ans)

}
const phone = [9,6 ,0,2 , 5, 4 ,8 ,3 ,6 ,8];
fizzBuzz(phone);
