import { expect, test } from 'vitest';
import  DawnAnimatedBtn  from './DawnAnimatedBtn';
import { render } from '@testing-library/react';

test('the btn to be in the document', () => {
	const { getByText } = render( <DawnAnimatedBtn content={ 'btn'} className = 'class'/>)
	
	expect(getByText('btn')).toBeInTheDocument();
});
