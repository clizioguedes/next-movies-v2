import { Loading } from '@/components/structure/Loading';

import { render } from '@testing-library/react';

import { screen } from '@testing-library/dom';

describe('Loading Component', () => {
  test('render component', () => {
    render(<Loading />);

    const loading = screen.getByTestId('loading');

    expect(loading).toBeInTheDocument();
    expect(loading).toHaveStyle(`display: block`);
  });
});
