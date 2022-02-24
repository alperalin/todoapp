// Imports
import React, { useState } from 'react';

// Components
import Form from '../Form/Form';
import List from '../List/List';
import ListItem from '../ListItem/ListItem';

// Styles
import './App.css';

// interfaces
export interface Todo {
	id: number;
	text: string;
	done: boolean;
}

// App Component
function App() {
	// State
	const [todoList, setTodoList] = useState<Todo[]>([]);

	// Functions
	function addTodo(todoText: string): void {
		setTodoList((prevState) => [
			...prevState,
			{ id: Math.round(Math.random() * 1000), text: todoText, done: false },
		]);
	}

	function toggleTodo(todo: Todo): void {
		todo.done = !todo.done;
		setTodoList([...todoList]);
	}

	function removeTodo(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		todo: Todo
	): void {
		event.stopPropagation();
		const itemIndex = todoList.indexOf(todo);

		if (itemIndex !== -1) {
			todoList.splice(itemIndex, 1);
			setTodoList([...todoList]);
		}
	}

	function completeAllTodos(todos: Todo[]): void {
		const completedTodos = todos.map((todo) => ({
			...todo,
			done: true,
		}));
		setTodoList([...completedTodos]);
	}

	// Element
	return (
		<div className="App">
			<h1 className="App__title">Todo List</h1>
			<Form onSubmit={addTodo} />
			<List>
				{todoList.length > 0 &&
					todoList.map((todo) => (
						<ListItem
							key={todo.id}
							todo={todo}
							onItemClick={toggleTodo}
							onItemRemove={removeTodo}
						/>
					))}
			</List>

			{!todoList.every((todo) => todo.done) && (
				<button
					className="App__complete-button"
					onClick={() => completeAllTodos(todoList)}
				>
					Complete All
				</button>
			)}
		</div>
	);
}

export default App;
