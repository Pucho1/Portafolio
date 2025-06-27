import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MagneticBtn from './MagneticBtn';

test('the btn to be in the document', () => {
	render( <MagneticBtn >
		<button className="btn" data-testid="dragableBtn">
			dragableBtn
		</button>
	</MagneticBtn>)


	const buttonElement = screen.getByText(/dragableBtn/i);

	expect(buttonElement).toBeInTheDocument();
});
