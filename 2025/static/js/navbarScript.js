console.log("js running");

function mobileHamBurgerToggle() {
var x = document.getElementById("mobile-myLinks");
if (x.style.display === "block") {
    x.style.display = "none";
} else {
    x.style.display = "block";
}
}

function mobile_dropdown_edition_click() {
    var x = document.getElementById("mobile-drop-edition-container");
    var i;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function mobile_dropdown_schedule_click() {
    var x = document.getElementById("mobile-drop-schedule-container");
    var i;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}