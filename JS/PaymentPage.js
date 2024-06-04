var radioButton1 = document.getElementById("option1");
var radioButton2 = document.getElementById("option2");
var radioButton3 = document.getElementById("option3");

var clickableElement1 = document.getElementById("option1-box");
var clickableElement2 = document.getElementById("option2-box");
var clickableElement3 = document.getElementById("option3-box");

clickableElement1.addEventListener("click", function () {
    radioButton1.checked = true;
});

clickableElement2.addEventListener("click", function () {
    radioButton2.checked = true;
});

clickableElement3.addEventListener("click", function () {
    radioButton3.checked = true;
});


var radioButton3 = document.getElementById("plan1");
var radioButton4 = document.getElementById("plan2");


var clickableElement3 = document.getElementById("plan1-box");
var clickableElement4 = document.getElementById("plan2-box");


clickableElement3.addEventListener("click", function () {
    radioButton3.checked = true;
    document.getElementById("plan").innerHTML = "Yearly";
    document.getElementById("plan-price").innerHTML = "Rp 666.000/year";
    document.getElementById("subtotal").innerHTML = "Rp 600.000/year";
    document.getElementById("vat").innerHTML = "Rp 66.000/year";
    document.getElementById("total").innerHTML = "Rp 666.000/year";

    document.getElementById("plan0").innerHTML = "Yearly";
    document.getElementById("plan-price0").innerHTML = "Rp 666.000/year";
    document.getElementById("subtotal0").innerHTML = "Rp 600.000/year";
    document.getElementById("vat0").innerHTML = "Rp 66.000/year";
    document.getElementById("total0").innerHTML = "Rp 666.000/year";
});

clickableElement4.addEventListener("click", function () {
    radioButton4.checked = true;
    document.getElementById("plan").innerHTML = "Monthly";
    document.getElementById("plan-price").innerHTML = "Rp 72.150/month";
    document.getElementById("subtotal").innerHTML = "Rp 65.000/month";
    document.getElementById("vat").innerHTML = "Rp 7.150/month";
    document.getElementById("total").innerHTML = "Rp 72.150/month";

    document.getElementById("plan0").innerHTML = "Monthly";
    document.getElementById("plan-price0").innerHTML = "Rp 72.150/month";
    document.getElementById("subtotal0").innerHTML = "Rp 65.000/month";
    document.getElementById("vat0").innerHTML = "Rp 7.150/month";
    document.getElementById("total0").innerHTML = "Rp 72.150/month";
});
