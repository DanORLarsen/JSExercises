//2nd assignemnt in chapter 05 - Higher order. 

function loop(n, untill, fallOrIncrease, action){
    //Untill is true until it is not (in task is it until it reaches 0)
    while(untill(n))
    {
        //Action is the console.log action with the task completes
        action(n);
        //This is the decrement method that the task chose.
        n = fallOrIncrease(n);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
// Adding another loop that counts the other way, just for educational purposes. 
loop(1, n => n < 4, n => n + 1, console.log);
// → 1
// → 2
// → 3