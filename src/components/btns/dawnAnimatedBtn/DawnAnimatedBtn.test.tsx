import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import  DawnAnimatedBtn  from './DawnAnimatedBtn';

test('the btn to be in the document', async () => {
	const { getByText } = render( <DawnAnimatedBtn content={ 'btn'} className = 'class'/>)
	await expect(getByText('btn')).toBeInTheDocument();
});
