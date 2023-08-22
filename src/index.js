const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const keys = Object.keys(MORSE_TABLE);
    const values = Object.values(MORSE_TABLE);
    let encodedString = [];
    for (let i = 0; i < expr.length; i += 10) {
        encodedString.push(expr.slice(i, i + 10));
    }
    let morse = [];
    encodedString.forEach(item => {
        let encodedLetter = '';
        if (item === '**********') {
            encodedLetter += ' ';
        } else {
            for (let i = 0; i < 5; i++) {
                encodedLetter += (item.slice(0 + i * 2, 2 + i * 2) === '11') ? '-' : ((item.slice(0 + i * 2, 2 + i * 2) === '10') ? '.' : '');
            }
        }
        morse.push(encodedLetter);
    });
    return morse.reduce((result, letter) => result += (letter === ' ') ? letter : values[keys.indexOf(letter)], '');
}

module.exports = {
    decode
}