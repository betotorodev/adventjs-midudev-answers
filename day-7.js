// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

// drawGift(4, '+')

// /*
//    ####
//   #++##
//  #++#+#
// ####++#
// #++#+#
// #++##
// ####
// */

// drawGift(5, '*')
// /*
//     #####
//    #***##
//   #***#*#
//  #***#**#
// #####***#
// #***#**#
// #***#*#
// #***##
// #####
// */

// drawGift(1, '^')
// /*
// #
// */
// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

function drawGift(size, symbol) {
  const endLine = "#\n";
  if (size <= 1) {
    return endLine;
  }
  const pound = "#";
  const lineLength = size * 2 - 1;
  let gift = " ".repeat(lineLength - size) + pound.repeat(size - 1) + endLine;
  const topFace = symbol.repeat(size - 2);
  for (let i = 2; i < lineLength; i++) {
    const isFace = i !== size;
    const calc = lineLength - size - i + 1
    const prefix = " ".repeat(Math.max(calc, 0)) + pound;
    if (isFace) {
      const sideFace = pound + symbol.repeat(size - 2 - Math.abs(size - i))
      gift += prefix + topFace + sideFace;
    } else {
      const symbols = symbol.repeat(lineLength - size - 1)
      gift += pound.repeat(size) + symbols;
    }
    gift += endLine
  }
  gift += pound.repeat(size - 1) + endLine
  return gift;
}