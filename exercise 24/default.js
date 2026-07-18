
// exercise 24
function calculateArea(width, height = width) {
    return width * height;
}

// Rectangle
console.log(calculateArea(5, 10)); 

// Square (height defaults to width)
console.log(calculateArea(6)); 