let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();  // Hilangkan spasi kosong di awal/akhir

    if (task) {  // Cek jika task tidak kosong
        tasks.push(task);  // Tambahkan task ke array
        taskInput.value = '';  // Kosongkan input setelah ditambahkan
        renderTasks();  // Render ulang daftar tugas
    } else {
        alert("Task cannot be empty!");  // Berikan pesan jika input kosong
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';  // Kosongkan task list sebelum menambah baru

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = task;
        input.setAttribute('onchange', `editTask(${index}, this.value)`);  // Edit task saat input diubah

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');  // Tombol delete dengan class 'delete-btn'
        deleteButton.setAttribute('onclick', `deleteTask(${index})`);  // Hapus task saat tombol ditekan

        li.appendChild(input);
        li.appendChild(deleteButton);
        taskList.appendChild(li);  // Tambahkan list item ke task list
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);  // Hapus task dari array
    renderTasks();  // Render ulang daftar tugas
}

function editTask(index, newValue) {
    tasks[index] = newValue;  // Update task dengan nilai baru
    renderTasks();  // Render ulang daftar tugas
}
