function every(arrayTest, test) {
    let trueOrFalse;
    arrayTest.forEach(element => {
        if(!test(element)){
            trueOrFalse = false;
        }
    });
    //Would always break loop if false and then return true, if i just said return false in forEach.
    //Because it would still execute the rest, ( return true; after it was ordered to return false;)
    if(typeof trueOrFalse === 'undefined')
    {return true;}
    return trueOrFalse;
  }
  let d = [1,2,3]
  console.log(d[0]);
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true