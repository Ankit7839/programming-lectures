let Chetan = {
    name: "my name is Chetan",
    age: 30,
    isActive: true
}

let Mayur = {
    name: "my name is Mayur",
    age: 28,
    isActive: true
}

let Gunjan = {
    name: "my name is Gunjan",
    age: 30,
    isActive: false
}

let users = new Map()
//console.log(typeof(users));

users.set("first", Chetan);
users.set("second", Mayur);
users.set("third", Gunjan);

console.log(users);

