var skillButtons = document.querySelectorAll('#skillOptions button');
document.getElementById('skills').addEventListener('click', function(event) {
    event.stopPropagation();
    var menu = document.getElementById('skillOptions');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        this.classList.add('clicked');
        document.getElementById('messageBox').innerHTML += '<p>Você clicou em Skills!</p>';
    } else {
        menu.classList.add('hidden');
        this.classList.remove('clicked');
        skillButtons.forEach(function(button) {
            button.classList.remove('clicked');
        });
        document.getElementById('messageBox').innerHTML += '<p>Você fechou Skills!</p>';
    }
});

function handleSkillButtonClick(event) {
    event.stopPropagation();
    skillButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    this.classList.add('clicked');
    document.getElementById('messageBox').innerHTML += '<p>Você está ' + this.id + '!</p>';
}

document.getElementById('fishing').addEventListener('click', handleSkillButtonClick);
document.getElementById('mining').addEventListener('click', handleSkillButtonClick);
document.getElementById('crafting').addEventListener('click', handleSkillButtonClick);



document.getElementById('combatMenu').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Você está em combate!</p>';
});
document.getElementById('inventoryMenu').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Seu Inventory!</p>';
});
document.getElementById('profileBtn').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Seu Perfil!</p>';
});

document.getElementById('bottomButton1').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Button 1!</p>';
});

document.getElementById('bottomButton2').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Button 2!</p>';
});

document.getElementById('bottomButton3').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Button 3!</p>';
});

document.getElementById('bottomButton4').addEventListener('click', function() {
    document.getElementById('messageBox').innerHTML += '<p>Button 4!</p>';
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

