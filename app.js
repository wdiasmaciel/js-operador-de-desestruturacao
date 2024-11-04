var id = 5;
console.log({nome: "ana", cpf: "123.456.789-00", id})

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

var vet1 = [{id: 1, nome: "Ana"}]
var vet2 = [{id: 2, nome: "Gabi"}]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [{id: 1, nome: "Ana"}]
var vet2 = [{id: 1, nome: "Gabi"}]
var vet3 = [...vet1, ...vet2]
console.log(vet3)

var vet1 = [{id: 1, nome: "Ana"}]
var vet2 = [{id: 1, nome: "Gabi"}]
var vet3 = [...vet1, vet2]
console.log(vet3)
