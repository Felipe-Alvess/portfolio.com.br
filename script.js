// code alter theme 
const chk = document.getElementById('chk')
chk.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
})
// code alter theme 

new TypeIt('#typingText',{
    speed: 100,
    loop: false,
    waitUntilVisible: true,
    startDelay: 3000
}).type('Desenvolvedor Front End',{delay: 4000}).delete(9)
.type('Web desgner').delete(7)
.type('Designer',{delay: 3000})
.break({ delay: 500 })
.type('Sou estudante de Tecnologia em análise de desenvolvimento de sistemas na uninove, estou no 5° e último semestre e estou em transição de carreira estou em busca do primeiro emprego na área da tecnologia, buscando cargos como desenvolvedor front end, análista de sistemas ou suporte de T.I.')
.go();

// open Menu Mobile
function openMenuMobile(){
    if(mobileMenu.style.display == 'flex'){
        mobileMenu.style.display = 'none'
    }else{
        mobileMenu.style.display = 'flex'
    }
}
// open Menu Mobile

// close Menu Mobile
function closeMenuMobile(){
   if(mobileMenu.style.display =='flex'){
    mobileMenu.style.display = 'none'
   }
}
// close Menu Mobile

// loading page
const elementPreloader = document.getElementById('preloader')
const elementLoader = document.getElementById('loader')
console.log('ok')
function loadinPage(){
    elementPreloader.style.display = 'none'
    elementLoader.style.display = 'block'
}
setTimeout(loadinPage, 3000);
// loading page

// show Skills

function showSkills(){
    if(Skills.style.display == 'flex'){
        Skills.style.display = 'none'
    }else{
        Skills.style.display = 'flex'
    }
    if(Skills.style.display = 'flex'){
        Projects.style.display = 'none'
        Sobre.style.display = 'none'
        Contatos.style.display = 'none'
        subTitulo.style.display = 'none'
    }
}

// show Skills

// show Projects

function showProjects(){
    if(Projects.style.display == 'flex'){
Projects.style.display = 'none'
    }else{
Projects.style.display = 'flex'
    }
    if(Projects.style.display = 'flex'){
        Skills.style.display = 'none'
        Sobre.style.display = 'none'
        Contatos.style.display = 'none'
      subTitulo.style.display = 'none'  
    }
}

// show Projects

// Show Sobre

function showSobre(){
    if(Sobre.style.display == 'flex'){
        Sobre.style.display = 'none'
            }else{
        Sobre.style.display = 'flex'
            }
            if(Sobre.style.display = 'flex'){
                Skills.style.display = 'none'
                Projects.style.display = 'none'
                Contatos.style.display = 'none'
              subTitulo.style.display = 'none'  
            }
}

// Show Sobre

// Show Contact

function showContact(){
    if(Contatos.style.display == 'flex'){
        Contatos.style.display = 'none'
            } else{
        Contatos.style.display = 'flex'
            }
            if(Contatos.style.display = 'flex'){
                Skills.style.display = 'none'
                Projects.style.display = 'none'
                Sobre.style.display = 'none'
              subTitulo.style.display = 'none'  
            }
}

// Show Contact




