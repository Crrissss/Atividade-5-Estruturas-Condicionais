// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distanciaPercorrida = Number(prompt("Digite a distancia percorrida"));

if (distanciaPercorrida < 200) {
  let calculoPassagem = distanciaPercorrida * 0.5;
  document.write(
    `Distancia percorrida ${distanciaPercorrida} preço a pagar R$ ${calculoPassagem.toFixed(
      2
    )}`
  );
} else {
  let calculoPassagem = distanciaPercorrida * 0.45;
  document.write(
    `Distancia percorrida ${distanciaPercorrida} preço a pagar R$ ${calculoPassagem.toFixed(
      2
    )}`
  );
}