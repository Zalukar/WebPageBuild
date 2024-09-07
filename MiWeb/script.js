const 
    btnR = document.querySelector(".btnR"),
    btnL = document.querySelector(".btnL"),
    slider = document.querySelector("#containerSec"),
    slidersec = document.querySelectorAll(".slidersel");

btnL.addEventListener("click",e=> moveToLeft());
btnR.addEventListener("click",e=> moveToRight());


function moveToRight() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(-100%)";
    });
}

function moveToLeft() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(0%)";
    });
}