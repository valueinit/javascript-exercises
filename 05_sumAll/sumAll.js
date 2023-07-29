function isInvalidNumber(value){
    return typeof value != "number" || value < 0;
}

const sumAll = function(number1, number2) {
    
    if(isInvalidNumber(number1) || isInvalidNumber(number2)){
        return "ERROR";
    }
  
    let smallerNumber;
    let biggerNumber;
    
    if(number1>number2){
        smallerNumber = number2;
        biggerNumber = number1;
    }else{
        smallerNumber = number1;
        biggerNumber = number2;
    }

    let summe = 0;
    for (let i = smallerNumber ; i <= biggerNumber; i++){
        summe += i; 
    }
    return summe;
};

// Do not edit below this line
module.exports = sumAll;

let x = sumAll(-2,4);
