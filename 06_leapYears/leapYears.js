function isDivisable(divident, divisor){
    return (divident % divisor == 0);  
}


const leapYears = function(inputYear) {

    return  ((isDivisable(inputYear, 100) && isDivisable(inputYear, 400)) ||
            (isDivisable(inputYear,4) && !isDivisable(inputYear, 100)));
};

// Do not edit below this line
module.exports = leapYears;
