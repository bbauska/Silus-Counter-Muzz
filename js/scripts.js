/* /js/scripts.js in github Silus-Counter-Muzz making silus-counter-muzz.bauska.org */
/* July 13, 2026 = ## (## hours approx) */
let counter = 0;
/* ##,### from month dd (hours worked)
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
