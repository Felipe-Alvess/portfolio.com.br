
// Alterar tema
const chk = document.getElementById('chk');
chk.addEventListener('click', ()=>{
    document.body.classList.toggle('themeWhite')
})
// Alterar tema
// TypingText

new TypeIt('#typingText',{
speed: 50,
waintUntilVisible:true,
loop:true   ,
})
.type('Desenvolvedor Front End',{delay:(3000)}).delete(9)
.type('Web Designer',{delay:(3000)})
.go();

// TypingText

// openMenu
function openMenu(){
    if(itemList.style.display == 'flex'){
        itemList.style.display =  'none'
    }else{
        itemList.style.display = 'flex'
    }
}
// openMenu

// alterando link
function nextProjects(){
    if(Projetos.style.display == 'flex') {
    Projetos.style.display = 'none'
    }else {
        Projetos.style.display = 'flex'
    }

    if(Certificados.style.display = 'flex'){
    Certificados.style.display = 'none'
    } 
    
    if(Sobre.style.display = 'flex'){
    Sobre.style.display = 'none'
    }

    if(Contatos.style.display = 'flex'){
        Contatos.style.display = 'none'
    }
}

function nextCertificates(){
    if (Certificados.style.display == 'flex') {
    Certificados.style.display = 'none'
    } else {
        Certificados.style.display = 'flex'
    }

    if(Projetos.style.display = 'flex'){
        Projetos.style.display = 'none'
    }

    if(Sobre.style.display = 'flex'){
        Sobre.style.display = 'none'
    }

    if(Contatos.style.display = 'flex'){
        Contatos.style.display = 'none'
    }
}

function nextUnder(){
    if (Sobre.style.display == 'flex') {
        Sobre.style.display = 'none'
    } else {
        Sobre.style.display = 'flex'
    }

    if(Projetos.style.display = 'flex'){
        Projetos.style.display = 'none'
    }

    if(Certificados.style.display = 'flex'){
        Certificados.style.display = 'none'
    }

    if(Contatos.style.display = 'flex'){
        Contatos.style.display = 'none'
    }
}

function nextContact(){
    if (Contatos.style.display == 'flex') {
       Contatos.style.display = 'none'
    } else {
        Contatos.style.display = 'flex'
    }

    if(Projetos.style.display = 'flex'){
        Projetos.style.display = 'none'
    }

    if(Certificados.style.display = 'flex'){
        Certificados.style.display = 'none'
    }

    if(Sobre.style.display = 'flex'){
       Sobre.style.display = 'none'
    }
}

// alterando link

