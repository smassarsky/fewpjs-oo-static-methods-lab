class Formatter {

  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    let skipWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(" ").map((word, index) => {
      if (index === 0 || skipWords.indexOf(word) == -1) {
        return this.capitalize(word)
      } else {
        return word
      }
    }).join(" ")
  }

}