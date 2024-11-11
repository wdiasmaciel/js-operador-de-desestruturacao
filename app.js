var id = 5;
console.log({ nome: "ana", cpf: "123.456.789-00", id })

var nome = "Gabi";
var cpf = "987.654.321.00";
var id = 7;
console.log({ nome, cpf, id });

var vet1 = [1, 2]
var vet2 = [3, 4]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [1, 2]
var vet2 = [2, 4]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [1, 2]
var vet2 = [2, 4]
var vet3 = [...vet1, vet2]
console.log(vet3)

var vet1 = [1, 2]
var vet2 = [1, 2]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [{ id: 1, nome: "Ana" }]
var vet2 = [{ id: 2, nome: "Gabi" }]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [{ id: 1, nome: "Ana" }]
var vet2 = [{ id: 1, nome: "Gabi" }]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [{ id: 1, nome: "Ana" }]
var vet2 = [{ id: 1, nome: "Gabi" }]
var vet3 = [...vet1, vet2]
console.log(vet3)



var vetor = [1, 2, 3];

var [a, b, c] = vetor;

console.log("Vetor: ")
console.log(vetor)
console.log("Variável a: " + a); // 1
console.log("Variável b: " + b); // 2
console.log("Variável c: " + c); // 3


var pessoa = {
    nome: "João",
    idade: 25,
};

var { nome, idade } = pessoa;

console.log(pessoa)
console.log(nome); // João
console.log(idade); // 25


var vetor = [1, 2, 3];

var [a, b] = vetor;

console.log(vetor)
console.log(a); // 1
console.log(b); // 2


var vetor = [1, 2, 3];

var [a, b, ...c] = vetor;

console.log(vetor)
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3]


var objeto = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
};

var { nome, idade, ...outros } = objeto;

console.log(objeto)
console.log(nome); // João
console.log(idade); // 25
console.log(outros); // { cidade: "São Paulo" }


var objeto = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
};

var { nome: nome, idade: idade, ...outros } = objeto;

console.log(objeto)
console.log(nome); // nome
console.log(idade); // idade
console.log(outros); // { cidade: "São Paulo" }


var objeto = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
};

var { nome: x, idade: y, ...outros } = objeto;

console.log(objeto)
console.log(x); // nome -> João
console.log(y); // idade -> 25
console.log(outros); // { cidade: "São Paulo" }