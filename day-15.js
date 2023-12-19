// Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

// Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

// El almacén se representa como un array de cadenas de texto, donde:

// . significa que hay vía libre.
// * significa que hay un obstáculo.
// ! es la posición inicial del robot.
// Los movimientos son un array de cadenas de texto, donde:

// R mueve al robot una posición a la derecha.
// L mueve al robot una posición a la izquierda.
// U mueve al robot una posición hacia arriba.
// D mueve al robot una posición hacia abajo.
// Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

// Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

// const store = ['..!....', '...*.*.']

// const movements = ['R', 'R', 'D', 'L']
// const result = autonomousDrive(store, movements)
// console.log(result)
// /*
// [
//   ".......",
//   "...*!*."
// ]
// */

// // El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.
// Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

// También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.

function autonomousDrive(store, movements) {
  const RIGHT = 'R'
  const LEFT = 'L'
  const UP = 'U'
  const DOWN = 'D'
  const ROBOT = '!'
  const FREE_WAY = '.'

  for (let move of movements) {
    const locationOfRobot = store.filter(storePart => storePart.includes(ROBOT))[0].split('')
    const indexOfRobot = locationOfRobot.indexOf(ROBOT)
    const indexOfLocationOfRobot = store.indexOf(locationOfRobot.join(''))

    if (move === RIGHT) {
      const canMoveToRight = locationOfRobot[indexOfRobot + 1] === FREE_WAY
      if (canMoveToRight) {
        locationOfRobot[indexOfRobot + 1] = ROBOT
        locationOfRobot[indexOfRobot] = FREE_WAY
        store[indexOfLocationOfRobot] = locationOfRobot.join('')
      }
    } else if (move === LEFT) {
      const canMoveToLeft = locationOfRobot[indexOfRobot - 1] === FREE_WAY
      if (canMoveToLeft) {
        locationOfRobot[indexOfRobot - 1] = ROBOT
        locationOfRobot[indexOfRobot] = FREE_WAY
        store[indexOfLocationOfRobot] = locationOfRobot.join('')
      }
    } else if (move === UP) {
      const previousRow = store[indexOfLocationOfRobot - 1] !== undefined ? store[indexOfLocationOfRobot - 1].split('') : ''
      const canMoveToUp = previousRow[indexOfRobot] === FREE_WAY
      if (canMoveToUp) {
        previousRow[indexOfRobot] = ROBOT
        store[indexOfLocationOfRobot - 1] = previousRow.join('')

        locationOfRobot[indexOfRobot] = FREE_WAY
        store[indexOfLocationOfRobot] = locationOfRobot.join('')
      }
    } else if (move === DOWN) {
      const nextRow = store[indexOfLocationOfRobot + 1] !== undefined ? store[indexOfLocationOfRobot + 1].split('') : ''
      const canMoveToDown = nextRow[indexOfRobot] === FREE_WAY
      if (canMoveToDown) {
        nextRow[indexOfRobot] = ROBOT
        store[indexOfLocationOfRobot + 1] = nextRow.join('')

        locationOfRobot[indexOfRobot] = FREE_WAY
        store[indexOfLocationOfRobot] = locationOfRobot.join('')
      }
    }
  }

  return store
}