import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  test('render component', () => {
    render(<Home />);

    expect(screen.getByText('Hello World')).toBeInTheDocument;
  });
});
