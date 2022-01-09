'use strict'
const search = document.getElementById('search');

const searchIcon = document.getElementById("search-icon");
document.addEventListener('click', (event) => {
    if (event.target === search) {
        return
    } else if (event.target === searchIcon) {
        searchIcon.style.display = 'none';
        search.style.display = 'block';
        search.focus()

    } else {
        search.style.display = 'none';
        searchIcon.style.display = 'block';
    }

})




//Calculator
const calculator = document.getElementById('calculator');
function calculate() {
    let data = prompt('Привет, я калькулятор! Что желаете посчтитать?')
    if (data === null) {
        alert('Ввод отменен')
    } else if (data === '') {
        alert('Вы ничего не ввели!')
    } else {
        data = data.replace(/,/g, '.')
        try {
            let result = eval(data)
            if (result === Infinity || result === -Infinity) {
                alert('На ноль делить нельзя!')
            } else if (isNaN(result)) {
                alert('Введите корректное выражение')
            } else {
                alert(result)
            }
        } catch {
            alert('Введите корректное выражение')
        }

    }

}
calculator.addEventListener('click', calculate)


//modal-window
const order = document.getElementById('order')
const modal = document.getElementById('modal')
const closeWindow = document.getElementById('close-window')
order.addEventListener('click', function (event) {
    event.preventDefault();//отменяем действия браузера по умолчанию
    modal.style.display = 'flex'
    document.documentElement.style.overflow = 'hidden'
})
closeWindow.addEventListener('click', function (event) {
    modal.style.display = 'none'
    document.documentElement.style.overflow = 'auto'
})
