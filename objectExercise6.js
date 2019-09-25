// 1 - Represent stuff from the daily life as objects. Choise = Sport

let volleyball = {
positions:{
    setter: "" //Will create rest after initial object creations
},
fieldWidth: "",
fieldLength: "",

netHeightMen: "2.43 M",
}
console.log(volleyball);
volleyball.netHeightWomen = "2.24 M";
volleyball.positions["outside_hitter"] = 2;
volleyball.positions.setter = 1;
volleyball.positions["net middle blocker"] = 3;
volleyball.positions.opposite = 4;
volleyball.positions["outside hitter"] = 5;
volleyball.positions.libero = 6;
volleyball.fieldLength = "18 M";
volleyball.fieldWidth = "9 M";
console.log(volleyball);

// 2 - Create a word counter, that creates an object with key and times used in word.
function countWords(text){
    let obj = {};
text.split(" ").forEach(element => {
    let value = 0;
    text.split(" ").forEach(elementIn => {
        if(element.toLowerCase() == elementIn.toLowerCase())
        {value++;}
    });
    obj[element.toLowerCase()] = value;
});
console.log(obj);
}
countWords("hello hello"); // => {"hello": 2}
countWords("Hello hello"); // => {"Hello": 1, "hello": 1}
countWords("The quick brown"); // => {"The": 1, "quick": 1, "brown": 1}
//Make it non case sensitive.
//3 - create charCounter
function countCharacters(text){
    let obj = {};
text.split("").forEach(element => {
    let value = 0;
    text.split("").forEach(elementIn => {
        if(element.toLowerCase() == elementIn.toLowerCase())
        {value++;}
    });    
    obj[element.toLowerCase()] = value;
});
console.log(obj);
}
countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}
//4 - Create select that takes and object and array of keys, which extract em from original object.
function select(obj, keys){
    let newObj = {};
    Object.keys(obj).forEach(element => {
        keys.forEach(elementKey => {
            if (element == elementKey){
                newObj[element] = obj[element];
            }
        });
    });
    console.log(newObj);
}
select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}

//5 - create extend that adds value from 2 objects into another.
function extend(obj1, obj2){
    let newObj = {};
    Object.keys(obj1).forEach(element => {
        Object.keys(obj2).forEach(elementKey => {
            if (element == elementKey){// Here it dossent matter if i use element or elementKey since it points to the same key name. 
                if(obj1[element] > obj2[element])
                {newObj[element] = obj1[element];}
                else{newObj[element] = obj2[element]}
            }
            else{ // Here it does matter alot!.
                if(typeof obj1[element] != 'undefined')
                {newObj[element] = obj1[element];}
                if(typeof obj2[elementKey] != 'undefined')
                {newObj[elementKey] = obj2[elementKey];}
                
            }
        });
    });
    console.log(newObj);
}
extend({a: 1}, {b: 2}); // => {a: 1, b: 2}
extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}