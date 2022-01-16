// conceito de null e undefined

/*
O que significa passar os dados por referência?
Quando falamos que os dados são passados por referência significa que irão apontar para o mesmo objeto na memória 
– o novo objeto será apenas uma referência ao caminho do objeto original na memória 
*/
// criou um objeto a, que aponta um endereço na memoria pra o objeto criado
const a = {
        teste: true
    }
    // a const b aponta pra o mesmo endereço, ja qu eo valor de a é atribuido para b
const b = a;
// toda alteração que for feita em uma const será "sentida" pela outra
b.teste = false;