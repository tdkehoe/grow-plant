var myPlant = {
    state: 'a seed',
    height: 0,
    typeOfPlant: null,
    flower: "doesn't have",

    care: function(type, water, food, antifreeze, sun) {
        myPlant.typeOfPlant = type;
        if (type === 'rose') {
            if (water > 0) { myPlant.state = 'alive' }
            if (water > 0) { myPlant.isPlant = true }
            if (water > 0) { myPlant.height = myPlant.height + (2 * water) }
            if (food > 0) { myPlant.height = myPlant.height + (1 * food) }
            if (myPlant.height > 12) {myPlant.height = 12}
            if (sun > 0) { myPlant.flower = "has" }
            if (antifreeze > 0) { myPlant.state = 'dead' }
            if (water > 4 && food > 4) { myPlant.state = 'dead' }
        }

        if (type === 'pine') {
            if (water > 0) { myPlant.state = 'alive' }
            if (water > 0) { myPlant.isPlant = true }
            if (water > 0) { myPlant.height = myPlant.height + (4 * water) }
            if (food > 0) { myPlant.height = myPlant.height + (2 * food) }
            if (antifreeze > 0) { myPlant.state = 'dead' }
        }
    }
};

myPlant.care('rose', 4, 4, 0, 1); // type, water, food, antifreeze, sun

console.log("My " + myPlant.typeOfPlant + " is " + myPlant.state + ".");
console.log("The height of my " + myPlant.typeOfPlant + " is " + myPlant.height + " inches.");
console.log("My " + myPlant.typeOfPlant + " " + myPlant.flower + " a flower.");
