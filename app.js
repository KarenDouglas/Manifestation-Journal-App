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
const exBtn = document.querySelector('#expandBtn');


const DUMMYLIST = [
    // { id: 0, title: 'Dummy Title', description: " this is a dummy description", category: 'Career'}
]
 DUMMYLIST.forEach((item, index) => {
     item.id = index + 1
 })

const renderList = () => {
    DUMMYLIST.forEach((item, index) =>{
        manList.innerHTML += 
        ` <li id="${item.id}">
                 <div class="manListItem">
                     <button class="expandBtn">ex</button>
                     <h3>${item.title}</h3>
                     <div class="listButtonGroup">
                         <button>c</button>
                         <button>x</button> 
                     </div>
                 </div>
                 <div class="expListItem pToggle">
                     <em>${item.category}</em>
                     <p>${item.description}</p>
                 </div>
             </li>
             `
    }) 
}
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




const addListItemHandler = e => {
    e.preventDefault();
    DUMMYLIST.push(
        {   title: titleIntput.value, description: manTextArea.value, category: categoryInput.value, completed: false}
        )
        
        const listItem = document.createElement('li')
        listItem.innerHTML = `
        <div class="manListItem">
        <button class="expandBtn">ex</button>
        <h3>${titleIntput.value}</h3>
        <div class="listButtonGroup">
        <button id="completed" >c</button>
        <button id="trash" >x</button> 
        </div>
        </div>
        <div class="expListItem pToggle">
        <em>${categoryInput.value}</em>
        <p>${manTextArea.value}</p>
        </div>
        `
        DUMMYLIST.forEach((item, index) => {
            item.id = index + 1
            listItem.setAttribute('id', item.id)

        })
        manList.append(listItem)
        
        console.log(DUMMYLIST)
        titleIntput.value= '';
        categoryInput.value = '';
        description.value = '';
        stepOne.style.display = 'none';
        stepTwo.style.display = 'none';
}

document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'expandBtn'){
       // document.querySelector('.expListItem').classList.toggle('pToggle')
  e.target.parentElement.nextElementSibling.classList.toggle('pToggle')
     }
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'completed'){
      e.target.parentElement.parentElement.parentElement.style.textDecoration ='line-through'
      

       DUMMYLIST.filter((d)=> {
           if(e.target.parentElement.parentElement.parentElement.id == d.id){
               d.completed = true;
               console.log(DUMMYLIST)
           }
       })
     }
 });

 document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'trash'){
        // document.querySelector('.expListItem').classList.toggle('pToggle')
        e.target.parentElement.parentElement.parentElement.remove();

        const newArray = DUMMYLIST.filter((item) => item.id != e.target.parentElement.parentElement.parentElement.id);
        console.log(newArray)
    }
 });
addEntryBtn.addEventListener('click', newEntryHandler);
nextBtn.addEventListener('click', enterTitle);
manBtn.addEventListener('click', addListItemHandler);
renderList();
