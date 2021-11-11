/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  if (!words[0] || words.length ==  1) return words[0] || "";
    let shrl = 0;
  while(words[0][shrl] && words.every(w => w[shrl] === words[0][shrl]))
    shrl++;
  return words[0].substr(0, shrl);
}

console.log(result(words));
