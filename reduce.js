let arrays = [[1,2,3],[4,5],[6]];
let oneArray = [];
let arraysTwo = [[1,2,3],[4,5],[6]];
function reduceinto(array, combine, outArray) {
    for (let element of array) {
        for(let element2 of element)
     combine(outArray, element2);
    }
  }

function fArray(array2, element){
    array2.push(element);
}

//Den løsning hvor der anvendes concat og ikke bliver lavet om på reduce. 
console.log(arrays.reduce((flat,current) => flat.concat(current),[]));
//Min egen fusker løsning
reduceinto(arrays,fArray,oneArray);
console.log(oneArray);
