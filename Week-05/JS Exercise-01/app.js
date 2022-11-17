function gcd_more_than_two_numbers(input) {
  if (toString.call(input) !== "[object Array]") return false;
  var len, a, b;
  len = input.length;
  if (!len) {
    return null;
  }
  a = input[0];
  for (var i = 1; i < len; i++) {
    b = input[i];
    a = gcd_two_numbers(a, b);
  }
  return a;
}

function gcd_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gcd_more_than_two_numbers([8, 6]));
console.log(gcd_more_than_two_numbers([42, 56]));
console.log(gcd_more_than_two_numbers([96, 132]));
