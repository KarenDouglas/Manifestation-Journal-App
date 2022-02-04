const addEntryBtn = document.querySelector('.addBtn');
const nextBtn = document.querySelector('.form-Btn');
const manBtn = document.querySelector('.manBtn');
const  stepOne = document.querySelector('.stepOne');
const  stepTwo = document.querySelector('.stepTwo');
const titleIntput = document.querySelector('#titleValue');
const categoryInput = document.querySelector('#category');
const stepTwoTitle = stepTwo.querySelector('h2');
const categoryTitle = stepTwo.querySelector('h4');
const manList = document.querySelector('.manList');
const manTextArea = document.querySelector('#description');
const exBTn =document.querySelector('.expandBtn');
const expListItem = document.querySelector('.expListItem')


const DUMMYLIST = [
    { title: 'Dummy Title', description: " this is a dummy description", category: 'Career'}
]


const renderList = () => {
    DUMMYLIST.forEach((item, index) =>{
        manList.innerHTML += 
        ` <li id="${index}">
                 <div class="manListItem">
                     <button class="expandBtn">ex</button>
                     <h3>${item.title}</h3>
                     <div class="listButtonGroup">
                         <button>c</button>
                         <button>x</button> 
                     </div>
                 </div>
                 <div class="expListItem">
                     <em>${item.category}</em>
                     <p>${item.description}</p>
                 </div>
             </li>
             `
    }) 
}
console.log(DUMMYLIST)
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


const addToListHandler = e => {
    e.preventDefault();
    
    DUMMYLIST.push(
        { title: titleIntput.value, description: manTextArea.value, category: categoryInput.value}
        )


    let li = document.createElement('li')
    
    manList.appendChild(li)
    li.innerHTML +=
}



addEntryBtn.addEventListener('click', newEntryHandler)
nextBtn.addEventListener('click', enterTitle);
manBtn.addEventListener('click', addToListHandler);
renderList();