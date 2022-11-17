let number = 10 / 5;
for (let index = 0; index < number; index++) {
  console.log(index);
}

var key = 0;

if (key > 4) {
  key = 1;
} else if (key !== 2) {
  key = 2;
} else {
  key = 3;
}

switch (key) {
  case 1:
    console.log("ANSWER 1");
    break;
  case 2:
    console.log("ANSWER 2");
    break;
  case 3:
    console.log("ANSWER 3");
    break;
}
