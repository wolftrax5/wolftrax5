import React from 'react';
import { render, screen } from '@testing-library/react';

import ThemeMock from '../../__moks__/ThemeMock';
import { ProjectCard, ProjectCardProps } from './index';

const baseProps: ProjectCardProps = {
  title: 'Demo Project',
  description: 'A sample description for the card.',
  tags: ['React', 'TypeScript'],
  repoUrl: 'https://github.com/wolftrax5/demo',
  liveUrl: 'https://demo.wolftrax.me',
};

const renderCard = (props: ProjectCardProps = baseProps) =>
  render(
    <ThemeMock>
      <ProjectCard {...props} />
    </ThemeMock>
  );

describe('<ProjectCard />', () => {
  test('renders title, description and tags', () => {
    renderCard();

    expect(
      screen.getByRole('heading', { name: 'Demo Project' })
    ).toBeInTheDocument();
    expect(
      screen.getByText('A sample description for the card.')
    ).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  test('renders GitHub and live links', () => {
    renderCard();

    expect(
      screen.getByRole('link', { name: 'Demo Project GitHub repository' })
    ).toHaveAttribute('href', baseProps.repoUrl);
    expect(
      screen.getByRole('link', { name: 'Demo Project live demo' })
    ).toHaveAttribute('href', baseProps.liveUrl);
  });

  test('omits live link when liveUrl is not provided', () => {
    renderCard({
      title: baseProps.title,
      description: baseProps.description,
      tags: baseProps.tags,
      repoUrl: baseProps.repoUrl,
    });

    expect(
      screen.getByRole('link', { name: 'Demo Project GitHub repository' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Demo Project live demo' })
    ).not.toBeInTheDocument();
  });

  test('renders preview image when previewSrc is set', () => {
    renderCard({
      ...baseProps,
      previewSrc: 'https://example.com/preview.png',
      previewAlt: 'Demo preview',
    });

    expect(screen.getByRole('img', { name: 'Demo preview' })).toHaveAttribute(
      'src',
      'https://example.com/preview.png'
    );
  });
});
