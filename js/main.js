const teclado = document.querySelector('.teclado');

const padMid = teclado.childNodes 

padMid.forEach(botao => {
  botao.addEventListener('click',(event)=>{
    
    let alvo = event.target.textContent.toLowerCase()
    let som = document.querySelector(`#som_tecla_${alvo}`)

    som.play()
    
  })
  botao.onkeydown = (tecla) => {
    if(tecla.code == "Space" || tecla.code =="Enter"){
      botao.classList.add('ativa')
    }
  }
  botao.onkeyup = () => {
    botao.classList.remove('ativa')
  }
})
