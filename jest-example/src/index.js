function sum(a = 0, b = 0) {
  return parseInt(a + b);
}

function sub(a = 0, b = 0) {
  return parseInt(a - b);
}

function noTested(msg) {
  return msg;
}

module.exports = {
  sum,
  sub
};
