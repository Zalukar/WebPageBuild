const img = document.getElementById("myPhoto"),
      secretDiv = document.getElementById("secretDiv");

window.onload = function() {

    setTimeout(() => {
      secretDiv.style.color = '#ffffffde'

    }, 1500);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);

    adjustImageSize();
  };

  window.addEventListener('resize',function() {
    adjustImageSize();
  });

  img.addEventListener('mouseover',()=>{
    img.style.filter = 'blur(1.8px) grayscale(50%)'
    secretDiv.style.opacity = "1"
  });
  img.addEventListener('mouseout',()=>{
    secretDiv.style.opacity = "0"
    img.style.filter = 'blur(0) grayscale(0)'
  });

  secretDiv.addEventListener('mouseover',()=>{
    secretDiv.style.opacity = "1"
    img.style.filter = 'blur(1.8px) grayscale(50%)'
  });

  secretDiv.addEventListener('mouseout',()=>{
    secretDiv.style.opacity = "0"
    img.style.filter = 'blur(0) grayscale(0)'
  });

function adjustImageSize() {
  if (window.matchMedia('(max-width: 960px)').matches) {
    setTimeout(() => {
      img.style.width = '22vw';
      }, 180);
  }
  else if (window.matchMedia('(min-width: 961px) and (max-width: 1843px)').matches) {
    setTimeout(() => {
      img.style.width = '15vw';
      }, 180);
  }
  else if (window.matchMedia('(min-width: 1843px)').matches) {
    setTimeout(() => {
      img.style.width = '16vw';
      }, 180);
  }
}