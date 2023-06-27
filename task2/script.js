const consolelog = document.querySelector('#consolelog');

consolelog.addEventListener('click',()=> {
    alert ('Служит для вывода информации в консоль');
} )


const consolelog2 = document.querySelector ('#alert');

consolelog2.addEventListener ('click' , () => {
    alert ('Для отображения информации пользователям');
} )


const consolelog3 = document.querySelector ('#prompt');

consolelog3.addEventListener ('click' , () => {
    alert ('По своим функциям похож на alert(). Отображает диалоговое окно с запросом на ввод текста');
} )

