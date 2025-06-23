const btnAdicionarTask = document.querySelector('#addButton');


function editTask(editButton){

    const taskElement = editButton.parentElement;
    const taskTextNode = taskElement.firstChild;

    const taskText = taskTextNode.textContent;

    const newTaskText = prompt("Digite o novo texto da tarefa", taskText);

    if(newTaskText)
    {
        const newTaskTextNode = document.createTextNode(newTaskText);
        taskElement.replaceChild(newTaskTextNode, taskTextNode);
    }



}

function deleteTask(event, deleteButton){

    const taskElement = deleteButton.parentElement;
    taskElement.remove();


}

function createTaskElement(taskText){
     const newTask = document.createElement('li');
        const tasktextNode = document.createTextNode(taskText);
        newTask.appendChild(tasktextNode);

        const editButton = document.createElement('span');
        editButton.classList.add('edit');
        editButton.textContent = 'V';
        editButton.setAttribute('onclick', 'editTask(this)')


        const deleteButton = document.createElement('span');
        deleteButton.classList.add('delete');
        deleteButton.textContent = 'X';
        deleteButton.setAttribute('onclick', 'deleteTask(event, this)')

        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);

        return newTask;

}


function addTask(){
    const task  = document.querySelector('#taskInput');
    const taskText = task.value.trim();

    if(taskText){
        const taskList = document.querySelector('#taskList');

        const newTask = createTaskElement(taskText);

        taskList.appendChild(newTask);



    }




}

btnAdicionarTask.setAttribute('onclick', 'addTask()');

