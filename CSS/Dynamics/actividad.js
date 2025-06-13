

contTareas = document.getElementById("contTareas");
btnAdd = document.getElementById("btn1");
btnDelete =  document.getElementById("btn2");

btnAdd.addEventListener("click", ()=>{
    let cards = document.getElementsByClassName("card");
    console.log("Añadiste, hay " +(cards.length+1)+" tareas");
    let card_element = document.createElement("div");
    card_element.textContent = "Tarea";
    card_element.classList.add("card");
    contTareas.append(card_element);
});

btnDelete.addEventListener("click", ()=>{
    let cards = document.getElementsByClassName("card");
    console.log("Borraste, hay " +(cards.length-1)+" tareas");
    if(cards.length>0){
        contTareas.removeChild(contTareas.lastChild);
    }
});

console.log(contTareas);






