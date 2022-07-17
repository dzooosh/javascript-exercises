const leapYears = function(yrs) {
    if (yrs % 4 == 0) {
        if (yrs % 100 == 0 && yrs % 400 !== 0) {
            return false;
        }else{
            return true;
        }
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
