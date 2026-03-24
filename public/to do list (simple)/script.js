const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');

let tasks = JSON.parse(localStorage.getItem('my_tasks')) || [];

function saveTasks() {
    localStorage.setItem('my_tasks', JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    const text = input.value.trim();
    if (text !== '') {
        tasks.push({ id: Date.now(), text, completed: false });
        input.value = '';
        saveTasks();
    }
}

function toggleTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
}

function renderTasks() {
    list.innerHTML = '';
    
    if (tasks.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `todo-item ${task.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <div class="checkbox" onclick="toggleTask(${task.id})"></div>
                <span onclick="toggleTask(${task.id})">${task.text}</span>
                <button class="delete-btn" onclick="deleteTask(${task.id})">&times;</button>
            `;
            
            list.appendChild(li);
        });
    }
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

renderTasks();