if (document.getElementById("imperial").checked) {
  console.log("imperial checked");
}

function bmiCount() {
  var weight_kgs = document.getElementById("weight").value;

  var height_cm = document.getElementById("height").value;
  var bmi = parseFloat(weight_kgs / Math.pow(height_cm / 100, 2)).toFixed(2);

  document.getElementById("bmi-result").innerHTML = bmi;

  if (bmi < 18.5)
    document.getElementById("status-result").innerHTML = "Underweight";
  else if (bmi > 18.5 && bmi < 25)
    document.getElementById("status-result").innerHTML = "Healthy";
  else if (bmi > 25 && bmi < 30)
    document.getElementById("status-result").innerHTML = "Overweight";
  else if (bmi > 30 && bmi < 35)
    document.getElementById("status-result").innerHTML = "Obesity Class I";
  else if (bmi > 35 && bmi < 40)
    document.getElementById("status-result").innerHTML = "Obesity Class II";
  else if (bmi > 40)
    document.getElementById("status-result").innerHTML =
      "Obesity Class III / Severe Obesity";

  console.log(bmi);
}

function helo() {
  console.log("Weight kgs = " + weight_kgs);
  console.log("Height cm = " + height_cm);

  alert(document.getElementById("weight-kgs").value);
  console.log(document.getElementById("weight-kgs").value);
  console.log(weight_kgs);
}
