/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  var shrl = [], min= Math.min.apply('',numbers), max= Math.max.apply('',numbers);
    while(min<max){
        if(numbers.indexOf(++min)== -1) shrl .push(min);
    }
  return shrl ;
}

console.log(result(numbers));
