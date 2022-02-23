// Imports
import React from 'react';

// Styles
import './List.css';

// Interfaces
import { Todo } from '../../App';

interface ListPropsInterface {
	list: Todo[];
	onItemClick: (
		event:
			| React.MouseEvent<HTMLLIElement, MouseEvent>
			| React.ChangeEvent<HTMLInputElement>,
		listItem: Todo
	) => void;
	onItemRemove: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		listItem: Todo
	) => void;
}

function List({ list, onItemClick, onItemRemove }: ListPropsInterface) {
	return (
		<ul className="list">
			{list.length > 0 &&
				list.map((listItem) => (
					<li
						className={`list__item${listItem.done ? ' list__item--done' : ''}`}
						key={listItem.id}
						onClick={(event) => onItemClick(event, listItem)}
					>
						<input
							type="checkbox"
							id="listItemCheckbox"
							onChange={(event) => onItemClick(event, listItem)}
							checked={listItem.done}
						/>
						<span>{listItem.text}</span>
						<button
							className="list__remove-button"
							type="button"
							onClick={(event) => onItemRemove(event, listItem)}
						>
							remove
						</button>
					</li>
				))}
		</ul>
	);
}

export default List;
