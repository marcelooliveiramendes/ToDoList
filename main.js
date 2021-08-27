const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }

}

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
}