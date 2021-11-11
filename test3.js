/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
    // const cleanedArray = [];
    // data.forEach((val) => {
    //   if(val !== null && typeof val !== undefined && (""+val).trim() !== null){
    //     cleanedArray.push(val);
    //   }
    // });
    // return cleanedArray;

    // var filter = JSON.stringify(data)
    // return filter


  let  yung = JSON.stringify(data);
  yung = yung.replace(/\s/g, "");
  yung = yung.replace(/"\w+":(null|undefined),/g,"");
  shrl =  JSON.parse(yung);
  return JSON.stringify(shrl);

    
}

console.log(result(data));
