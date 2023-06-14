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
            nickname: 'Válvulas', 
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
            nickname: 'Engates_e_Conexões',
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
                },
                {
                    Engates_e_Conexões_Aço_inox: [
                        'engates_e_conexões_aço_inox1.jpeg',
                        'engates_e_conexões_aço_inox2.jpeg',
                        'engates_e_conexões_aço_inox3.jpeg',
                        'engates_e_conexões_aço_inox4.jpeg',
                    ]
                },
                {
                    Engates_e_Conexões_Polipropileno: [
                        'engates_e_conexões_polipropileno1.jpeg',
                        'engates_e_conexões_polipropileno2.jpeg',
                    ]
                },
                {
                    Engates_e_Conexões_Ferro_fundido: [
                        'engates_e_conexões_ferro_fundido1.jpeg',
                        'engates_e_conexões_ferro_fundido2.jpeg',
                    ]
                },
                        
                
            ]
        },
        {
            name: 'Ponteiras e Mangotes',
            nickname: 'Ponteiras_e_Mangotes',
            class: 'box',
            icon: 'flashlight_on',
            subfamily: ['Alumínio', 'Aço inox', 'Polipropileno', 'Ferro fundido', 'Mangotes'],
            image: [
                {
                    
                    Ponteiras_e_Mangotes_Alumínio: [
                        'ponteiras_e_mangotes_aluminio1.jpeg',
                        'ponteiras_e_mangotes_aluminio2.jpeg',
                        'ponteiras_e_mangotes_aluminio3.jpeg',
                        'ponteiras_e_mangotes_aluminio4.jpeg',
                    ]
                }, 
                {
                    Ponteiras_e_Mangotes_Aço_inox: [
                        'ponteiras_e_mangotes_aço_inox1.jpeg',
                        'ponteiras_e_mangotes_aço_inox2.jpeg',
                        'ponteiras_e_mangotes_aço_inox3.jpeg',
                        'ponteiras_e_mangotes_aço_inox4.jpeg',
                    ]

                },
                {
                    Ponteiras_e_Mangotes_Polipropileno: [
                        'ponteiras_e_mangotes_polipropileno1.jpeg',
                        'ponteiras_e_mangotes_polipropileno2.jpeg',
                        'ponteiras_e_mangotes_polipropileno3.jpeg',
                        'ponteiras_e_mangotes_polipropileno4.jpeg',
                    ]
                },
                {
                    Ponteiras_e_Mangotes_Ferro_fundido: [
                        'ponteiras_e_mangotes_ferro_fundido1.jpeg',
                        'ponteiras_e_mangotes_ferro_fundido2.jpeg',
                        'ponteiras_e_mangotes_ferro_fundido3.jpeg',
                        'ponteiras_e_mangotes_ferro_fundido4.jpeg',
                    ]
                },
                {
                    Ponteiras_e_Mangotes_Mangotes: [
                        'ponteiras_e_mangotes_mangotes1.jpeg',
                        'ponteiras_e_mangotes_mangotes2.jpeg',
                        'ponteiras_e_mangotes_mangotes3.jpeg',
                        'ponteiras_e_mangotes_mangotes4.jpeg',
                    ]
                },
            ]
        },
        {
            name: 'Elétrica',
            nickname: 'Elétrica',
            class: 'box eletrica',
            icon: 'flash_auto',
            subfamily: ['Lanternas', 'Acessórios']
        },
             
        {
            name: 'Pneumática',
            nickname: 'Pneumática', 
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
                    nickName = e.replace(' ', '_')
                    
                    subclassesHTML += `<li class="subFamilyButton" dataset="${family[i].nickname}_${nickName}">
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
                    //criando uma função que constroi esse HTML
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
            //limpando o mostruario de produtos
            this.$product_show.innerHTML = ``
            //pegando o valor da subfamilia clicada. Ex.: Valvula_Aluminio
            var dataset_value = evento.target.attributes['dataset'].value
            
            console.log(dataset_value)
            
            for (g of Main.families) {
                
                for(h of g.image) {
                    //h é o, por exemplo: valvula_aluminio, que contem a lista de endereços
                    var nomeProp = Object.getOwnPropertyNames(h)
                    console.log(nomeProp)
                    nomeProp = nomeProp.toString()
                    
                    console.log(nomeProp)    
                    if (dataset_value == nomeProp) {
                        
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
