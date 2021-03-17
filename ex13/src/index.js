//Only change code below this line
function randomRangeNumber (minNumber, maxNumber) {
    
return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber();
console.log(randomRangeNumber);
//Only change code above this line

module.exports = randomRangeNumber;