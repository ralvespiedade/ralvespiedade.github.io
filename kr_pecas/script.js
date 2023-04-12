lista_menu = document.querySelector('#lista_menu')



opcoes_menu = [
    {nome:'NOSSA HISTORIA', id:'#about'},
    {nome:'PRODUTOS', id: '#products'},
    //{nome: 'CONTATOS', id: '#appointment'},
    {nome: 'LOCALIZAÇÃO', id: '#location'}
]
//só exibirá o menu quando a largura da tela for maior que 600px


for (i of opcoes_menu) {
    
    
    lista_menu.innerHTML += `
        <li>
            <a href=${i.id}>${i.nome}</a>

        </li>
    `
    
}



const Main = {
    init: function () {
        this.cacheSelector()
        this.bindEvents()
        
    },
    
    cacheSelector: function () {
        this.$button_ham = document.querySelector('.menu_hamburger')
        this.$menu_cell = document.querySelector('.hamburger')
        
    },
    
    bindEvents: function () {
        this.$button_ham.onclick = this.Events.open_menu_click.bind(this)
        
        
    },

    Events: {
      open_menu_click: function(e) {
        const menu_cell = this.$menu_cell

        
        if (!menu_cell.classList.contains('opened')) {
            menu_cell.classList.add('opened')
            return
        }
        menu_cell.classList.remove('opened')
      }
    }


    
}




Main.init()





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