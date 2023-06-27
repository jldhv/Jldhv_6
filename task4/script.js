const newText = document.querySelector('a');
function text() {
    const text1 = prompt("Введите текст");
    newText.textContent = text1;
}
newText.addEventListener('click', text);