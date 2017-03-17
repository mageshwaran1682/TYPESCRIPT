// BOOLEAN
var IsDone = false;
// NUMBER
var myAge = 35;
// TEXT & STRING
var myName = "Mageshwaran V";
// TEMPLATE STRING
var greeting = "Hello" + myName;
var greeting2 = "Hello, " + myName;
// ARRAYS
var count = [1, 2, 3, 4];
// If you don't know the type (watch out for using It's easy to use this a lot, but you'll miss out on type checking.)
var anything = 5;
anything = "we change to string";
anything = false;
// RETURN NOTHING
function greeter(name) {
    console.log("Hello" + myName);
}
// ENUMS
var initialPos = 1;
var joystickDirections;
(function (joystickDirections) {
    joystickDirections[joystickDirections["up"] = 0] = "up";
    joystickDirections[joystickDirections["down"] = 1] = "down";
    joystickDirections[joystickDirections["right"] = 2] = "right";
    joystickDirections[joystickDirections["left"] = 3] = "left";
})(joystickDirections || (joystickDirections = {}));
;
if (initialPos === joystickDirections.down) {
    console.log(joystickDirections.down);
}
