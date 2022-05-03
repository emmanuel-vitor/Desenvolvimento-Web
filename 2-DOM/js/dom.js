
       // Acessando aos elementos

       let acessoTituloPeloId = document.getElementById('title'); // esta acessando o elemento do titulo e atribuindo a letiavel       
       let acessoInputPelaTag = document.getElementsByTagName('input'); // acessa os elementos que correspodem a busca, retorna um array com todos os elementos daquela tag
       let acessoInputPelaClasse = document.getElementsByClassName('inputs');// acessa os elementos que correspodem a busca, retorna um array com todos os elementos daquela Classe
       let inputNome = document.getElementById('nome');
       let inputTell = document.getElementById('telefone');

    // Modificando Elementos 
    
    // innerText -> Retorna/altera somente o texto, sem formatações ou elementos html.
    acessoTituloPeloId.innerText = "Trabalhando com DOM (Alterado com innerText)";

    // textContent -> Retorna/altera o text COM formatações, mas sem os elementos html.
    let subtitulo1 = document.getElementById('subtitulo1');
    subtitulo1.textContent = 'Primeiro subtitulo (Alterado com textContent';

    //innerHtml -> Retorna o texto, COM formatações e COM elementos html.  
    let subtitulo2 = document.getElementById('subtitulo2');
    subtitulo2.innerHTML = '   <h3>Há um titulo H3 inserido com INNER HTML aqui </h3>';

    // Modificando Atributos
    subtitulo2.className = "novoSubititulo"; // modificando nome da classe
    acessoTituloPeloId.style = 'color: #00BFFF; font-family: sans-serif;'; // modificando estilos
    acessoTituloPeloId.getAttribute('id'); // acessando o atributo 
    acessoTituloPeloId.setAttribute('class','titleee'); // criando um novo atributo

    // EVENTOS DOM

    //evento onClick, quando o elemento dor clicado, o que estiver na função é disparado
    function cliques() {
       console.log(`você clicou ${i} vezes `);
    }

    // evento onChange, muda o valor do elemento quando o elemento sai do foco principla
     function changes() 
     {
        let pTel = document.getElementById('ptelefone');
        pTel.innerText = inputTell.value;    
     }

     // envento oninput, dispara a função nom momento em que ela é acionada
     function onInput() 
     {
        let pNome =  document.getElementById('pnome');
        pNome.innerText = inputNome.value;        
        
     }


    


   
   
   
   