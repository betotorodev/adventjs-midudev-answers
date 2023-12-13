// Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

// El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

// Los elfos tienen un sistema especial para organizar los regalos:

// Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
// Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
// Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
// Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

// Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

// const result1 = organizeGifts(`76a11b`)
// console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

// Explicación:

//   76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

//   11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)


function organizeGifts(gifts) {
  if (gifts === '' || !/[a-zA-Z]/.test(gifts)) {
    return '';
  }

  let packagedGifts = '';
  let giftsCopy = gifts;

  while (giftsCopy !== '') {
    const giftLocation = giftsCopy.search(/[a-zA-Z]/i);
    const giftsToPackage = giftsCopy.substring(0, giftLocation + 1);

    giftsCopy = giftsCopy.substring(giftLocation + 1);

    let numberOfPackages = parseInt(giftsToPackage);
    let typeOfGift = giftsToPackage[giftLocation];
    let numberOfBoxes = Math.floor(numberOfPackages / 10);
    let remainingGifts = numberOfPackages % 10;

    let pales = Math.floor(numberOfBoxes / 5);
    let remainingBoxes = numberOfBoxes % 5;

    let ultimatePales = pales > 0 ? Array(pales).fill(`[${typeOfGift}]`).join('') : '';
    let ultimateBoxes = remainingBoxes > 0 ? Array(remainingBoxes).fill(`{${typeOfGift}}`).join('') : '';
    let ultimateRemainingGifts = remainingGifts > 0 ? `(${Array(remainingGifts).fill(`${typeOfGift}`).join('')})` : '';

    packagedGifts += ultimatePales + ultimateBoxes + ultimateRemainingGifts;
  }

  return packagedGifts;
}

// primero: sacar en orden los número con el tipo de regalo
// segundo: mientras que todavía tenga regalos por analizar, seguir analizando la lista er itla vaciando conforme voy empacando
// tercero: ordenar primero por cajas. 
// cuarto: luego por palés 
// quinto: por regalos sobrantes
// cuando termine de empacar los rgalos, los pongo en una varaible de entrega
// Y por último entregar todos los regalos empacados. 

// verificar qué: el string no venga vacío 