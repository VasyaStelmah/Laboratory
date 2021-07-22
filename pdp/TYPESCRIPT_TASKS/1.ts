// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.
// In this kata we will recreate that stunt... sort of.
// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.
// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.
// Return the resulting lamps string. See example tests for more clarity.
//-------------------Version 1
function flyBy1(lamps: string, drone: string): string {
  let length : number = drone.length;
  let newString: string = '';
	for(let i :number =0;i<lamps.length;i++){
  	if(length>i){
  	newString = newString.concat('o');
  	} else if(length<=i) {
		newString = newString.concat('x');
  	}
	}
  return newString
}
//-------------------Version 2
function flyBy2(lamps: string, drone: string): string {
  return [...lamps].fill('o', 0, drone.length).join('');
}
//-------------------Version 3
const flyBy3 = (lamps: string, drone: string): string =>
  drone.length >= lamps.length ? 'o'.repeat( lamps.length ) : 
  'o'.repeat( drone.length ) + 'x'.repeat( lamps.length - drone.length )

console.log(flyBy1('xxxxxx', '====T'));// 'ooooox');
console.log(flyBy1('xxxxxxxxx', '==T'));// 'oooxxxxxx'); 
console.log(flyBy1('xxxxxxxxxxxxxxx', '=========T'));//'ooooooooooxxxxx');
console.log(flyBy2('xxxxxx', '====T'));// 'ooooox');
console.log(flyBy2('xxxxxxxxx', '==T'));// 'oooxxxxxx'); 
console.log(flyBy2('xxxxxxxxxxxxxxx', '=========T'));//'ooooooooooxxxxx');
console.log(flyBy3('xxxxxx', '====T'));// 'ooooox');
console.log(flyBy3('xxxxxxxxx', '==T'));// 'oooxxxxxx'); 
console.log(flyBy3('xxxxxxxxxxxxxxx', '=========T'));//'ooooooooooxxxxx');