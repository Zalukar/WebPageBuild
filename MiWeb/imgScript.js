window.onload = function() {
    const img = document.getElementById("myPhoto");
    setTimeout(() => {
      img.style.width = '58%';
    }, 180);
    setTimeout(() => {
      img.style.transform = 'rotate(540deg)';
    }, 120);
  }
