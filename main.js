//A 1
function lunch() {
  let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
  let maxLength = 0;
  let maxWord = "";
  for (let i = 0; i < lunchArray.length; i++) {
    if (lunchArray[i].length > maxLength) {
      maxLength = lunchArray[i].length;
      maxWord = lunchArray[i];
    }
  }

  //A 2
  console.log(maxLength);
  return maxWord; //A 3
}

//A 3
console.log(lunch());

//A 4
function lunch2() {
  let lunchArray = ["Burger Salad Lasagna Sushi Meatloaf"];
  let arr = lunchArray[0].split(" ");

  let maxLength = 0;
  let maxWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      maxWord = arr[i];
    }
  }

  console.log(maxLength);
  return maxWord;
}

console.log(lunch2());

//B
function odd(list) {
  for (let i = 1; i < list.length; i += 2) {
    console.log(list[i]);
  }
}

console.log(odd([0, 1, 2, 3, 4, 5]));

//C
function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

  console.log(factorial(3));

//D
function conditional(mpg) {
  if (mpg === 120) {
    console.log("if you are using the Tom Ogle fuel system, props");
  } else if (mpg > 35) {
    console.log("The fish of the sea smile at your conservation");
  } else if (mpg >= 30 && mpg <= 35) {
    console.log("Not many gas stops will be taken");
  } else if (mpg >= 21 && mpg <= 29) {
    console.log("Atmosphere smiles at your decision");
  } else if (mpg >= 17 && mpg <= 20) {
    console.log("it's palpable");
  } else if (mpg >= 11 && mpg <= 16) {
    console.log("Planet still frowns upon this, and so does your wallet");
  } else if (mpg <= 10) {
    console.log("gas guzzler");
  }
}

conditional(12);
