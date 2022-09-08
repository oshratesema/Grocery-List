let input = document.querySelector('input');
let submitBtn = document.querySelector('#submit');
let clearListBtn = document.querySelector('.clearList');
let groceryBox = document.querySelector('#groceryBox');
let deleteItemBtn = document.querySelector('.deleteTask');


function addGrocery() {
    inputVal = input.value;
    grocery = input.value;                      
    localStorage.setItem(grocery , {inputVal})

    showList()
}

function showList() {
    if (inputVal === ''){
        alert('file is not filed')
    }else{
   groceryBox.innerHTML += `
   <div class='d-flex mt-2 border border-dark justify-content-between '>
   <p class=''>${inputVal}</p>
   <div class="col-2">
   <button class="addit-teTask rounded-circle me-3"><i class="fa fa-edit"></i></button>
   <button class="deleteTask rounded-circle"><i id='deleteItem' class="fa fa-trash"></i></button>
   </div>
   </div>`

    }
}

submitBtn.addEventListener('click' , addGrocery)
