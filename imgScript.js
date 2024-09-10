const img = document.getElementById("myPhoto"),
      secretDiv = document.getElementById("secretDiv");

window.onload = function() {

    setTimeout(() => {
      img.style.width = '18vw';
    }, 180);
    setTimeout(() => {
      secretDiv.style.width = '24vh'
      secretDiv.style.height = '24vh'
      secretDiv.style.color = '#ffffffde'
      secretDiv.style.backgroundColor = '#00000070'
    }, 1500);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);

  }
