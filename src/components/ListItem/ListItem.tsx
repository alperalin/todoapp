// Imports
import React from 'react';

// Styles
import './ListItem.css';

// Interfaces
import { Todo } from '../App/App';

interface ListItemPropsInterface {
	todo: Todo;
	onItemClick: (listItem: Todo) => void;
	onItemRemove: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		listItem: Todo
	) => void;
}

function ListItem({ todo, onItemClick, onItemRemove }: ListItemPropsInterface) {
	return (
		<li
			className={`listItem ${todo.done ? 'listItem--done' : ''}`}
			onClick={() => onItemClick(todo)}
		>
			<input
				type="checkbox"
				id="listItemCheckbox"
				className="listItem__checkbox"
				checked={todo.done}
				readOnly
			/>
			<span className="listItem__text">{todo.text}</span>
			<button
				className="list__remove-button"
				type="button"
				onClick={(event) => onItemRemove(event, todo)}
			>
				remove
			</button>
		</li>
	);
}

export default ListItem;
