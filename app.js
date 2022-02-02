const addEntryBtn = document.querySelector('.addBtn')
const nextBtn = document.querySelector('.form-Btn')
const  stepOne = document.querySelector('.stepOne')
const  stepTwo = document.querySelector('.stepTwo')
const titleIntput = document.querySelector('#titleValue');
const categoryInput = document.querySelector('#category');
const stepTwoTitle = stepTwo.querySelector('h2');
const categoryTitle = stepTwo.querySelector('h4');

const newEntryHandler = () => {
    stepOne.style.display = 'flex';
}

const enterTitle = e => {
    e.preventDefault();
    console.log(titleIntput.value, categoryInput.value) 
    stepTwoTitle.innerHTML = titleIntput.value;
    categoryTitle.innerHTML= categoryInput.value;
    stepOne.style.display = 'none';
    stepTwo.style.display = 'block';
};
addEntryBtn.addEventListener('click', newEntryHandler)
nextBtn.addEventListener('click', enterTitle);