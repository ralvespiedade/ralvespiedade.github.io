//a idéia aqui é fazer a lógica do menu hamburger.

//preciso fazer a criação dessa div que ficará posicionada fora da tela, quando o botão for clicado, essa div se moverá da direita pra esquerda surgindo com as opções do menu. 

//tarefa 1: Criar div

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