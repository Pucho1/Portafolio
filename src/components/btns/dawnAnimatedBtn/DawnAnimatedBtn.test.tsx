import { expect, test } from 'vitest';
import  DawnAnimatedBtn  from './DawnAnimatedBtn';
import { render } from '@testing-library/react';

test('the btn to be in the document', async () => {
	const { getByText } = render( <DawnAnimatedBtn content={ 'btn'} className = 'class'/>)
	await expect(getByText('btn')).toBeInTheDocument();
});
