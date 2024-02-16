


// Função para o "p" receber os valores digitados
function insert(num){
   var numero =  document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num

}

// função para limpar a area;

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

// Função para voltar numero

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length- 1)
}

// calcular

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}