const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    // whenever any task is called the save data will be called to save the data to
    // the browser:-
    saveData();
}

// To add click function to li element so which it can do checked or unchecked functionality:-
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // To add click function to span element so which it can remove 
    // the list element by clicking on cross icon:-
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// adding functionality to save data 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// To display the data whenever we will open the website again, created a function :- 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask();