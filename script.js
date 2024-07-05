
document.getElementById("refreshButton").addEventListener("click", function() {
        location.reload(); // Recarga la página
});


function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const menu = navbar.querySelector('ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
};

