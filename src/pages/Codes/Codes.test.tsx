import React from 'react';
import { render, screen } from '@testing-library/react';

import RouterMock from '../../__moks__/RouterMock';
import { Codes } from './index';
import { PROJECTS } from './data';

describe('<Codes />', () => {
  test('renders the latest projects', () => {
    render(
      <RouterMock>
        <Codes />
      </RouterMock>
    );

    expect(screen.getByRole('heading', { name: 'Codes' })).toBeInTheDocument();

    PROJECTS.forEach((project) => {
      expect(
        screen.getByRole('heading', { name: project.title })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('link', {
          name: `${project.title} GitHub repository`,
        })
      ).toHaveAttribute('href', project.repoUrl);
    });
  });
});
