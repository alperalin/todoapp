// Imports
import React, { useState } from 'react';

// Styles
import './Form.css';

// Interfaces
interface FormPropInterface {
	onSubmit: (todoText: string) => void;
}

// Element
function Form({ onSubmit }: FormPropInterface) {
	// State
	const [formState, setFormState] = useState<string>('');

	// Functions
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setFormState(event.currentTarget.value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		onSubmit(formState);
		setFormState('');
	}

	// Element
	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				className="form__input"
				id="formTextInput"
				type="text"
				placeholder="add a todo"
				onChange={handleChange}
				value={formState}
				autoComplete="off"
				required
			/>
			<button className="form__submit" type="submit">
				Add Todo
			</button>
		</form>
	);
}

export default Form;
