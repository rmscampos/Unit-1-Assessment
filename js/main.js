//state vars
var count = 0;

//cached elements
let numberShown = document.getElementById('number');
let input = document.querySelector('input');
let addEl = document.getElementById('add');
let subEl = document.getElementById('subtract');

//event listeners

addEl.addEventListener('click', addInput);
subEl.addEventListener('click', subInput);


//functions

function addInput() {
    count += parseInt(input.value);
    render()
};
    
function subInput() {
    count -= parseInt(input.value);
    render()
}

function init() {
    numberShown.textContent = count;
    input.value = 1;
}

function render() {
    numberShown.style.color = count < 0 ? 'red' : 'black';
    numberShown.textContent = count;
}
