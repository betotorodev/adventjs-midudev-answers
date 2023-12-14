// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

// adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// // -> 1 (cambias la cuarta luz a 🔴)

// adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// // -> 1 (cambia la primera luz a verde)

// adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// // -> 0 (ya están alternadas)

// adjustLights(['🔴', '🔴', '🔴'])
// // -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights) {
  if (lights.length === 0) return 0

  const reverseLights = lights.reverse()

  const oddLightsToChange = lights.filter((_, index) => index % 2 !== 0).filter(item => item === lights[0])
  const evenLightsToChange = lights.filter((_, index) => index % 2 === 0).filter(item => item !== lights[0])
  const oddLightsReversedToChange = reverseLights.filter((_, index) => index % 2 !== 0).filter(item => item === lights[0])
  const evenLightsReversedToChange = reverseLights.filter((_, index) => index % 2 === 0).filter(item => item !== lights[0])

  const ligthsToChange = Math.abs(oddLightsToChange.length + evenLightsToChange.length)
  const reversedLithsToChange = Math.abs(oddLightsReversedToChange.length + evenLightsReversedToChange.length)

  return Math.min(ligthsToChange, reversedLithsToChange)
}

// solución de chat GPT 

// function adjustLights(lights) {
//   if (lights.length === 0) return 0;

//   const firstLight = lights[0];
//   let ligthsToChange = 0;

//   for (let i = 0; i < lights.length; i++) {
//     const isOdd = i % 2 !== 0;
//     ligthsToChange += isOdd ? (lights[i] !== firstLight) : (lights[i] === firstLight);
//   }

//   return Math.min(ligthsToChange, lights.length - ligthsToChange);
// }