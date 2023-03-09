lista_menu = document.querySelector('#lista_menu')
opcoes_menu = [
                {nome:'SOBRE', id:'#about'},
                {nome:'PRODUTOS', id: '#products'},
                {nome: 'CONTATOS', id: '#appointment'},
                {nome: 'LOCALIZAÇÃO', id: '#location'}
            ]

for (i of opcoes_menu) {
    
    
    lista_menu.innerHTML += `
        <li>
            <a href=${i.id}>${i.nome}</a>

        </li>
    `
    
}



/* 
let diaSemana = new Date().getDay()
switch(diaSemana) {
    case 0:
        console.log("Hoje é domingo")
        break;
    case 1:
        console.log("Hoje é segunda")
        break;
    case 2:
        console.log("Hoje é terça")
        break;
    case 3:
        console.log("Hoje é quarta")
        break;
    case 4:
        console.log("Hoje é quinta")
}



if (media >= 7) {
    
    console.log(`Sua média é de ${media}, você foi aprovado`)

} else if (media >= 5){
    console.log(`Sua média é de ${media}, você está de recuperação`)
} else {
    console.log(`Sua média é de ${media}, você foi reprovado`)
}
*/