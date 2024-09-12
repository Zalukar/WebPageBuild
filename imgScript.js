const img = document.getElementById("myPhoto"),
      secretDiv = document.getElementById("secretDiv");

window.onload = function() {

    setTimeout(() => {
      secretDiv.style.width = '24vh'
      secretDiv.style.height = '24vh'
      secretDiv.style.color = '#ffffffde'
      secretDiv.style.backgroundColor = '#00000070'
    }, 1500);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);

    adjustImageSize();
  };

  window.addEventListener('resize',function() {
    adjustImageSize();
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
  else if (window.matchMedia('(min-width: 1843px) and (max-width: 1866px)').matches) {
    setTimeout(() => {
      img.style.width = '18vw';
      }, 180);
  }
}
