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
        this.HTMLBuilder()
        this.cacheSelector()
        this.bindEvents()
    },
    
    families: [

        {
            name: 'Válvulas',
            nickname: 'Vávulas', 
            class: 'box valvula',
            icon: 'valve', 
            subfamily: ['Combustível', 'Químico', 'Alimentício'],
            image: [
                {
                    Válvulas_Combustível: [
                        'válvula_combustível1.jpeg',
                        'válvula_combustível2.jpeg',
                        'válvula_combustível3.jpeg', 
                        'válvula_combustível4.jpeg'
                    ],
                    
                },
                {
                    
                    Válvulas_Químico: [
                        'válvulas_químico1.jpg',
                        'válvulas_químico2.jpg'
                        
                    ],
                },

                {
                    Válvulas_Alimentício: [
                        'válvulas_alimentício1.jpeg',
                        'válvulas_alimentício2.jpeg',
                        'válvulas_alimentício3.jpeg'
                    ]
                }

            ]
            
            
        },
        {
            name: 'Engates e Conexões',
            nickname: 'Engate_e_Conexões',
            class: 'box',
            icon: 'local_gas_station',
            subfamily: ['Alumínio', 'Aço inox', 'Polipropileno', 'Ferro fundido'],
            image: [
                {
                    Engates_e_Conexões_Alumínio: [
                        'engates_e_conexões_aluminio1.jpeg',
                        'engates_e_conexões_aluminio2.jpeg',
                        'engates_e_conexões_aluminio3.jpeg',
                        'engates_e_conexões_aluminio4.jpeg',
                    ]
                }
            ]
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
        
    ],

    HTMLBuilder: function () {
        
        function products_html_construction () {
            
            const family = Main.families//lista de obj.

            
            //metade da lista - 1
            const length = family.length / 2 - 1
            var subclassesHTML = 'nada'

            for (i in family) {
                
                var subclasses = family[i].subfamily
                
                var subclassesHTML = '' 

                for (e of subclasses) {
                    
                    subclassesHTML += `<li class="subFamilyButton" dataset="${family[i].name}_${e}">
                            ${e}
                        </li>
                    `
                }
        
                 
                if (i <= length) {
                    
                    document.querySelector('.left_families').innerHTML += `
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
                    document.querySelector('.right_families').innerHTML += `
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
            
            
              
        }
        
        products_html_construction()
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
        this.$subFamilyButton = document.querySelectorAll('.subFamilyButton')
        

    },
       
      
    bindEvents: function () {
        //console.log(this.HTMLBuilder)
        //const subFamilyButton = this.HTMLBuilder.products_html_construction()
        
       
        this.$button_ham.onclick = this.Events.open_menu_click.bind(this)
       
        this.$listaLiMenuHamburger.forEach(element => { 
            element.onclick = this.Events.open_menu_click.bind(this)
            
        })
        
        

        this.$subFamilyButton.forEach(button => {
            
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

        

        showImages: function(evento) {
            
            this.$product_show.innerHTML = ``

            var dataset_value = evento.target.attributes['dataset'].value
            
            console.log(dataset_value)
            
            for (g of Main.families) {
                
                for(h of g.image) {
                    
                    var nomeProp = Object.getOwnPropertyNames(h)
                    nomeProp = nomeProp.toString()
                    
                    if (dataset_value == Object.getOwnPropertyNames(h)) {
                        
                        for (j of h[`${nomeProp}`]) {
                            console.log(`
                            
                            <img src="./images/${dataset_value.toLowerCase()}/${j}" alt="${dataset_value}">
                            
                            `)
                            this.$product_show.innerHTML += `
                            
                            <img src="./images/${dataset_value.toLowerCase()}/${j}" alt="peças para carretas">
                            
                            `

                        }
                    }
                    
                }
                
            }                       

        }

    }
        
}
    
    

Main.init()
