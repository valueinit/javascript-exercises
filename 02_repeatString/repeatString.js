const repeatString = function(textInput , times) {
    let textOutput = '';
    if (times < 0){
        return 'ERROR';
    }

    for (let i = 0; i < times; i++) {
        textOutput = textOutput + textInput;
    }
    return textOutput;
};

// Do not edit below this line
module.exports = repeatString;
