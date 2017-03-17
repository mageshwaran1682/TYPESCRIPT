console.log('Hello, I am from Playground Functions!');

function addMe(num1: number, num2: number): number {
        console.log(num1 + num2);
    return;
}

addMe(2, 2);

function greetMe(fname: string, lname?: string ): void{
    if (lname !== undefined){
        console.log(fname + " " + lname + " " + "!");
    } else {
        console.log(fname + " " + "!");
    }
    
}

greetMe("Magesh");

class myFunc {
    fname = "Magesh";
    sayHello() {
        setTimeout(() => {
            console.log(this.fname);
        }, 500);
    }
}

let myFunc1 = new myFunc;
myFunc1.sayHello();
