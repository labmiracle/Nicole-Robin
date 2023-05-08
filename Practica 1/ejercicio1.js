/* Ejercicio 1
Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta de acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad,arriba(más alto) a abajo (más bajo):
 */



function golfScore(par,strokes) {
    if (strokes === 1) {
        console.log('Hole-in-one!');
      } else if (strokes <= par - 2) {
        console.log('Eagle');
      } else if (strokes === par - 1) {
        console.log('Birdie');
      } else if (strokes === par) {
        console.log('Par');
      } else if (strokes === par + 1) {
        console.log('Bogey');
      } else if (strokes === par + 2) {
        console.log('Double Bogey');
      } else if (strokes >= par + 3) {
        console.log('Go Home!');
      } else {
        console.log('Error');
      }
 
    }
golfScore(5,2);