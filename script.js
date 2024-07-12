const observador = new IntersectionObserver ( (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
})

const elementos = document.querySelectorAll('.hidden ,.hidden-2')

elementos.forEach( (elemento) => observador.observe(elemento))

/*Animação do botão*/

const btnmenu = document.querySelector('.btn-menu')

function ativabtn() {
    const ativa = document.querySelector('.nav')
    const ativaicon = document.querySelector('.btn-menu')
    ativa.classList.toggle ('ativo')
    ativaicon.classList.toggle ('ativo')

    

}

btnmenu.addEventListener('click', ativabtn)

