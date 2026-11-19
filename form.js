const campoCep = document.getElementById('cep');
const campoLogradouro = document.getElementById('logradouro');
const campoBairro = document.getElementById('bairro');
const campoCidade = document.getElementById('cidade');

campoCep.addEventListener('blur', async function () {
 const cep = campoCep.value.replace(/\D/g, '');
 
 if (cep.length === 0) {
    return;
 }
 if (cep.length !== 8) {
    alert('Digite um CEP com 8 números.');
    return;
 }
 
 try {
    const resposta = await fetch('https://viacep.com.br/ws/' + cep + '/json/');
    const dados = await resposta.json();
 
    if (dados.erro) {
      alert('CEP não encontrado.');
      return;
    }
 
    campoLogradouro.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    document.getElementById('uf').value = dados.uf;
 } catch (erro) {
    alert('Não foi possível buscar o CEP. Verifique sua se está certo ou se esta conectado a internet e tente de novo.');
 }
});

document.querySelectorAll ('input[required]').forEach(campo => {campo.addEventListener('invalid',() => {
    campo.setCustomValidity('Por favor, preencha este campo.');})});