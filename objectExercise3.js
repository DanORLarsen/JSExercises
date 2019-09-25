//Adding key/value pairs after creating the object.
var obj = {};
obj.hello = "World";
obj["var with spaces lul"] = 25;
console.log(obj);
//Adding an object in the object after object was created.
obj.you = {};
//Adding key/value to newly created object inside the original object.
obj.you.favoriteColor = "you";
console.log(obj);
