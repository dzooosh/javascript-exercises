const ftoc = function(num) {
  let temp = 0;
  temp = (num - 32) * (5/9);
  const result = Math.round(temp * 10) / 10;
  return result;
};

const ctof = function(num) {
  let temp = 0;
  temp = (num * (9/5)) + 32;
  const result = Math.round(temp * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};