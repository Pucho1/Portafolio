import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DragableBtn from './DragableBtn';

test('the btn to be in the document', () => {
	render( <DragableBtn title={'dragableBtn'} onClick = { () => {} }/>)


	const buttonElement = screen.getByText(/dragableBtn/i);
	
	console.log('DragableBtn test', buttonElement);

	expect(buttonElement).toBeInTheDocument();
});
