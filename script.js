// Inicializar EmailJS
(function() {
    // Substitua com seu User ID do EmailJS
    emailjs.init("Y69DI_mk0oePwuokD");
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Mostrar mensagem de carregamento
        statusDiv.classList.remove('hidden', 'success', 'error');
        statusDiv.textContent = 'Enviando...';

        // Preparar os parâmetros para o template
        const templateParams = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Enviar o email usando EmailJS
        // Substitua os IDs abaixo com seus IDs do EmailJS
        emailjs.send('service_f1sgv6s', 'template_rqer24c', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                statusDiv.textContent = 'Mensagem enviada com sucesso!';
                statusDiv.classList.add('success');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                statusDiv.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
                statusDiv.classList.add('error');
            });
    });
});
