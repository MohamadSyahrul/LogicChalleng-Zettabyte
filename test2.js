/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  var tmp = [];
  for(var i = 0; i < data.length; i++){
      if(tmp.indexOf(data[i]) == -1){
        tmp.push(data[i]);
      }
  }
  return tmp;
}

console.log(result(data));
