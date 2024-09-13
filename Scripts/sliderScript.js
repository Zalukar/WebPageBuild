const 
    btnR = document.querySelector(".btnR"),
    btnL = document.querySelector(".btnL"),
    slider = document.querySelector("#containerSec"),
    slidersec = document.querySelectorAll(".slidersel");

    window.onload = function() {
        btnL.style.backgroundColor = '#fff';
      };

btnL.addEventListener("click",e=> moveToLeft());
btnR.addEventListener("click",e=> moveToRight());

function moveToRight() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(-100%)";
        if (slide.style.transform === "translateX(-100%)") {
            btnR.style.backgroundColor = '#fff';
            btnL.style.backgroundColor = '';
        }
    });
}


function moveToLeft() {
    slidersec.forEach(slide => {
        slide.style.transform = "translateX(0%)";
        if (slide.style.transform === "translateX(0%)") {
            btnL.style.backgroundColor = '#fff';
            btnR.style.backgroundColor = '';
        }
    });
}