// En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

// Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

// Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

// Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

// Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
// Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
// Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
// Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
// Los caracteres que no son letras (como los dígitos) no se degradan.
// Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.

// checkIsValidCopy(
//   'Santa Claus is coming',
//   'sa#ta Cl#us i+ comin#'
// ) // true
// checkIsValidCopy(
//   's#nta Cla#s is coming',
//   'p#nt: cla#s #s c+min#'
// ) // false (por la p inicial)
// checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
// checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
// Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

// original:  'Santa Claus'
// 1ª copia:  'santa cla#s'
// 2ª copia:  'sa#t# cl#+s'
// 3ª copia:  'sa+## c#+:s'
// 4ª copia:  's#++. c+:.s'
// 5ª copia:  's#+:. c:. s'
// Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.

// Basado en el desafío de CodeWars Photocopy decay

function checkIsValidCopy(original, copy) {
  const symbols = '#+:. '
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const isUppercase = (letter) => uppercase.includes(letter)
  const isLowercase = (letter) => lowerCase.includes(letter)
  const convertToLowerCase = (letter) => letter.toLowerCase()

  const giveMeOptionOfDegradation = (letter) => {
    if (isUppercase(letter)) {
      return letter + convertToLowerCase(letter) + symbols
    }
    if (isLowercase(letter)) {
      return letter + symbols
    }
    const isAsymbol = symbols.includes(letter)
    if (isAsymbol) {
      const indexOfSymbol = symbols.indexOf(letter)
      const subListOfSymbols = symbols.slice(indexOfSymbol)
      return subListOfSymbols
    }
    return letter
  }

  if (original.length !== copy.length) return false

  for (let i = 0; i < original.length; i++) {
    const currentOriginalCaracter = original[i]
    const validFailCombinations = giveMeOptionOfDegradation(currentOriginalCaracter)
    const currentCopyCaracter = copy[i]

    if (!validFailCombinations.includes(currentCopyCaracter)) {
      return false
    }
  }

  return true
}