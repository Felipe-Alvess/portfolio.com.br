new TypeIt('#typingText',{
    speed:200,
    waitUntilvisible:true,
    loop:true,
}).type('Desenvolvedor ')
.type('Front End', {delay:3000}).delete(9)
.type('Web Designer', {delay:3000})
.go();

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}

function fecharMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
}
    
}