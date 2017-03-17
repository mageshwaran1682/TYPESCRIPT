console.log('Hello, I am from Playground Interfaces!');

interface Animal{
    name: string;
    age: number;
    isAlive: boolean;
}

function myAnimals(getVal: Animal){
    let name = getVal.name;
    let age = getVal.age;
    let isAlive = getVal.isAlive;
    console.log(name + age + isAlive);
} 

myAnimals({
    name: "Dogs",
    age: 12,
    isAlive: true
})
