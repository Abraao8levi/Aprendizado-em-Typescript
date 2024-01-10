type Heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: Heroi) {
    console.log(pessoa);
}

printaObjetos({
    name: "Draco",
    vulgo: "Dragão"
});
