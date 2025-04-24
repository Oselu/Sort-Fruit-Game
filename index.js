let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function arrangeFruit (){
for (let arrayindex=0; arrayindex < fruit.length; arrayindex += 1)
    if (fruit[arrayindex] === "🍎"){
        appleShelf.textContent += fruit [arrayindex]
    }
    else if (fruit[arrayindex] === "🍊"){
        orangeShelf.textContent += fruit[arrayindex]
    } 
}

arrangeFruit()
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

