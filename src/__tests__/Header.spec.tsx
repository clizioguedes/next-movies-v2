import { Header } from '@/components/structure/Header';

import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  test('render component', () => {
    render(<Header />);

    expect(screen.getByTestId('logo')).toBeInTheDocument;
  });
});
