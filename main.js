const mon = document.querySelector('#mon');
const tue = document.querySelector('#tue');
const wed = document.querySelector('#wed');
const thu = document.querySelector('#thu');
const fri = document.querySelector('#fri');
const sat = document.querySelector('#sat');
const sun = document.querySelector('#sun');

mon.addEventListener('mouseover', addItem1);
mon.addEventListener('mouseout', removeItem1);

tue.addEventListener('mouseover', addItem2);
tue.addEventListener('mouseout', removeItem2);

wed.addEventListener('mouseover', addItem3);
wed.addEventListener('mouseout', removeItem3);

thu.addEventListener('mouseover', addItem4);
thu.addEventListener('mouseout', removeItem4);

fri.addEventListener('mouseover', addItem5);
fri.addEventListener('mouseout', removeItem5);

sat.addEventListener('mouseover', addItem6);
sat.addEventListener('mouseout', removeItem6);

sun.addEventListener('mouseover', addItem7);
sun.addEventListener('mouseout', removeItem7);

const amount = document.querySelectorAll('#amount'); 

function addItem1(e){
    e.preventDefault();
    amount[0].classList.remove('d-none');
}

function removeItem1(e){
    e.preventDefault();
    amount[0].classList.add('d-none')
}

function addItem2(e){
    e.preventDefault();
    amount[1].classList.remove('d-none');
}

function removeItem2(e){
    e.preventDefault();
    amount[1].classList.add('d-none')
}

function addItem3(e){
    e.preventDefault();
    amount[2].classList.remove('d-none');
}

function removeItem3(e){
    e.preventDefault();
    amount[2].classList.add('d-none')
}

function addItem4(e){
    e.preventDefault();
    amount[3].classList.remove('d-none');
}

function removeItem4(e){
    e.preventDefault();
    amount[3].classList.add('d-none')
}

function addItem5(e){
    e.preventDefault();
    amount[4].classList.remove('d-none');
}

function removeItem5(e){
    e.preventDefault();
    amount[4].classList.add('d-none')
}

function addItem6(e){
    e.preventDefault();
    amount[5].classList.remove('d-none');
}

function removeItem6(e){
    e.preventDefault();
    amount[5].classList.add('d-none')
}

function addItem7(e){
    e.preventDefault();
    amount[6].classList.remove('d-none');
}

function removeItem7(e){
    e.preventDefault();
    amount[6].classList.add('d-none')
}