// console.log();

module.exports = function toReadable(number) {
    let result = '';

    let single = {
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

    let double = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    let hundreds = Math.floor(number / 100);
    let dozens = Math.floor(number / 10 - hundreds * 10);
    let units = number - hundreds * 100 - dozens * 10;
    let point = dozens * 10 + units;

    if (number >= 0 && number <= 19) {
        result = single[number];
    } else if (number >= 20 && number <= 99) {
        if (Number.isInteger(number / 10)) {
            result = double[dozens];
        } else result = double[dozens] + ' ' + single[units];
    } else if (number >= 100) {
        if (Number.isInteger(number / 100)) {
            result = single[hundreds] + ' ' + 'hundred';
        } else if (point > 0 && point <= 19) {
            result = single[hundreds] + ' ' + 'hundred' + ' ' + single[point];
        }
        else if (units == 0 && point >= 20 && point <= 99) {
            result = single[hundreds] + ' ' + 'hundred' + ' ' + double[dozens];
        } 
        else if (units != 0 && point >= 20 && point <= 99) {
            result = single[hundreds] + ' ' + 'hundred' + ' ' + double[dozens] + ' ' + single[units];
        } 
    }

    return result;
}
