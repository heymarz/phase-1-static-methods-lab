class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
  return string.replace( /[^A-Za-z0-9 '-]/g, '')
   }

   static titleize(sentence){
     let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let result = [];
      let arrayWords = sentence.split(" ");
      for(let i=0; i<arrayWords.length; i++){
        //capitalize first letter of each sentence
        if(i == 0){
          result.push(this.capitalize(arrayWords[i]))
        } else{ //do not capitalize exceptions list
          if (exceptions.includes(arrayWords[i])){
            result.push(arrayWords[i])
          } else{ //capitalize first letter not on expections list
            result.push(this.capitalize(arrayWords[i]))
          }
        }
      }return result.join(" ")
   } 
}