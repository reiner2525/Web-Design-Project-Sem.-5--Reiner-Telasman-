function showBMI(){

    var bmi = document.getElementById("bmi-box");
    var status = document.getElementById("title");

    if(bmi.value <= 18.4){
        status.innerHTML = "You are underweight.\nYou need to gain your BMI."
    }
    else if(bmi.innerHTML >= 18.5 || bmi.innerHTML <= 24.9){
        status.innerHTML = "You are normal."
    }
    else if(bmi.innerHTML >= 25.0 || bmi.innerHTML <= 29.9){
        status.innerHTML = "You are overweight. You need to lower your BMI."
    }
    else if(bmi.innerHTML >= 30){
        status.innerHTML = "You are obese. You need to lower your BMI and need some help from professional."
    }
}
showBMI();