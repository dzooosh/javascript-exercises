const removeFromArray = function (...args) {
    const array = args[0];
    const new_arr = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i]))
            new_arr.push(array[i]);
    }
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
