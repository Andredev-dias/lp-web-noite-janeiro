function enviar() {
    const nome = document.getElementById("nome").value 
    const assunto = document.getElementById("assunto").value 

    //template string
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)

    // window.location.href = `https://wa.me/5541*********?text=${msg}`
    window.open(`https://wa.me/5541*********?text=${msg}`, '_blank')
}