import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { AppLayout } from '../../components/AppLayout';
import { MapBackground } from './MapBackground';
import {
  PROFILE,
  calculateAge,
  MAIN_SKILLS,
  SOCIALS,
  SocialLink as SocialLinkData,
} from './data';
import {
  Bio,
  InfoBlock,
  LocationTag,
  Meta,
  Name,
  Photo,
  ProfileCard,
  ProfileContainer,
  Role,
  SkillChip,
  SkillsRow,
  SocialLink,
  SocialRow,
} from './styles';

const socialIconFor = (id: string) => {
  switch (id) {
    case 'github':
      return <FaGithub />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'x':
      return <FaTwitter />;
    case 'email':
      return <FaEnvelope />;
    default:
      return null;
  }
};

const isExternal = (social: SocialLinkData) => social.id !== 'email';

export const Profile: React.FC = () => {
  const age = calculateAge();

  return (
    <AppLayout>
      <ProfileContainer>
        <MapBackground />
        <ProfileCard>
          <Photo
            src={PROFILE.photo}
            alt={`Portrait of ${PROFILE.name}`}
            loading='lazy'
          />
          <InfoBlock>
            <LocationTag>
              <span className='dot' />
              {PROFILE.location}
            </LocationTag>
            <Name>{PROFILE.name}</Name>
            <Role>
              {PROFILE.role} · {PROFILE.focus}
            </Role>
            <Meta>
              <span className='age'>{age}</span> years old
            </Meta>
            <Bio>{PROFILE.bio}</Bio>
            <SkillsRow aria-label='Skills'>
              {MAIN_SKILLS.map((skill) => (
                <SkillChip key={skill.name} $learning={skill.learning}>
                  {skill.name}
                  {skill.learning && <small>learning</small>}
                </SkillChip>
              ))}
            </SkillsRow>
            <IconContext.Provider value={{ size: '1.2em' }}>
              <SocialRow aria-label='Social links'>
                {SOCIALS.map((social) => (
                  <SocialLink
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    {...(isExternal(social)
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {socialIconFor(social.id)}
                  </SocialLink>
                ))}
              </SocialRow>
            </IconContext.Provider>
          </InfoBlock>
        </ProfileCard>
      </ProfileContainer>
    </AppLayout>
  );
};
