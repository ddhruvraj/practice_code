let light = 1;
// document.getElementById("vr1").style.color = "black";
function myFunction() {
    if (light == 1) {
        document.body.style.backgroundColor = "black";
        document.getElementById("terms").style.color = "#08BCEB";
        document.getElementById("darkmode-btn").style.backgroundColor = "black";
        document.getElementById("vr1").style.color = "08BCEB";
        light = 0;
    }
    else {
        document.body.style.backgroundColor = "white";
        document.getElementById("terms").style.color = "black";
        document.getElementById("darkmode-btn").style.backgroundColor = "white";
        document.getElementById("vr1").style.color = "black";
        light = 1;
    }

}