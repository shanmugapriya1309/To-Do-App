let inputBox=document.getElementById("input-field");
let list=document.querySelector(".list-container");
let button=document.getElementById("button");
let todos=[];

window.addEventListener('load',()=>{
    if(todos){
    let todo=JSON.parse(localStorage.getItem('todos'));
    todo.forEach(addTask);
    todos=[...todo];
    
    console.log(todo);
    console.log(todos);
    
    }
})
button.addEventListener('click',()=>{
    if(inputBox.value === ''){
        alert("please add any task")
    }
    else{
        todos.push(inputBox.value);
        localStorage.setItem("todos",JSON.stringify(todos));
        addTask(inputBox.value);
        inputBox.value='';
    }
})
function addTask(todo){
    const tastInput=todo;
        const li=document.createElement("div");
        li.classList.add("task");
        list.appendChild(li);
        var input2=document.createElement("span");
        li.appendChild(input2);
        input2.classList.add("text");
        let values=input2.innerHTML=tastInput;
        var input3=document.createElement("button")
        li.appendChild(input3)
        input3.classList.add("del");
        input3.innerText='\u00D7';
        input3.addEventListener('click',()=>{
        li.removeChild(input2);
        li.removeChild(input3);
        remove(values);
        })

        
 }
function remove(values){
    let index=todos.indexOf(values);
            todos.splice(index,1);
             localStorage.setItem("todos",JSON.stringify(todos));


}



