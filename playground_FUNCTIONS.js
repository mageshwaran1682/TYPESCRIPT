console.log('Hello, I am from Playground Functions!');
function addMe(num1, num2) {
    console.log(num1 + num2);
    return;
}
addMe(2, 2);
function greetMe(fname, lname) {
    if (lname !== undefined) {
        console.log(fname + " " + lname + " " + "!");
    }
    else {
        console.log(fname + " " + "!");
    }
}
greetMe("Magesh");
var myFunc = (function () {
    function myFunc() {
        this.fname = "Magesh";
    }
    myFunc.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.fname);
        }, 500);
    };
    return myFunc;
}());
var myFunc1 = new myFunc;
myFunc1.sayHello();
