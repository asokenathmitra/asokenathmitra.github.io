function mobileHamBurgerToggle() {
    var x = document.getElementById("mobile-myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mobile_dropdown_click() {
    var x = document.getElementById("mobile-drop-container");
    var i;

    if (x.style.display === "block") {
            x.style.display = "none";
    } else {
            x.style.display = "block";
    }
}