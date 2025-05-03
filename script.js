const chk = document.getElementById("checkbox");
chk.addEventListener("click", ()=>{
document.body.classList.toggle("dark");
document.body.style.backgroundColor = "black";
});
// função btn menu mobile
function menuMobile(){
    document.getElementById("menuMobile").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("bg-menu").classList.toggle("change");
}

// typingText texto digitado do subTitulo
new TypeIt('#typingText', {
    speed: 200,
    loop:true,
    waitUntilVisible: true,
    startDelay: 3000,
   }).type('Desenvolvedor Back-end').move(-4).delete(4).type('Front', {delay:2000})
.move(4).delete(9).type(' Web Designer', {delay: 3000})
.go();
// typingText texto digitado do subTitulo

// loadingPage
const elementPreloader = document.getElementById('preloader');
function loadingPage(){
    elementPreloader.classList.toggle('preloader');
}
setTimeout(loadingPage, 1280);
// loadingPage

// função troca de menus
function navLinks(){
    document.getElementById('projetos').classList.toggle('showProject');
    document.getElementById('habilidades').classList.remove('showSkills');
    document.getElementById('sobre').classList.remove('showUnder');
    document.getElementById('contatos').classList.remove('showContact');

    document.getElementById("menuMobile").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("bg-menu").classList.toggle("change");
}

function navLinks2(){
    document.getElementById('habilidades').classList.toggle('showSkills');
    document.getElementById('projetos').classList.remove('showProject');
    document.getElementById('sobre').classList.remove('showUnder');
    document.getElementById('contatos').classList.remove('showContact');

    document.getElementById("menuMobile").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("bg-menu").classList.toggle("change");
}


function navLinks3(){
    document.getElementById('sobre').classList.toggle('showUnder');
    document.getElementById('projetos').classList.remove('showProject');
    document.getElementById('habilidades').classList.remove('showSkills');
    document.getElementById('contatos').classList.remove('showContact');

    document.getElementById("menuMobile").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("bg-menu").classList.toggle("change");
}


function navLinks4(){
    document.getElementById('contatos').classList.toggle('showContact');
    document.getElementById('projetos').classList.remove('showProject');
    document.getElementById('habilidades').classList.remove('showSkills');
    document.getElementById('sobre').classList.remove('showUnder');

    document.getElementById("menuMobile").classList.toggle("change");
    document.getElementById("nav-list").classList.toggle("change");
    document.getElementById("bg-menu").classList.toggle("change");
}

// função troca de menus

// função para abrir opções dos contatos
const elementDuvida = document.querySelectorAll('.duvida');
elementDuvida.forEach(function(duvida){
duvida.addEventListener('click', ()=>{
duvida.classList.toggle('ativo');
})
})
// função para abrir opções dos contatos





