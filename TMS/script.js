document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskContent = taskInput.value.trim();

        if (taskContent !== '') {
            addTask(taskContent);
            taskInput.value = '';
        }
    });

    function addTask(content) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${content}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
    }
});