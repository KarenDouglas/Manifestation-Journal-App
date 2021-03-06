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
const sortOpt = document.querySelector('#sortOpt');


let uri = 'http://localhost:3000/posts';

let DUMMYLIST = [
    {"id": 1, "title": "Complete Manifest Journal", "category": "Career", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "completed": false },
    {"id": 2, "title": "Pay off Debt", "category": "Financial", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "completed": false },
    {"id": 3, "title": "Work Out 30 mins a day", "category": "Health", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "completed": true },
    {"id": 4, "title": "Take Family Out for Quality Time", "category": "Family", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "completed": true },
    {"id": 5, "title": "Join an Online Community", "category": "Career", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "completed": false }


];



 DUMMYLIST.forEach((item, index) => {
     item.id = index + 1
 });


const newEntryHandler = () => {
    stepOne.style.display = 'flex';
};

const enterTitle = e => {
    e.preventDefault();
    console.log(titleIntput.value, categoryInput.value) 
    stepTwoTitle.innerHTML = titleIntput.value;
    categoryTitle.innerHTML= categoryInput.value;
    stepOne.style.display = 'none';
    stepTwo.style.display = 'block';
    
};

// const addListItemHandler = e => {
//     e.preventDefault();
//     DUMMYLIST.push(
//         {   title: titleIntput.value, description: manTextArea.value, category: categoryInput.value, completed: false}
//         )
        
//         const listItem = document.createElement('li')
//         listItem.innerHTML = `
//         <div class="manListItem">
//         <button class="expandBtn"> <i class=" fa fa-regular fa-window-maximize"></i></button>
//         <h3>${titleIntput.value}</h3>
//         <div class="listButtonGroup">
//         <button id="completed" class="completeBtn" ><i class="fa fa-check"></i></button>
//         <button id="trash" class="trashBtn" ><i class="fa fa-trash"></i></button> 
//         </div>
//         </div>
//         <div class="expListItem pToggle">
//         <em>${categoryInput.value}</em>
//         <p>${manTextArea.value}</p>
//         </div>
//         `
//         DUMMYLIST.forEach((item, index) => {
//             item.id = index + 1
//             listItem.setAttribute('id', item.id)

//         })
//         manList.prepend(listItem)
        
//         console.log(DUMMYLIST)
//         titleIntput.value= '';
//         categoryInput.value = '';
//         description.value = '';
//         stepOne.style.display = 'none';
//         stepTwo.style.display = 'none';
// };

const addPost = async () => {
    const doc = {
           title: titleIntput.value, 
           description: manTextArea.value, 
           category: categoryInput.value, 
           completed: false
    }

    await fetch(uri , {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type': 'application/json'}
    });
}

document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'expandBtn'){
  e.target.parentElement.nextElementSibling.classList.toggle('pToggle')
     }
 });

 document.addEventListener('click',async (e) => {
    if(e.target && e.target.id == 'completed'){
        const res = await fetch(uri);
        const posts = await res.json();
        const doc ={
            completed: true
        }

       posts.filter(async (d)=> {
           if(e.target.parentElement.parentElement.parentElement.id == d.id){

            if(d.completed === false){
                const response = await fetch(`${uri}/${e.target.parentElement.parentElement.parentElement.id}`,{
                    method: 'PATCH',
                    body:JSON.stringify(doc),
                    headers: {'Content-Type': 'application/json'}
                })
                
                // d.completed = true;
                // e.target.parentElement.parentElement.parentElement.classList.add('completed')
            }else{
                alert('Already completed this task!')
            }
               console.log(DUMMYLIST)
           }
       });
     }
 });

 document.addEventListener('click',async (e) =>{
    if(e.target && e.target.id == 'trash'){
        // e.target.parentElement.parentElement.parentElement.remove();
        
        // let newArray = DUMMYLIST.filter((item) => {
        //    const list = item.id != e.target.parentElement.parentElement.parentElement.id
        //     return list
        // });

        // DUMMYLIST = newArray;
        // console.log(newArray);


        const res = await fetch(`${uri}/${e.target.parentElement.parentElement.parentElement.id}`,{
            method: 'DELETE'
        })
    }
 });

 
 const completedFilteredList = DUMMYLIST.filter((item) =>{
    if(item.completed == true){
       return item
    }
});

//  const renderList = () => {
//     DUMMYLIST.forEach((item, index) =>{

        
//         manList.innerHTML += 
//         ` <li id="${item.id}" class=${item.completed? "completed": ''}>
//                  <div class="manListItem">
//                      <button class="expandBtn">
 
 
//                      <i class=" fa fa-regular fa-window-maximize"></i></button>
//                      <h3>${item.title}</h3>
//                      <div class="listButtonGroup">
//                          <button id="completed" class= "completeBtn"><i class="fa fa-check"></i></button>
//                          <button id="trash" class="trashBtn"><i class="fa fa-trash"></i></button> 
//                      </div>
//                  </div>
//                  <div class="expListItem pToggle">
//                      <em>${item.category}</em>
//                      <p>${item.description}</p>
//                  </div>
//              </li>
//              `
//         });

    
    //};
const sortByTypeHandler = () => {
    const list = Array.from(manList.querySelectorAll('li'));
    list.forEach((item)=> item.style.display ='block');
    if(sortOpt.value == 'completed'){
      let  completedList =list.filter((item)=>{
        return !item.classList.contains('completed')
      }).forEach((li)=>{
          li.style.display= 'none'
      });
    }else if (sortOpt.value == 'pending'){
        let  pendingList =list.filter((item)=>{
            return item.classList.contains('completed')
          }).forEach((li)=>{
              li.style.display= 'none'
          });
    }else if(sortOpt.value == 'all'){
        list.forEach((item)=> item.style.display ='block')
    }

    
}

const renderPosts = async () =>{
   
    const res = await fetch(`${uri}?_sort=id&_order=desc`);
    const posts = await res.json();

    let template= ''

    posts.forEach((item, index) =>{
        
       template += 
        ` <li id="${item.id}" class=${item.completed? "completed": ''}>
                 <div class="manListItem">
                     <button class="expandBtn">
 
 
                     <i class=" fa fa-regular fa-window-maximize"></i></button>
                     <h3>${item.title}</h3>
                     <div class="listButtonGroup">
                         <button id="completed" class= "completeBtn"><i class="fa fa-check"></i></button>
                         <button id="trash" class="trashBtn"><i class="fa fa-trash"></i></button> 
                     </div>
                 </div>
                 <div class="expListItem pToggle">
                     <em>${item.category}</em>
                     <p>${item.description}</p>
                 </div>
             </li>
             `
        });

  manList.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', renderPosts)

sortOpt.addEventListener('click', sortByTypeHandler);
addEntryBtn.addEventListener('click', newEntryHandler);
nextBtn.addEventListener('click', enterTitle);
manBtn.addEventListener('click', addPost);

