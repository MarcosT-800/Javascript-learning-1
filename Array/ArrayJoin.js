const meuObjeto = {
    0: "a",
    1: "b",
    length: 2,
};

console.log(Array.prototype.join.call(meuObjeto, "+"));
