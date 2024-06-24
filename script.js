// função abrir Memnu e fechar menu
function openMenu(){
    if(items.style.display == 'block'){
      items.style.display = 'none'
    }else {
        items.style.display = 'block'
    }
}
// função abrir Memnu e fechar menu

// função alterar cor

const chk = document.getElementById('chk');
chk.addEventListener('click', function(){
document.body.classList.toggle('white');
})

// função alterar cor

// funcão subtitulo typingText

new TypeIt('#typingText',{
speed:200,
strings:["Eu sou' Felipe Alves"],
})


.type(' Desenvolvedor Front End', {delay:(3000)})
.delete(9)
.type(' Web Designer',{delay:(3000)})
.go();


// funcão subtitulo typingText

// função mostrar Projetos

function showProject(){
    if (Projetos.style.display == 'block') {
        Projetos.style.display = 'none'
    } else {
        Projetos.style.display = 'block'}

    if(Certificados.style.display = 'block'){
     Certificados.style.display = 'none'}

     if(Sobre.style.display = 'block'){
        Sobre.style.display = 'none'}

    if(Contatos.style.display = 'block'){
    Contatos.style.display = 'none'}
}

// função mostrar Projetos

// função mostrar Certificados
function showCertificates(){
    if (Certificados.style.display == 'block') {
        Certificados.style.display = 'none'
    } else {
        Certificados.style.display = 'block'}

    if(Projetos.style.display = 'block'){
    Projetos.style.display = 'none'}

    if(Sobre.style.display = 'block'){
        Sobre.style.display = 'none'}

    if(Contatos.style.display = 'block'){
    Contatos.style.display = 'none'}
}

// função mostrar Certificados

// Função mostrar Sobre
function showUnder(){
    if (Sobre.style.display == 'block') {
        Sobre.style.display = 'none'
    } else {
    Sobre.style.display = 'block'}

    if(Projetos.style.display = 'block'){
    Projetos.style.display = 'none'}
    
    if(Certificados.style.display = 'block'){
    Certificados.style.display = 'none'}

    if(Contatos.style.display = 'block'){
        Contatos.style.display = 'none'}
}
// Função mostrar Sobre

// função mostrar contatos
function showContact(){
    if (Contatos.style.display == 'block') {
        Contatos.style.display = 'none'
    } else {
        Contatos.style.display = 'block'}

    if(Projetos.style.display = 'block'){
    Projetos.style.display = 'none'}

    if(Certificados.style.display = 'block'){
     Certificados.style.display = 'none'}

     if(Sobre.style.display = 'block'){
        Sobre.style.display = 'none'}
}
// função mostrar contatos

// função ampliar imagem

document.addEventListener('DOMContentLoaded', function() {
    let image1 = document.getElementById('image1');
    image1.addEventListener('click', function() {
        image1.classList.toggle('enlarged');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let image2 = document.getElementById('image2');
    image2.addEventListener('click', function() {
        image2.classList.toggle('enlarged');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let image3 = document.getElementById('image3');
    image3.addEventListener('click', function() {
        image3.classList.toggle('enlarged');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let image4 = document.getElementById('image4');
    image4.addEventListener('click', function() {
        image4.classList.toggle('enlarged');
    });
});

// função ampliar imagem 
