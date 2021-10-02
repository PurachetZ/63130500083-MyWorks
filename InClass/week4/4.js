function distance(p1, p2) {
    console.log(typeof p1); //object
    console.log(typeof p2); //object
    // ** ‐ The exponentiation assignment operator
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
    console.log(distance({ x: 1, y: 1 }, { x: 2, y: 2 }));