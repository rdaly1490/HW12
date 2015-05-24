$(document).on('ready', start);

function start(eventObj) {

	var $toDoInput = $('#to-do-input');
	var $todoButton = $('#add-to-do');
	var $todoForm = $('#to-do-form');
	var $list = $('#list');

	var list = [];

	$todoForm.on('submit', addTodo);
	
	function addTodo(eventObj) {
		eventObj.preventDefault();
		list.push($toDoInput.val());
		$toDoInput.val('');
		var listHtml = render(list);
		$list.html(listHtml);
	}

	function render(todoList) {
		return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
	}

	$todoForm.style.backgroundColor = "blue";



}