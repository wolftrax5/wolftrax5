import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { TypingComponent } from '../../components/Typer';
import { HomeContainer, SectionInfo } from './styles';
import { ParticlesAnimation } from '../../components/Canvas/ParticlesAnimation';

export const Home: React.FC = () => {
  return (
    <AppLayout>
      <HomeContainer className={'home_container'}>
        <SectionInfo className={'home_main_info'}>
          <h1>
            HI, I&#39;m Alejandro <br />&<br /> I&#39;m
            <br />
            <TypingComponent
              wordsToType={[
                'DEVELOPER',
                'CREATIVE',
                'PRECISE',
                'COLLABORATIVE',
                'INNOVATIVE',
                'PASSIONATE',
                'WOLFTRAX',
              ]}
              delay={600}
              size={72}
            />
          </h1>
        </SectionInfo>
        <section className='home_main_media'></section>
      </HomeContainer>
      <ParticlesAnimation number_particles={200} />
    </AppLayout>
  );
};
