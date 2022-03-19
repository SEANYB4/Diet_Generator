

// Generate a random index based on the range needed
function generateRandomNumber(range) {

    let randomNum = Math.floor(Math.random()*range);
    //console.log(randomNum);
    return randomNum;

}


// Object to hold meal options and function for generating a meal plan

const diet = {


    breakfasts: ['Cereal and Milk', 'Fry Up', 'Nothing', 'Pancakes and Syrup', 'Fruit'],
    lunches: ['Poached eggs and Avocado Toast', 'Smoked Salmon and Scrambled Eggs', 'Tuna and Rice'
    , 'Sausage and Egg Muffin', 'Chicken Noodle Soup'],
    dinners: ['Chow Mein', 'Haddock and Broccolli', 'Chilli Con Carne', 'Ramen', 'Maccaroni Cheese'
    , 'Steak, Chips and Peas', 'Tuna and Rice', 'Omelette and Bacon']

}


function mealPlan() {

    for(let prop in diet){

        let index = generateRandomNumber(diet[prop].length-1);
       
        console.log("Your selection from " + prop + " is " + diet[prop][index]);
    }
}

//ACII Art Introduction

console.log('Welcome to Diet Generator \n');

console.log('| \\  |  |--  ---    |  \\  |          / \\     | \\    |');
console.log('| |  |  |     |     |  |  |         /   \\    |  \\   |');
console.log('| |  |  |--   |     |  /  |        /     \\   |   \\  |');
console.log('| |  |  |     |     |-    |       /------ \\  |    \\ |');
console.log('| /  |  |__   |     |     |____  /         \\ |     \\| \n');

console.log('Let food be thy medicine, and medicine be thy food! \n');




// Call Meal Plan Function
mealPlan();

console.log('\nEnjoy your food! \n');










