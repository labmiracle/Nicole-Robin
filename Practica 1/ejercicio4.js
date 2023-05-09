function palabraMasLarga(str) {
    // split =separar palabras
    const words = str.split(' ');
  
    let longestWord = '';
    let maxLength = 0;
  
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      
      if (word.length > maxLength) {
        longestWord = word;
        maxLength = word.length;
      }
    }
  
    
    return longestWord;
}


  
  
  const inputString = 'Ejemplo de como hacer una cadena de palabras para saber cual es más larga palabrag';
  const longest = palabraMasLarga(inputString);
  console.log('Longest word is :', longest);