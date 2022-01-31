
// var é visisvel no escopo global

// demonstração com escopo.
{
    {
        {
            {
               var teste1 = "Declarada dentro de um bloco"
               console.log(`${teste1} e usado dentro  `);
            }
        }
    }
}
console.log(`${teste1} e usado fora `)

function teste() {
    var local = 123;
    console.log(`${local} dentro do escopo da função`)
}
teste()
console.log(local) //não é possivel acessar variavel fora do escopo da função