// ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

// Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

// Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

// Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

// Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |
// Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

//   *
//  @ o
// * @ o
//   |
// Nota:

// El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
// Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
// Los adornos tienen un espacio en blanco entre ellos de separación.
// Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.

// mi función
function createChristmasTree(ornaments, height) {
  if (height === 0 || height === undefined) return '|'
  if (height === 1) {
    return `${ornaments.split('')[0]}\n|\n`
  }
  let three = ''
  let iterator = height + 1
  const blankSpace = ' '
  let threeLeafs = ornaments.split('')
  let ornamentType = threeLeafs[0]
  for (let leaf = 1; leaf < iterator; leaf++) {
    three += `${blankSpace.repeat(Math.abs(height - leaf))}`
    for (let ornament = 0; ornament < leaf; ornament++) {
      if (leaf === 1) {
        three += `${ornamentType} `
        continue
      }
      const indexOfActualOrnament = threeLeafs.indexOf(ornamentType)
      const newOrnament = threeLeafs[indexOfActualOrnament + 1] === undefined ? threeLeafs[0] : threeLeafs[indexOfActualOrnament + 1]
      ornamentType = newOrnament
      three += `${newOrnament} `
    }
    three = three.trimEnd() + '\n'
  }
  three += `${blankSpace.repeat(Math.abs(height - 1))}|\n`
  return three
}

// reto de otra persona y este funciona ✅
function createChristmasTree(ornaments, height) {
  let three = ''
  let ornamentIndex = 0

  for (let level = 1; level <= height; level++) {
    const spaces = ' '.repeat(height - level)
    let line = ''
    for (let index = 0; index < level; index++) {
      line += ' ' + ornaments[ornamentIndex % ornaments.length]
      ornamentIndex++
    }
    three += spaces + line.trim() + '\n'
  }
  return three + ' '.repeat(height - 1) + '|' + '\n'
}