lista_menu = document.querySelector('#lista_menu')


opcoes_menu = [
    {nome:'NOSSA HISTORIA', id:'#about'},
    {nome:'PRODUTOS', id: '#products'},
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
        this.box_gallery = document.querySelector('.box')
        this.$expand = document.querySelector('.expand')
        this.$left_families = document.querySelector('.left_families') 
        this.$right_families = document.querySelector('.right_families')
        this.$product_show = document.querySelector('.product_show')

        this.$families = [

            {
                name: 'Válvulas', 
                class: 'box valvula',
                icon: 'valve', 
                subfamily: ['Combustível', 'Químico', 'Alimentício'],
                válvulas_combustivel: [
                    'valvula_combustivel1.jpeg',
                    'valvula_combustivel2.jpeg',
                    'valvula_combustivel3.jpeg', 
                    'valvula_combustivel4.jpeg'
                ],
                válvulas_quimico: [
                    'valvula_quimico1.jpg',
                    'valvula_quimico2.jpg',
                    'valvula_quimico3.jpg'
                ],
                válvulas_alimenticio: [
                    'valvula_alimenticio1.jpeg',
                    'valvula_alimenticio2.jpeg',
                    'valvula_alimenticio3.jpeg'
                ],
            },
            {
                name: 'Engates e Conexões',
                class: 'box',
                icon: 'local_gas_station',
                subfamily: ['Alumínio', 'Aço inox', 'Polipropileno', 'Ferro fundido']
            },
            {
                name: 'Ponteiras e Mangotes',
                class: 'box',
                icon: 'flashlight_on',
                subfamily: ['Alumínio', 'Aço inox', 'Polipropileno', 'Ferro fundido']
            },
            {
                name: 'Elétrica',
                class: 'box eletrica',
                icon: 'flash_auto',
                subfamily: ['Lanterna', 'Acessórios']
            },
                 
            {
                name: 'Pneumática', 
                class: 'box pneumatica',
                icon: 'air',
                subfamily: ['Válvulas', 'Engates', 'Conectores']
            },
            {
                nome: 'Juntas e Vedações',
                class: 'box vedacoes',
                icon: 'nest_thermostat_gen_3',
                subfamily: ['Combustível', 'Químico', 'Alimentício']
            },
            {
                nome: 'Suspensão',
                class: 'box sespensao',
                icon: 'car_repair',
                subfamily: ['Amortecedores', 'Bolsas de Ar', 'Suportes', '5ª roda']
            },
            {
                nome: 'EPI',
                class: 'box epi',
                icon: 'wash', 
                subfamily: ['Combustível', 'Químico', 'Alimentício']
            },
            {
                nome: 'Acessórios',
                class: 'box acessorios',
                icon: 'fire_extinguisher',  
                subfamily: ['Paralamas', 'Porta Extintor', 'Suporte para Placas']
            },
            {
                nome: 'Placas e Adesivos', 
                class: 'box',
                icon: 'Warning',  
                subfamily: ['Painel', 'Rótulo de segurança']
            },
            
        ]

    },
       
      
    bindEvents: function () {
        const subFamilyButton = this.Events.products_html_construction()   
       
        this.$button_ham.onclick = this.Events.open_menu_click.bind(this)
       
        this.$listaLiMenuHamburger.forEach(element => { 
            element.onclick = this.Events.open_menu_click.bind(this)
            
        })
        
        subFamilyButton.forEach(button => {
            button.onclick = this.Events.showImages.bind(this)
        })

        
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

        products_html_construction: function () {
            const family = Main.$families//lista de obj.
            //metade da lista - 1
            const length = family.length / 2 - 1
            var subclassesHTML = 'nada'

            for (i in family) {
                
                var subclasses = family[i].subfamily
                
                var subclassesHTML = '' 

                for (e of subclasses) {
                    
                    subclassesHTML += `<li class="subFamilyButton" data="${i}">
                            ${e}
                        </li>
                    `
                }
                    
                
                    
                 
                if (i <= length) {
                    
                    Main.$left_families.innerHTML += `
                    <div class="box valvulas">
                        <span class="material-symbols-rounded">
                            ${family[i].icon}
                        </span>
                        <h2 class="title_family
                        ">${family[i].name}</h2>   
                        <div class="expand">
                            <ul>
                               
                                ${subclassesHTML}
    
                                

                            </ul>
                        </div>
                
                    </div>
     
                    `
                } else {
                    //é possível retirar essa repetição de código
                    //criando uma função que constroe esse HTML
                    Main.$right_families.innerHTML += `
                    <div class="box valvulas">
                        <span class="material-symbols-rounded">
                            ${family[i].icon}
                        </span>
                        <h2 class="title_family">
                            ${family[i].nome}
                        </h2>   
                        <div class="expand _right">
                            <ul>
                               
                                ${subclassesHTML}
    
    
                            </ul>
                        </div>
                
                    </div>
    
                    `
                }
                
                subclassesHTML = ""
                
            }
            return document.querySelectorAll('.subFamilyButton')
            
              
        },

        showImages: function(evento) {
            
            var img_subclasse = Main.$families
            console.log(img_subclasse)

            console.log(evento)
            //cada grupo de foto terá que ter um id específico.
            //e.g.: "valvula_combustivel"
            //vou precisar iterar sobre uma lista de imagens, 
            //uma variável vai receber essa lista quando o botão
            //for clicado. O product_show vai receber a variável
            //com as fotos


/*             this.$product_show.innerHTML = `
                <img src=${} alt='paças para carreta'>
            `
 */        }

    }
        
}
    
    

Main.init()
