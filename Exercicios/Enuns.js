"use strict";
// Numeric Enum
var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Portugues"] = 0] = "Portugues";
    Idiomas[Idiomas["Espanhol"] = 1] = "Espanhol";
    Idiomas[Idiomas["Ingles"] = 2] = "Ingles";
    Idiomas[Idiomas["Frances"] = 3] = "Frances"; // 3
})(Idiomas || (Idiomas = {}));
console.log(Idiomas);
// String Enum
var Idiomas2;
(function (Idiomas2) {
    Idiomas2["Portugues"] = "PT-BR";
    Idiomas2["Espanhol"] = "ES";
    Idiomas2["Ingles"] = "EN";
    Idiomas2["Frances"] = "FR";
})(Idiomas2 || (Idiomas2 = {}));
console.log(Idiomas2);
console.log(Idiomas2.Portugues);
// String Enum
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia);
var Comida;
(function (Comida) {
    Comida["Hamburguer"] = "Hamburguer";
    Comida["Pizza"] = "Pizza";
    Comida["Churrasco"] = "Churrasco";
    Comida["HotDog"] = "HotDog";
    Comida["Lasanha"] = "Lasanha";
    Comida["Sorvete"] = "Sorvete";
})(Comida || (Comida = {}));
function comida(c) {
    return 'Comida Muito Boa: ' + c;
}
console.log(comida(Comida.Pizza));
