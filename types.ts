// BOOLEAN
let IsDone : boolean = false;

// NUMBER
let myAge : number = 35;

// TEXT & STRING
let myName : string = "Mageshwaran V";


// TEMPLATE STRING
let greeting : string = "Hello" + myName;
let greeting2 : string = `Hello, ${myName}`;

// ARRAYS
let count : Array<number> = [1, 2, 3, 4];

// If you don't know the type (watch out for using It's easy to use this a lot, but you'll miss out on type checking.)
let anything : any = 5;
anything = "we change to string";
anything = false;

// RETURN NOTHING
function greeter(name: string) : void{
    console.log("Hello" + myName);
}

// ENUMS

let initialPos = 1;
enum joystickDirections {up, down, right, left};

if (initialPos === joystickDirections.down){
    console.log (joystickDirections.down);
}