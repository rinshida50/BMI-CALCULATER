//Create a Restaurant class which have menu as its property that can hold all the food available in the Restaurant class.

//1. create a method to display all the food available in the menu property
console.log("----------1---------");
for (let food in menu) {
    console.log(menu[food].name);
}



//2. create a method to add new food item to the menu property
//3. create a method to update availability key of a existing food details in the menu
//4. create a method to delete a food from the menu property

//menu: {“chicken briyani”: { name: “chicken briyani”, cuisine: ”south asia”, type: ’non veg’, available: true } }