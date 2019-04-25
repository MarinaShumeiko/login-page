const setActive = el => {
    [...el.parentElement.children].forEach(sib => sib.classList.remove('run-animation'))
    el.classList.add('run-animation')
    }
let list = [...document.body.querySelectorAll('.info > img')]
list.forEach(el => el.addEventListener('click', e => setActive(el)))