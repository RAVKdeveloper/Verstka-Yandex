
document.body.onload = function () {

const Popup = document.querySelector('.popup__body')

setTimeout(() => {

Popup.classList.add('active')

}, 10000)



window.addEventListener('click', closePopup);

const Input = document.querySelector('.name__input__popup')

const btn = document.querySelector('.btn__popup');

btn.addEventListener('click', btnPopup);

function btnPopup() {
    if(Input.value !== '' && Input.value.length < 10) {
        Popup.classList.remove('active');
    }
}

function closePopup(e) {     
    if(e.target.dataset.close === "close") {
       Popup.classList.remove('active')
    } 
}


Input.addEventListener('input', addName)

function addName () {

    const prewiev = document.querySelector('.name__popup')

    if(Input.value.length < 10) {
        prewiev.innerText = `Привет: ${Input.value}`;
        prewiev.style.color = "inherit";
    } else {
        prewiev.innerText = "Введите своё имя";
        prewiev.style.color = "red";
    }
}
}