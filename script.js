const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");

function addTask() {
    if (inputBox.value === '') {
        alert("Casy can't just do nothing! Put something on the list!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = " ";
    saveData();
}

listItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

function saveData() {
    localStorage.setItem("data", listItems.innerHTML);
}

function showList() {
    listItems.innerHTML = localStorage.getItem("data");
}

showList();