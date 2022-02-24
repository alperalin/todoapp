// Imports
import React from 'react';

// Styles
import './List.css';

// Interface
interface ListProps {
	children: JSX.Element[] | boolean;
}

function List({ children }: ListProps): JSX.Element {
	return <ul className="list">{children}</ul>;
}

export default List;
