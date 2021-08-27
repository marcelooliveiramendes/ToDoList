const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const deleteAllBtn = document.querySelector('.footer button');
const todoList = document.querySelector('.todoList');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

showTasks();


addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){ //se localStorage for nulo
        listArr = []; // criar um array vazio
    } else {
        listArr = JSON.parse(getLocalStorage); // transformando json string em js object
    }
    listArr.push(userData) // adicionando user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); // transformando js object em json string
    showTasks();
}


// funcao que adiciona a lista de tarefas dentro da ul
function showTasks(){
    let getLocalStorage = localStorage.getItem('New Todo');
    if(getLocalStorage == null){ //se localStorage for nulo
        listArr = []; // criar um array vazio
    } else {
        listArr = JSON.parse(getLocalStorage); // transformando json string em js object
    }
    const pedingNumb = document.querySelector('.pendingNumb');
    pedingNumb.textContent = listArr.length;
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; // add nova li
    inputBox.value = ""; // apos add uma tarefa, limpa a textbox
}


//funcao de apagar a tarefa
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); // deleta a tarefa em particular pelo index
    // depois de remover, atualiza a lista e o localStorage
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}
