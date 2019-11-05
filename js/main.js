//state vars
const count = 0;
const input = 1;

//cached elements
let countEl = document.getElementById('count')
let inputEl = document.querySelector('input');
let addEl = document.getElementById('add');
let subEl = document.getElementById('sub');

//event listeners

document.getElementById('add').addEventListener('click', addInput);
document.getElementById('subtract').addEventListener('click', subInput);
document.querySelectorAll('button').addEventListener('mouseover', changeButtonColor);


//functions

//the count is not adding to the input
//

function addInput(evt) {
    countEl.textContent = (count + parseInt(inputEl.value, 10));
} 

    
function subInput(evt) {
    countEl.textContent = (count - parseInt(inputEl.value, 10));
    countEl.style.color = countEl.value >= 0 ? 'black' : 'red';
}

function changeButtonColor(evt){
    event.target.style.color = 'grey';
    event.target.style.backgroundColor = 'white';
}