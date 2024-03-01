const inputText = document.getElementById("inputText");
const inputButton = document.getElementById("inputButton");
const taskList = document.getElementById("taskList");
const emptySheet = document.getElementById("emptySheet");

function AddTask() {
    if (inputText.value.length == 0) {
        return;
    }
    taskList.appendChild(FormElement());
    SetTaskText();
    CheckStatusBanner();
    inputText.value = "";
}

function RemoveTask() {
    let target = th.target;

    this.parentNode.remove();
    CheckStatusBanner();
}

function CheckStatusBanner() {
    let i = document.querySelectorAll(".task").length;
    console.log(document.querySelectorAll(".task").length);
    if (i > 0) {
        emptySheet.classList.add("none");
        taskList.style.justifyContent = "flex-start";
    } else {
        emptySheet.classList.remove("none");
        taskList.style.justifyContent = "center";
    }
}

function FormElement() {
    const div = document.createElement("div");
    div.setAttribute("class", "task");
    div.innerHTML = `<p class="task__title"></p>
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

function SetTaskText() {
    const taskText = document.querySelectorAll(".task__title");
    taskText[taskText.length - 1].innerText = inputText.value;
}

window.onload = () => inputButton.addEventListener("click", AddTask);
window.onload = () => taskList.addEventListener("click", RemoveTask);
