//

class Animal {
    public animalName: string;

        constructor(theName: string){
            this.animalName = theName;
        }

    walk(distance: number){
        console.log("My name is " + this.animalName + " i am walked " + distance + " meters.");
    }
}

let myAnimal = new Animal("Dog");
myAnimal.walk(10);

class Reptiles extends Animal{
    constructor(theName: string){
        super(theName);
    }

    run(distance: number){
        console.log("My name is " + this.animalName + " I ran " + distance + " meters.");
    }
}

let myreptile = new Reptiles("Snake");
myreptile.run(100);