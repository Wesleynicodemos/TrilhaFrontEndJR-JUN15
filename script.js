const observador = new IntersectionObserver ( (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach( (elemento) => observador.observe(elemento))