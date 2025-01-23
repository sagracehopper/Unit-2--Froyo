let froyoFlavor = prompt("Write your fav froyo flavors");
console.log(froyoFlavor);

let flavorArray = froyoFlavor.split(",");
//split method on the string; seperate by commas
console.log(flavorArray);
//create an empty object; add the key-value (objects) to the pair
let flavorCount = {


}
//looping through the flavorArray 
flavorArray.forEach(flavor => {
    if (!flavorCount[flavor]) { flavorCount[flavor] = 1 }
    else {
        flavorCount[flavor]++
    }

});
console.table(flavorCount);

//variable has to be an array 
//Array- square brackets, numbers,couple of elements, 
//Objects- curly brackets, has to be key-value pair, key has to be a string 


