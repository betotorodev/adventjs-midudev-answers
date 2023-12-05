// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....

// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

// const road = 'S..|...|..'
// const time = 10 // unidades de tiempo
// const result = cyberReindeer(road, time)

// /* -> result:
// [
//   'S..|...|..', // estado inicial
//   '.S.|...|..', // avanza el trineo la carretera
//   '..S|...|..', // avanza el trineo la carretera
//   '..S|...|..', // el trineo para en la barrera
//   '..S|...|..', // el trineo para en la barrera
//   '...S...*..', // se abre la barrera, el trineo avanza
//   '...*S..*..', // avanza el trineo la carretera
//   '...*.S.*..', // avanza el trineo la carretera
//   '...*..S*..', // avanza el trineo la carretera
//   '...*...S..', // avanza por la barrera abierta
// ]
// */
// El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

function cyberReindeer(road, time) {
  let finalRoad = []
  const ROAD = '.'
  const SANTA_SLED = 'S'
  const OPEN_BARRIER = '*'
  let santaIsInAnOpenBarrier = false

  for (let i = 0; i <= time - 1; i++) {
    if (i === 0) {
      finalRoad[i] = road
      continue
    }

    let actualRoad = finalRoad[i - 1].split('')
    let positionOfSanta = actualRoad.indexOf(SANTA_SLED)

    if (i === 5) {
      const reg = /\|/g
      actualRoad = actualRoad.join('').replace(reg, OPEN_BARRIER).split('')
    }

    if (actualRoad[positionOfSanta + 1] === ROAD && !santaIsInAnOpenBarrier) {
      actualRoad[positionOfSanta] = ROAD
      actualRoad[positionOfSanta + 1] = SANTA_SLED
    } else if (actualRoad[positionOfSanta + 1] === ROAD && santaIsInAnOpenBarrier) {
      actualRoad[positionOfSanta] = OPEN_BARRIER
      actualRoad[positionOfSanta + 1] = SANTA_SLED
      santaIsInAnOpenBarrier = false
    } else if (actualRoad[positionOfSanta + 1] === OPEN_BARRIER && !santaIsInAnOpenBarrier) {
      santaIsInAnOpenBarrier = true
      actualRoad[positionOfSanta] = ROAD
      actualRoad[positionOfSanta + 1] = SANTA_SLED
    } else if (actualRoad[positionOfSanta + 1] === OPEN_BARRIER && santaIsInAnOpenBarrier) {
      santaIsInAnOpenBarrier = true
      actualRoad[positionOfSanta] = OPEN_BARRIER
      actualRoad[positionOfSanta + 1] = SANTA_SLED
    }

    finalRoad[i] = actualRoad.join('')
  }
  return finalRoad
}