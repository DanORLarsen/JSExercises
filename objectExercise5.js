//1 - Clean the object
var dirtyObject = {
    _fht: 192492,
    name: "Alyssa P. Hacker",
    age: 26,
    _byz: 939205,
    _ttrs: 510852
  }
  //Only cleans obj if its these specific keys...
  function clean(obj) {
   delete obj._byz;
   delete obj._fht;
   delete obj._ttrs;
  }
  clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}
  console.log(dirtyObject);

  //2 - Remove oddNumbers method
  function removeOddNum(obj){
      Object.keys(obj).forEach(element => {
        if(typeof obj[element] === 'number')
        {if(obj[element] % 2 != 0){
            delete obj[element]
        }}
      });
      return obj;
  }
  //returns object with only a key in it.
  console.log(removeOddNum({a:2, b:3, c:5}))
  