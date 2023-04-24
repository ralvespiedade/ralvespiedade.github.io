

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
        //this.$img.onclick = this.Events.rotation.bind(this)
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
            let qtIMGs = 0

            for (item of imgs) {
                qtIMGs++
            }

            console.log(qtIMGs)

            let cont = 0
            
            function carrossel () {
                if (cont > qtIMGs - 1) {
                    cont = 0
                }
                
                galeria.style.transform = `translateX(${-cont * 355}px)`
                
                cont++
            }    
            
            setInterval(carrossel, 3000)
        }
    }


    
}




Main.init()