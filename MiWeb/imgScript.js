window.onload = function() {
    const img = document.getElementById("myPhoto");
    setTimeout(() => {
      img.style.width = '16vw';
    }, 180);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);
  }
