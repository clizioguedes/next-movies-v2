import { EmptyData } from '@/components/structure/EmptyData';

import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  test('render component', () => {
    render(<EmptyData />);

    expect(screen.getByText('Sem favoritos cadastrados')).toBeInTheDocument();
  });
});
