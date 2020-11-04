import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { TypingComponent } from '../../components/Typer';
import { HomeContainer, SectionInfo } from './styles';
import { ParticlesAnimation } from '../../components/Canvas/ParticlesAnimation';

export const Home = () => {
  return (
    <AppLayout>
      <HomeContainer className={'home_container'}>
        <SectionInfo className={'home_main_info'}>
          <h1>
            HI, I am Alejandro <br />& <br /> I am <br />
            <TypingComponent
              wordsToType={['DEVELOPER', 'FUNNY', 'FRIENDLY']}
              delay={600}
              size={72}
            />
          </h1>
        </SectionInfo>
        <section className='home_main_media'></section>
      </HomeContainer>
      <ParticlesAnimation number_particles={100} />
    </AppLayout>
  );
};
