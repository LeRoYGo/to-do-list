class Task {
    #description;
    constructor(description) {
        this.#description = description;
    }
    get description() {
        return this.#description;
    }
    set description(value) {
        this.#description = value;
    }
}

class ToDoList {
    constructor() {
        this._toDoList = [];
    }
    updateList(el) {
        const inputText = document.getElementById("inputText");

        if (inputText.value.length <= 0) return;

        el.createTask(inputText.value);
        el.checkStatusBanner();
        el.addTask();
        inputText.value = "";
    }
    removeTask(event) {
        let target = event.target;
        const parentElement = target.closest(".task");
        // _toDoList.splice(target.parentNode.id - 1, 1);
    }
    createTask(textTask) {
        this._toDoList.push(new Task(textTask));
    }
    checkStatusBanner() {
        if (this._toDoList.length > 0) {
            var emptySheet = document.getElementById("emptySheet");
            emptySheet.classList.add("none");
            taskList.style.justifyContent = "flex-start";
            return;
        }
        emptySheet.classList.remove("none");
        taskList.style.justifyContent = "center";
    }
    createElement(task) {
        const div = document.createElement("div");
        div.setAttribute("class", "task");
        div.setAttribute("id", this._toDoList.length);
        div.innerHTML = `<p class="task__title">${task.description}</p>
    <button class="task__button" id="taskButton">
        <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24.797 6.984H5.203M12.328 12.328v7.125M17.672 12.328v7.125M23.016 6.984v16.922a.89.89 0 0 1-.891.89H7.875a.89.89 0 0 1-.89-.89V6.984M19.453 6.984v-1.78a1.781 1.781 0 0 0-1.781-1.782h-5.344a1.781 1.781 0 0 0-1.781 1.781v1.781"
                stroke="#222"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>`;
        return div;
    }
    addTask() {
        const elementHTML = this.createElement(this._toDoList[this._toDoList.length - 1]);
        taskList.innerHTML = taskList.innerHTML + elementHTML.outerHTML;
    }
}

const taskList = document.getElementById("taskList");
const toDoList = new ToDoList();

taskList.addEventListener("click", toDoList.removeTask);
window.onload = () =>
    document.getElementById("inputButton").addEventListener("click", () => {
        toDoList.updateList(toDoList);
    });
