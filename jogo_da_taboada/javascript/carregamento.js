let regressivo = document.querySelector('.regressivo')
let count = 4

let delay = setInterval(function() {
    
    regressivo.innerHTML = `${count}`
    count--

    if (count <= -1) {
        clearInterval(delay)
        window.location.href = "/jogo.html"
    }
        

}, 1000)
    
    

