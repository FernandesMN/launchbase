const name = 'Matheus';
const weight = 58.1;
const height = 1.76;

imc = weight / (height * height);

if (imc >= 30) {
    console.log(name + ' você está acima do peso.')
} else {
    console.log(name + ' você não está acima do peso.')
}