//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(e) {
	//Prevent Form from Submitting
	e.preventDefault();

	//Todo Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//Create LI
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	//Check Mark Button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("completed-btn");
	todoDiv.appendChild(completedButton);

	//Trash Button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	//Append to list
	todoList.appendChild(todoDiv);

	//Clear Todo input value
	todoInput.value = "";
}

function deleteCheck(e) {
	const item = e.target;

	// Delete Todo
	if (item.classList[0] === "trash-btn") {
	}
}

//Video Paused at:
//https://youtu.be/Ttf3CEsEwMQ?t=2124
