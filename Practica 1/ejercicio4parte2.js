function capitalizeFirstLetters(str) {
  
    const words = str.split(' ');
  
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
  
    const capitalizedSentence = capitalizedWords.join(' ');
  
    return capitalizedSentence;
  }
  
  // Ejemplo
  const inputString = 'this is an example sentence';
  const modifiedSentence = capitalizeFirstLetters(inputString);
  console.log('Modified sentence:', modifiedSentence);