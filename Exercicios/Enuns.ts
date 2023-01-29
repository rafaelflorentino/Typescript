// Numeric Enum
enum Idiomas{
    Portugues, // 0
    Espanhol, // 1
    Ingles, // 2
    Frances // 3
}
console.log(Idiomas);

// String Enum
enum Idiomas2{
    Portugues = 'PT-BR',
    Espanhol ='ES', 
    Ingles = 'EN',
    Frances = 'FR'
}
console.log(Idiomas2);
console.log(Idiomas2.Portugues);

// String Enum
enum Dia{
    Segunda = 'SEG',
    Terca ='TER', 
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM'
}
console.log(Dia);

enum Comida{
    Hamburguer = 'Hamburguer',
    Pizza = 'Pizza',
    Churrasco = 'Churrasco',
    HotDog = 'HotDog',
    Lasanha = 'Lasanha',
    Sorvete = 'Sorvete'
}
function comida(c: Comida){
    return 'Comida Muito Boa: '+ c;
}
console.log(comida(Comida.Pizza));
