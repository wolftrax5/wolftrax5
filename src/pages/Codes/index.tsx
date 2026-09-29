import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { ProjectCard } from '../../components/ProjectCard';
import { PROJECTS } from './data';
import { CodesContainer, Header, ProjectGrid, Subtitle, Title } from './styles';

export const Codes: React.FC = () => (
  <AppLayout>
    <CodesContainer>
      <Header>
        <Title>Codes</Title>
        <Subtitle>
          Recent experiments and side projects — generated graphics, live
          canvases, and <span>crafted web apps</span>.
        </Subtitle>
      </Header>
      <ProjectGrid>
        {PROJECTS.map(({ id, ...project }) => (
          <ProjectCard key={id} {...project} />
        ))}
      </ProjectGrid>
    </CodesContainer>
  </AppLayout>
);
