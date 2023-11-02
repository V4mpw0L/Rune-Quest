var skillButtons = document.querySelectorAll('#skillOptions button');
document.getElementById('skills').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.getElementById('skillOptions');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        this.classList.add('clicked');
    } else {
        menu.classList.add('hidden');
        this.classList.remove('clicked');
        skillButtons.forEach(function(button) {
            button.classList.remove('clicked');
        });
    }
});
document.getElementById('fishing').addEventListener('click', function(event) {
    event.stopPropagation();
    skillButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    this.classList.add('clicked');
    console.log('Você está pescando!');
});
document.getElementById('mining').addEventListener('click', function(event) {
    event.stopPropagation();
    skillButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    this.classList.add('clicked');
    console.log('Você está minerando!');
});
document.getElementById('crafting').addEventListener('click', function(event) {
    event.stopPropagation();
    skillButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    this.classList.add('clicked');
    console.log('Você está fazendo crafting!');
});
document.getElementById('combatMenu').addEventListener('click', function() {
    console.log('Você está em combate!');
});
document.getElementById('inventoryMenu').addEventListener('click', function() {
    console.log('Seu Inventory!');
});

document.getElementById('profileBtn').addEventListener('click', function() {
    console.log('Seu Perfil!');
});

document.addEventListener('click', function() {
    var menu = document.getElementById('skillOptions');
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        document.getElementById('skills').classList.remove('clicked');
        skillButtons.forEach(function(button) {
            button.classList.remove('clicked');
        });
    }
});
