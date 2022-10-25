// Média = (nota 1 + nota 2 + nota 3) / 3


const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media < 5) {
  console.log('Reprovação')
}else if (media >=5 && media <=7){
  console.log('Recuperação')
}else{
  console.log('Passou de semestre')
}
  
