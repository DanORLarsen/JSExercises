//Create an object that contains information about you.

let aboutMe = {
    name: {
    firstName: "Dan",
    middleName: "Oliver Runo",
    lastName: "Larsen"},
    age: "22",
    hometown: "Kettinge",
    extra: {
        favoriteShow: ["Flash", "Arrow", "Black Clover", "A good place"],

        Occupation: "Student",
        dob: "04-04-1997",
        pets: {dog: "I have no dog", cat: "I have no cat"}
    }
}
console.log(aboutMe);
console.log(aboutMe.extra.favoriteShow);
console.log(aboutMe.name.firstName + " " + aboutMe.name.middleName + " " +  aboutMe.name.lastName);

