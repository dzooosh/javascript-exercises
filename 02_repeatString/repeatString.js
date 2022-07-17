const repeatString = function(strings, num) {
    let holder = strings;
    if (num >= 2) {
        for (let i = 0; i < (num - 1); i++) {
            holder = holder + strings;
        }
        return holder;
    }
    else if (num == 0) {
        return ''
    }
    else if (num < 0) {
        return 'ERROR'
    }
    else{
        return holder
    }
};

// Do not edit below this line
module.exports = repeatString;
