let BMI = null;

function calculateBMI(weight, height) {
  BMI = weight / (height * height);
  return BMI.toFixed(2);
}

function interpretBMI(num) {
  if (num < 18.5) {
    return "Underweight";
  } else if (num === 18.5 || num < 25) {
    return "Normal  Weight";
  } else if (num === 25 || num < 30) {
    return "Overweight";
  } else {
    return "obese";
  }
}

console.log(`The calculated BMI of Adesh Shah is ${calculateBMI(90, 1.91)}`);
console.log(`He falls under ${interpretBMI(BMI)} category`);
