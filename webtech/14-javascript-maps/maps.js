let chetan = {
    name: "my name is Chetan",
    age: 30,
    isActive: true
}

let mayur = {
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

users.set("first", chetan);
users.set("second", mayur);
users.set("third", Gunjan);

console.log(users);