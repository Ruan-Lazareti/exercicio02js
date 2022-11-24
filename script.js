const students = [
  {name: 'Ruan',
   firstproof: 8,
   secondproof: 9},
  {name: 'Marcio',
   firstproof: 4,
   secondproof: 6},
  {name: 'Maria',
   firstproof: 7,
   secondproof: 8}, 
  {name: 'Eduardo',
   firstproof: 5,
   secondproof: 5}

]

let average = [];
let index = 0

for (let degree of students) {
  average.push((degree.firstproof + degree.secondproof)/ 2) 
}

while (index < average.length) {
  if (average[index] > 7) {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${average[index]}
Parabéns ${students[index].name}! Você foi aprovado(a) no concurso!`)
  }
  
  else {
    alert(`A média do(a) aluno(a) ${students[index].name} é: ${average[index]}
Não foi dessa vez ${students[index].name}, tente novamente! :c`)
  }

  index++
}