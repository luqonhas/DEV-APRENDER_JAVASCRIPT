const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(valor){
    switch (true) {
        case typeof valor !== 'number':
            return "O valor '" + valor + "' não é um número!";
            break;

        // se o valor for divisível por tanto pelo 3 e tanto pelo 5...
        case valor % 3 === 0 && valor % 5 === 0:
            return "FizzBuzz";
            break;
        
        // se o valor não for divisível por tanto pelo 3 e tanto pelo 5...
        case valor % 3 !== 0 && valor % 5 !== 0:
            return "O valor '" + valor + "' não é divisível por 3 e nem por 5!";
            break;
        
        // se o valor for divisível por 3...
        case valor % 3 === 0:
            return "Fizz";
            break;
        
        // se o valor for divisível por 5...
        case valor % 5 === 0:
            return "Buzz";
            break;
    
        default:
            break;
    }
}