document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var menu = document.getElementById('menu');

    menuButton.addEventListener('mouseover', function() {
        menu.style.display = 'flex';
    });

    menuButton.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 200);
    });

    menu.addEventListener('mouseover', function() {
        menu.style.display = 'flex';
    });

    menu.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menuButton.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 8000);
    });
});