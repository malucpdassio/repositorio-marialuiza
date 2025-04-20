const form = document.querySelector('#formulario__contato');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    //Chave para interação da Biblioteca emailJS
    emailjs.init({

        //public Key: g1OJooH17a-PwHq80

        publicKey:"g1OJooH17a-PwHq80",
    });

    //ID Templete: template_grc27kh
    //ID Service:service_duq9rsb


    //Retorna uma promet
    emailjs.sendForm("service_duq9rsb", "template_grc27kh", form)
    .then((response) => 
            alert('Mensagem Enviada Com Sucesso!!'))
    .catch(
        (error) => {
        console.log(error)
        alert('Erro no envio.')
     });

    
});