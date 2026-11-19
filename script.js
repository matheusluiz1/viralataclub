
// Saudação dependendo do horário
const saudacao = document.getElementById('saudacao');
const hora = new Date().getHours();
let mensagem;
 if (hora < 12) {
  mensagem = 'Bom dia! ☀️';
} else if (hora < 18) {
  mensagem = 'Boa tarde! 🌤️';
} else {
  mensagem = 'Boa noite! 🌙';
}
 if (saudacao) {
  saudacao.textContent = mensagem;
}

botaoDoacao.addEventListener(
    "click",
    function() {

        alert(

            "Como ajudar:\n\n" +

            "PIX: Viralataclub1@gmail.com ou CNPJ 60.667.988/0001-79\n\n" +

            "NÃO RECEBEMOS DINHEIRO PÚBLICO só recurso próprio e doações."

        );

    }
);





