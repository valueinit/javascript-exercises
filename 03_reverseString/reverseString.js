const reverseString = function(wordForward) {
    const wordArrayBackward = [''];
    const wordArrayForward = Array.from(wordForward);
    const wordArrayLength = wordArrayForward.length;

    for (let i = 0 ; i < (wordArrayLength + 1) ; i++){
        wordArrayBackward.push(wordArrayForward[wordArrayLength - i]);
    }

    const wordBackward = wordArrayBackward.join('');
    return wordBackward;
};

// Do not edit below this line
module.exports = reverseString;
