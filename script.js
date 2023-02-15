const addTask = document.querySelector('#addTaskButton')
const inputText = document.querySelector('#toDo')
const listaTarefa = document.querySelector('.lista-tarefa')

addTask.disabled = true;
const validateInput = () => inputText.value.trim().length > 0;


addTask.addEventListener('click', addNewTask);

inputText.addEventListener('input', inputVerification)

document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addNewTask();
    }
})
    
inputText.addEventListener('change', handleInputChange)

function inputVerification(){
    let conteudo = inputText.value

    if(conteudo !== null && conteudo !== ''){
        addTask.disabled = false;
    }else {
        addTask.disabled = true;
    } 
}

function addNewTask(){

    const inputIsValid = validateInput()

    if(!inputIsValid){
        return inputText.classList.add('error')
    }
   
    let taskItemContainer = document.createElement('li');


    let spanTask = document.createElement('span');
    spanTask.textContent = inputText.value;



    let deleIcon = document.createElement('i')
    deleIcon.classList.add('far')
    deleIcon.classList.add('fa-trash-alt')

    taskItemContainer.appendChild(spanTask)
    taskItemContainer.appendChild(deleIcon)
    
    listaTarefa.appendChild(taskItemContainer)
    
    deleIcon.addEventListener('click', () => taskItemContainer.remove())

    inputText.value = ''
}

function handleInputChange(){
    const inputIsValid = validateInput()

    if(inputIsValid) {
        return inputText.classList.remove('error')
    }
}

