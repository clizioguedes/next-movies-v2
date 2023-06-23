import { HorizontalList } from '@/components/structure/HorizontalList';

import { render, screen } from '@testing-library/react';

describe('Header Component', () => {
  test('render component', () => {
    const titleMock = 'Filmes mais aguardados';

    render(
      <HorizontalList title={titleMock}>
        <div>Mock Horizontal List Childen</div>
      </HorizontalList>
    );

    expect(screen.getByText('Filmes mais aguardados')).toBeInTheDocument();
    expect(screen.getByTestId('horizontal-list')).toBeVisible();
  });
});
