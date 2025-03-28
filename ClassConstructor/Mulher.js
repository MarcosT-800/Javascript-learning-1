function Mulher ()  {
    this.olhos = 2;
    this.terFilhos = function() {
         function Filhos () {
            this.olhos = 2;
            this.ouvidos = 2;
        } 
        console.log("Gerando filho");
        return true;
    }
}

const Carina = new Mulher();

// console.log(Carina.terFilhos());
if(Carina.terFilhos()) {
    console.log("A crianca foi gerada com sucesso!");
}