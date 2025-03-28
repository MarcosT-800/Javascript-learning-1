function Homem() {
    this.olhos = 2;
    this.nariz = "gigante";
    this.chapeu = "quicksilver";
    this.transcendence = function() {
        console.log("Entendo agora que tudo é possível!");
    };
    this.naoTranscendeu = function() {
        console.log("Nao consigo fazer nada");
    }
}

const joao = new Homem();
console.log("Homem João: "+ joao.transcendence());

const carloss = new Homem();
console.log("Homem Carlos:" + carloss.naoTranscendeu());

