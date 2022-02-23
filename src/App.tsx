// Imports
import React, { useEffect, useState } from 'react';

// Components
import Form from './components/Form/Form';
import List from './components/List/List';

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

	function toggleTodo(
		event:
			| React.MouseEvent<HTMLLIElement, MouseEvent>
			| React.ChangeEvent<HTMLInputElement>,
		todoItem: Todo
	): void {
		console.dir(event.currentTarget, event.target);
		if (
			event.currentTarget === event.target ||
			event.currentTarget.children[1] === event.target
		) {
			todoItem.done = !todoItem.done;
			setTodoList([...todoList]);
		}
	}

	function removeTodo(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		todo: Todo
	): void {
		if (event.currentTarget === event.target) {
			const itemIndex = todoList.indexOf(todo);

			if (itemIndex !== -1) {
				todoList.splice(itemIndex, 1);
				setTodoList([...todoList]);
			}
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
			<List
				list={todoList}
				onItemClick={toggleTodo}
				onItemRemove={removeTodo}
			/>
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
