// console.log();

module.exports = function toReadable(number) {
    let result = '';

    let simple = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    let decimal = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    let pointH = Math.floor(number / 100);
    let pointD = Math.floor(number / 10 - pointH * 10);
    let pointS = number - pointH * 100 - pointD * 10;
    let pointT = pointD * 10 + pointS;

    if (number >= 0 && number <= 19) {
        result = simple[number];
    }
    if (number >= 20 && number <= 99) {
        if (pointS != 0) {
            result = decimal[pointD] + ' ' + simple[pointS];
        } else {
            result = decimal[pointD];
        }
    }

    if (number >= 100) {
        if (pointS != 0 && pointT >= 20 && pointT <= 99) {
            result = simple[pointH] + ' ' + 'hundred' + ' ' + decimal[pointD] + ' ' + simple[pointS];
        }
        else if (pointS == 0 && pointT >=20 && pointT <= 99) {
            result = simple[pointH] + ' ' + 'hundred' + ' ' + decimal[pointD];
        }
        else if (0 < pointT && pointT <= 19) {
            result = simple[pointH] + ' ' + 'hundred' + ' ' + simple[pointT];
        }
        else {
            result = simple[pointH] + ' ' + 'hundred';
        }
    }
    return result;
}
