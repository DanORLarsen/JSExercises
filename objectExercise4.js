//1 - Fix the attempts to access values in the persson object.
var key = "name";
var person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};
console.log(person.age); // => 26
console.log(person[key]);// => Alyssa P. Hacker

console.log("step 2");

//2 - Make full name return string with full name
var alyssa = {
    name: {
      first: "Alyssa",
      middle: "P.",
      last: "Hacker"
    },
    age: 26
  };
  
  function fullName(person) {
      nameF = "";
        if(typeof person.name.first != 'undefined'){
          nameF = person.name.first;
      }
      nameM = "";
        if(typeof person.name.middle != 'undefined'){
        nameM = " " + person.name.middle;
      }
      nameL = "";
      if(typeof person.name.last != 'undefined'){
        nameL = " " + person.name.last;
    }
      return nameF + nameM + nameL;
    // TODO: your code here
  }
  
  fullName(alyssa); // => "Alyssa P. Hacker"
  console.log(fullName(alyssa));

  //3 - What happends if they have no middle name? (Fixed so it dossent say "John undefined Doe")
  console.log(fullName({name: {first: "John", last: "Doe"}})); // => "John Doe"

  //4 - Create method that can store an array of person objects into an array of full names (try to use fullName(person))
  function arrayNames(person){
      let array = [];
      person.forEach(element => {
          array.push(fullName(element))
      });
      return array;
  }
  let people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21},
    {name: {first: "Dan", last: "Larsen"}, age: 22}
  ];
  let arrayOfNames = arrayNames(people);
  console.log(arrayOfNames); // does return names only in an array

  //4.3 - create method that finds average age of persons.
  function avgAge(person){
      let totalAge = 0;
      person.forEach(element => {
          totalAge = totalAge + element.age;
      });
      return totalAge/person.length;
  }
  console.log(avgAge(people)); // 31.3333...

  //4.4 - Create method that gives all people above a surtain age. 
  function above(person, age){
      let aboveAge = [];
      person.forEach(element => {
          if(element.age > age)
          {aboveAge.push(element)}
      });
      return aboveAge;
  }
console.log(above(people, 26)); //Gives every person above 26 (excluded 26yo)



  