const readline = require("readline");
const listinha_CSS_Existente = ["color","background-color","padding"];
let listinha_Propriedades_Css = []
const app = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
;
app.setPrompt("Insira uma propriedade CSS para add na lista!");
app.prompt();
app.on("line", (resposta) => {
    if(resposta === "sair" || resposta === "SAIR" || resposta === "Sair"){
        console.log(listinha_Propriedades_Css.sort().join())
        app.close;
    }
    else{
        listinha_Propriedades_Css.push(`${resposta}\n`);
        app.setPrompt("Insira uma propriedade CSS: ")
        app.prompt();
    }
});
