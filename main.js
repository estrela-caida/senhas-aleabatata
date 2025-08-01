const numeroSenha = document.querySelector('.parametro-senha')
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha

const botoes = document.querySelectorAll('parametro-senha-botao')
botoes[0].onclik = diminuiTamanho
botoes{1}.onclik = aumentaTamanho