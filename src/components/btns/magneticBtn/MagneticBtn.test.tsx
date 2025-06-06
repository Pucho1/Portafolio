import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DragableBtn from './MagneticBtn';

test('the btn to be in the document', () => {
	render( <DragableBtn title={'dragableBtn'} onClick = { () => {} }/>)


	const buttonElement = screen.getByText(/dragableBtn/i);

	expect(buttonElement).toBeInTheDocument();
});
