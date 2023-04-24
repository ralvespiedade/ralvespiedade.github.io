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
    },
        
    
    bindEvents: function () {
        this.$button_ham.onclick = this.Events.open_menu_click.bind(this)
        this.Events.rotation(this.$imgs, this.$galeria)
        
    },

    Events: {
      open_menu_click: function(e) {
        const menu_cell = this.$menu_cell

        
        if (!menu_cell.classList.contains('opened')) {
            menu_cell.classList.add('opened')
            return
        }
        menu_cell.classList.remove('opened')
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
    }

    }
    
}

Main.init()
