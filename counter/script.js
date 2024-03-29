



const addBtn = document.querySelector('.add');
const lowerBtn = document.querySelector('.lower');
const number = document.querySelector('.number');
const resetBtn = document.querySelector('.reset');
let counter = 0;

const add = () => {
    counter++;
    number.innerText = counter;
    number.animate([
        {opacity: '0.5'},
        {opacity: '1'}
    ], {
        duration: 500
    });
};
// addBtn.onclick = add;
addBtn.addEventListener("click", add);

const lower = () => {
    counter--;
    number.innerText = counter;
    number.animate([
        {opacity: '0'},
        {opacity: '1'}
    ], {
        duration: 500
    });
}
// add.onclick = lower;
lowerBtn.addEventListener('click', lower);

const reset = () => {
    if (counter > 0 || counter < 0) {
        counter = 0;
        number.innerText = counter;
    }
    number.animate([
        {opacity: '0.5'},
        {opacity: '1'}
    ], {
        duration: 500
    });
}
// resetBtn.onclick = reset;
resetBtn.addEventListener('click', reset);