// questao 1

const array1 = [1, 60, 232, 7, 25, 76, 29, 74, 92];
let somatorio1 = 0
const lista1 = array1.filter(value => value > 60 && value < 300)

lista1.forEach(value => {
   somatorio1 += value;
});

console.log(`A lista dos valores maiores que 60 é: ${lista1}. A soma dos elementos da lista é: ${somatorio1}`);

// questao 2

const pa = ({ n, a1, r }) => {
   let termos2 = [];
   let soma2 = 0;

   for (let i = 0; i < n; i++) {
       let termo = a1 + i * r;
       termos2.push(termo);
       soma2 += termo;
   }

   console.log('Progressão Aritmética:');
   console.log('Termos:', termos2);
   console.log('Soma dos termos:', soma2);
};

const pg = ({ n, a1, r }) => {
   let termos2 = [];
   let soma2 = 0;

   for (let i = 0; i < n; i++) {
       let termo = a1 * Math.pow(r, i);
       termos2.push(termo);
       soma2 += termo;
   }

   console.log('Progressão Geométrica:');
   console.log('Termos:', termos2);
   console.log('Soma dos termos:', soma2);
};

// questao 3

const showConceito = (notas) => {
   const pegarConceito = (nota) => {
       if (nota >= 0 && nota <= 4.9) return 'D';
       if (nota >= 5.0 && nota <= 6.9) return 'C';
       if (nota >= 7.0 && nota <= 8.9) return 'B';
       if (nota >= 9.0 && nota <= 10.0) return 'A';
       return 'Nota inválida';
   }

   const conceitos = [];

   notas.forEach(nota => {
       conceitos.push(pegarConceito(nota));
   });

   // Exibir as notas e conceitos
   console.log('Notas:', notas);
   console.log('Conceitos:', conceitos);
}

// questao 4

const somaParesConsecutivos = (X) => {
   const calcularSoma = (inicio) => {
       let soma = 0;
       for (let i = 0; i < 5; i++) {
           soma += inicio + i * 2;
       }
       return soma;
   };

   const primeiroPar = (X % 2 === 0) ? X : X + 1;

   const resultado = calcularSoma(primeiroPar);

   console.log(resultado);
};

// questao 5

const isPrimo = (num) => {
   if (num <= 1) return false;
   if (num <= 3) return true;
   if (num % 2 === 0 || num % 3 === 0) return false;

   for (let i = 5; i * i <= num; i += 6) {
       if (num % i === 0 || num % (i + 2) === 0) return false;
   }
   return true;
};

const imprimirPrimos = (inicio = 0, fim = 100) => {
   if (inicio > fim) {
       [inicio, fim] = [fim, inicio];
   }

   const intervalo = Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);

   intervalo
       .filter(isPrimo)
       .forEach(primo => console.log(primo));
};
