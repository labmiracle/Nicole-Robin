function camelize(str)  {

    const words = str.split(/[\s_-]/);
    
    //Mayuscula
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // Une las palabras en una sola cadena
    const camelCaseStr = camelCaseWords.join("");
    
    return camelCaseStr;
  }
  
  // Ejemplo
   const camelizeresultado = camelize("hola a todos que tal");
  console.log(camelizeresultado); 