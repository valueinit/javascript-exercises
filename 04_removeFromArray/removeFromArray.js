const removeFromArray = function( arrayInput , ...toBeRemoveds ) {
    const arrayOutput = [];


    for (let i = 0; i < arrayInput.length; i++){
        if (toBeRemoveds.includes(arrayInput[i]) == false){
            arrayOutput.push(arrayInput[i]);
        }
        
    }

    return arrayOutput;

};

// Do not edit below this line
module.exports = removeFromArray;

let x = removeFromArray([1, 2, 3, 4], 3);