let arrays = [[1,2,3],[4,5],[6]];
let oneArray = [];

function reduce(array, combine, outArray) {
    for (let element of array) {
        for(let element2 of element)
     combine(outArray, element2);
    }
  }

function fArray(array2, element){
    array2.push(element);
}

reduce(arrays,fArray,oneArray);
//Den løsning hvor der anvendes concat og ikke bliver lavet om på reduce. 
console.log(arrays.reduce((flat,current) => flat.concat(current),[]));
//Min egen fusker løsning
console.log(oneArray);