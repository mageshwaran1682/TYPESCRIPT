console.log('Hello, I am from Playground Interfaces!');
function myAnimals(getVal) {
    var name = getVal.name;
    var age = getVal.age;
    var isAlive = getVal.isAlive;
    console.log(name + age + isAlive);
}
myAnimals({
    name: "Dogs",
    age: 12,
    isAlive: true
});
