// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
class Kata {
  static spinWords(words: string) {
  let array : Array<string> = words.split(' ');
  return  array.reduce((prevItem,item)=>{
    if(item.length>=5){
      item=item.split('').reverse().join('');
      return prevItem.concat(item)
    }
      return prevItem.concat(item)
    },[]).join(' ')
  }
}
console.log(Kata.spinWords("Hey fellow warriors"))// => "Hey wollef sroirraw" 
console.log(Kata.spinWords("This is a test"))// => "This is a test" 
console.log(Kata.spinWords("This is another test"))// => "This is rehtona test"