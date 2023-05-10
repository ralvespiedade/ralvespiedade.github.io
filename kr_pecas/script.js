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
        this.$galeria = document.querySelector('.galeria')
        this.$imgs = document.querySelectorAll('.galeria img')
        this.$listaLiMenuHamburger = document.querySelectorAll('.hamburger ul li')
        this.Events.rotation(this.$imgs, this.$galeria)
        //this.$btQuemSomos = document.querySelector('#quemsomos')
        //this.$btContatos = document.querySelector('#contatos')
        //this.$localizacao = document.querySelector('#localizacao')
    },
        
    
    bindEvents: function () {
        this.$button_ham.onclick = this.Events.open_menu_click.bind(this)
        this.$listaLiMenuHamburger.forEach(element => { 
            element.onclick = this.Events.open_menu_click.bind(this)
            console.log(element)
        })
        //this.$btQuemSomos.onclick = this.Events.open_menu_click.bind(this)
        
    },

    Events: {
        open_menu_click: function() {
            const menu_cell = this.$menu_cell
            const buttom_menu = this.$button_ham
            
            if (!menu_cell.classList.contains('opened')) {
                menu_cell.classList.add('opened')
                buttom_menu.classList.add('clicked')
                return
            }
                
            menu_cell.classList.remove('opened')
            buttom_menu.classList.remove('clicked')
        }, 

        rotation: function(imgs, galeria) {
            var qtIMGs = 0
            const screenWidth  = window.innerWidth

            console.log(screenWidth)

            for (item of imgs) {
                qtIMGs++
            }

            let cont = 0
            
            function carrossel () {
                if (cont > qtIMGs - 1) {
                    cont = 0
                }
                
                galeria.style.transform = `translateX(${-cont * screenWidth}px)`
                
                cont++
            }    
            
            setInterval(carrossel, 3000)
        },

    }
        
}
    
    

Main.init()
