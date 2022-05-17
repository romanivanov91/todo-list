'use strict';

const form = document.querySelector('form.add');
const spisok = document.querySelector('.purposes ul');
const text = document.querySelector('#purposetext');

//1 вариант - придумал чисто сам
// let i = 1;
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const purposeLi = document.createElement('li');
//     purposeLi.classList.add('purpose');
//     purposeLi.innerHTML=`<span class="text">${i++}. ${text.value}</span><button class="btnClose">X</button>`;
//     spisok.append(purposeLi);
//     text.value = '';
// });

// spisok.addEventListener('click', (e) => {
//     if (e.target.classList.contains('btnClose')) {
//         e.target.parentElement.remove();
//     } else if (!e.target.classList.contains('btnClose')) {
//         if (e.target.classList.contains('text')) {
//             e.target.classList.toggle('purposetext');
//             const c = e.target.closest('.purpose');//Родитель элемента
//             c.classList.toggle('purposedone');
//         } else {
//             let d =e.target.querySelector('.text');
//             d.classList.toggle('purposetext');
//             e.target.classList.toggle('purposedone');
//         }
//     }
// });

//2 вариант - более оптимальный, взял из обучения от Ивана Петреченко
const purposeArr = [];

function createPurposeList(arr, parent) {
    parent.innerHTML = '';
    arr.forEach((el, i) => {   
        parent.innerHTML+=` <li class="purpose"><span class="text">${i+1}. ${el}</span><button class="btnClose">X</button></li>`;
    });

    const btnClose = document.querySelectorAll('.btnClose');
    btnClose.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            arr.splice(i, 1);
            console.log(purposeArr);
            createPurposeList(purposeArr, spisok);
        });
    });

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    purposeArr.push(text.value);
    createPurposeList(purposeArr, spisok);
    text.value = '';
    console.log(purposeArr);
});

spisok.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnClose')) {
        e.target.parentElement.remove();
    } else if (!e.target.classList.contains('btnClose')) {
        if (e.target.classList.contains('text')) {
            e.target.classList.toggle('purposetext');
            const c = e.target.closest('.purpose');//Родитель элемента
            c.classList.toggle('purposedone');
        } else {
            let d =e.target.querySelector('.text');
            d.classList.toggle('purposetext');
            e.target.classList.toggle('purposedone');
        }
    }
});



