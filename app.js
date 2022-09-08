let input = document.querySelector("input");
let submitBtn = document.querySelector("#submit");
let editBtn = document.querySelector("#saveEdit");
let saveIndexInput = document.querySelector("#saveIndex");
let clearListBtn = document.querySelector(".clearList");

let groceryList = [];

//a function that puts the data into the local storage//
function addGroceryToLocal() {
  let inputVal = input.value;
  input.value = "";
  if (inputVal.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      groceryList = [];
    } else {
      groceryList = localItems;
    }
    groceryList.push(inputVal);
    localStorage.setItem("localItem", JSON.stringify(groceryList));
  }
}

submitBtn.addEventListener("click", function () {
  addGroceryToLocal();
  showList();
});

// shows all the data in the screen//
function showList() {
  let groceryBox = document.querySelector("#groceryBox");
  let output = "";
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    groceryList = [];
  } else {
    groceryList = localItems;
  }
  //create the div//
  groceryList.forEach((data, index) => {
    output += `
    <div class='d-flex mt-2 justify-content-between col-12'>
    <p class='input-value-aria fw-bold fs-5 text-center'>${data}</p>
    <div class="col-4">
    <button class="edit-btn rounded-circle me-3 bg-success border-0" onClick="edit(${index})"><i class="text-white fa fa-edit"></i></button>
    <button class="deleteTask rounded-circle bg-danger border-0" onClick="deleteItem(${index})"><i class="text-white fa fa-trash"></i></button>
    </div>
    </div>`;
  });
  groceryBox.innerHTML = output;
}
showList();

//Deletes each data individually
function deleteItem(index) {
  groceryList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(groceryList));

  showList();
}

//Deletes all data//
function clearList() {
  localStorage.clear();

  showList();
}
clearListBtn.addEventListener("click", clearList);

// edit each data //
function edit(index) {
  let webTasks = localStorage.getItem("localItem");
  let groceryList = JSON.parse(webTasks);
  saveIndexInput.value = index;
  input.value = groceryList[index];
  submitBtn.style.display = "none";
  editBtn.style.display = "flex";
}

//return all change
function saveEdit() {
  let webTasks = localStorage.getItem("localItem");
  let groceryList = JSON.parse(webTasks);
  groceryList[saveIndexInput.value] = input.value;
  submitBtn.style.display = "flex";
  editBtn.style.display = "none";
  localStorage.setItem("localItem", JSON.stringify(groceryList));
  input.value = "";
  showList();
}

editBtn.addEventListener("click", saveEdit);

