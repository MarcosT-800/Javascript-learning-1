const carros = ["Skyline", "Maclaren", "Evolution"];

carros.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

carros.forEach((item, index) => {
    console.log("elemento: "+index + item);
});


const arrayFunctionCompplexity = [];

arrayFunctionCompplexity.push("o", "dificul", "é um monte", "de", "coisas", "fáceis");

arrayFunctionCompplexity.forEach((item, index) => {

        arrayFunctionCompplexity.push("azul");
        console.log(item);
});

//console.log(arrayFunctionCompplexity.reverse());
//console.log(carros.reverse());