var isImperial = true;

function onLoadFunction() {
  if (document.getElementById("imperial").checked) {
    console.log("imperial checked");
  }
}

function imperialChecked() {
  document.getElementById("weight").placeholder = "Pound";
  document.getElementById("height").placeholder = "Inches";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("imperialLabel").style.color = "#0275D8";
  document.getElementById("metricLabel").style.color = null;

  isImperial = true;
}

function metricChecked() {
  document.getElementById("weight").placeholder = "Kgs";
  document.getElementById("height").placeholder = "Centimetre";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("metricLabel").style.color = "#0275D8";
  document.getElementById("imperialLabel").style.color = null;

  isImperial = false;
}

function bmiCount() {
  var bmi = 0.0;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (isImperial) {
    bmi = parseFloat((weight / Math.pow(height, 2)) * 703).toFixed(2);
  } else {
    bmi = parseFloat(weight / Math.pow(height / 100, 2)).toFixed(2);
  }

  if (weight === "" || height === "") {
    window.alert("Please complete inputs!");
  } else {
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
  }
}
