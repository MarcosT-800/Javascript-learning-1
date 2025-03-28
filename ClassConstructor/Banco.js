function Banco() {
    this.usuario = "carlos";
    this.banco = "pam";
    this.produto1 = "consignado";
    this.produtoo2 = "antecipacao";
    this.realizarEmprestimo = function() {
        console.log("empréstimo realizado para!"+ this.produto1);
    };
}

const fintech = new Banco();
console.log("operacao: "+ fintech.produtoo2);

const fintech2 = new Banco();
console.log("Operacao2:" + fintech2.realizarEmprestimo());

