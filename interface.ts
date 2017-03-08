// interface helps to get property of method.

interface RectangleOPtions {
    width: number;
    length: number;
    height?: number; //? means optional
}

function drawRectangle(options: RectangleOPtions){
    let width = options.width;
    let length = options.length;

    if (options.height){
        let height = options.height;
        //Draw 3D rectangle
    }
}

drawRectangle({
    width: 100,
    length: 20
});