const img = document.getElementById("myPhoto"),
      secretDiv = document.getElementById("secretDiv");

window.onload = function() {

    setTimeout(() => {
      img.style.width = '16vw';
    }, 180);
    setTimeout(() => {
      secretDiv.style.width = '20vh'
      secretDiv.style.height = '20vh'
      secretDiv.style.color = '#ffffffde'
      secretDiv.style.backgroundColor = '#00000047'
    }, 1500);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);

  }
