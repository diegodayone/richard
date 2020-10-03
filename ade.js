/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

function Dice(){
    return Math.floor(Math.random() * 6 + 1)
}

function RollTheDices(numberOfDices) {
    let result = {
        sum: 0,
        values: []
    }

    for(let i = 0; i < numberOfDices; i ++){
        let diceScore = Dice() // we need to roll the dices once for every unit in the numberOfDices
        result.sum += diceScore  // for each roll, we need to add the value to the "history"
        result.values.push(diceScore) // and then we need to sum the value to the result
    }

    return result
}
