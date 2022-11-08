import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import '@testing-library/jest-dom';

import Code from './Code';

describe('<Code />', () => {
  it('should show code editor', async () => {
    render(<Code/>);
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
    screen.getByText(/let's write some broken code/);
  });
});