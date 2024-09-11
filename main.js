// Função para capturar o valor do input
function Coletar(){
    let cidade = document.getElementById('cep')
    console.log(cidade.value)
    Dados(cidade.value)
}

// Consumindo dados da API OpenWeather
async function Dados(cep){
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json())
    
    ExibirDados(dados)
}


function ExibirDados(dados){
    console.log(dados)
    document.getElementById('endereco').value = dados.logradouro
    document.getElementById('cidade').value = dados.localidade
    document.getElementById('bairro').value = dados.bairro
}

// Função enter
const form = document.querySelector('form')
const submit = document.querySelector('.enviar')

form.addEventListener('keydown', function(event){
    if (event.key === 'Enter' && !event.shiftKey){
        event.preventDefault()
        form.submit()
    }
})