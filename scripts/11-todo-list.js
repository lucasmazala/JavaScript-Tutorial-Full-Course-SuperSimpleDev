//first Todo List

let todoList = [];
function addItem(){
	const inputElement = document.querySelector('.js-input');
	const item = inputElement.value; 
	todoList.push(item);
	console.log(todoList);
	
	inputElement.value = ''; //to clean the textbox 	
}


//Second Todo List

let todoList2=['make dinner', 'wash dishes'];
//The word render means to display something on the page.  
function renderTodoList(){
	let todoListHTML = ''
	const inputElement = document.querySelector('.js-input2');
	const item = inputElement.value;
	todoList2.push(item);
	for(let i=0; i<todoList2.length; i++){	
		todoListHTML += `<p>${todoList2[i]}</p>`;//generating the HTML in the js	
	}
	document.querySelector('.js-output').innerHTML = todoListHTML;
	inputElement.value = ''; 
}
renderTodoList();

