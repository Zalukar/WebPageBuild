const   menu = document.getElementById('navContent'),
        menuIcon = document.getElementById('menu');

        menuIcon.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 960px)').matches) {
                // Alterna entre 'block' y 'none'
                if (menu.style.display === 'none' || menu.style.display === '') {
                    menu.style.display = 'block'; // Muestra el menú
                } else {
                    menu.style.display = 'none'; // Oculta el menú
                }
            }
        });