//Возврат 
let textElement;
let input = document.getElementById("input");
let newtext = document.getElementById("duplicateField");
input.onkeyup = function() {
  textElement = input.value;
  newtext.textContent = textElement;
};
input.onkeyup();
//Возврат 
document.querySelector('.button').addEventListener('click', function() {
  let button = textElement;
  console.log(button);
});
 document.querySelector('.button').addEventListener('click', function(event) {
  input.value = event.preventDefault();
});
//Удаление 
document.querySelector('.button').addEventListener('click', function(event) {
  newtext.textContent = event.preventDefault();
});
document.querySelector(".clearButton").addEventListener('click', function() {
  input.value = "";
}); (edited) 