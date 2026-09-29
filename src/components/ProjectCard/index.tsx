import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  ActionLink,
  Actions,
  Body,
  CanvasArt,
  Card,
  Description,
  Preview,
  PreviewImage,
  Tag,
  Tags,
  Title,
} from './styles';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  previewSrc?: string;
  previewAlt?: string;
}

const CanvasPreview: React.FC = () => (
  <CanvasArt viewBox='0 0 400 210' aria-hidden='true' focusable='false'>
    <rect width='400' height='210' fill='#16171a' />
    <path
      d='M28 148 C 70 92, 118 168, 168 110 S 248 48, 312 96'
      fill='none'
      stroke='#67e813'
      strokeWidth='7'
      strokeLinecap='round'
    />
    <path
      d='M46 62 C 110 28, 150 96, 214 72 S 300 18, 368 54'
      fill='none'
      stroke='#5b8cff'
      strokeWidth='5'
      strokeLinecap='round'
    />
    <path
      d='M22 178 C 96 154, 140 198, 220 164 S 310 132, 378 170'
      fill='none'
      stroke='#ff6b9d'
      strokeWidth='4'
      strokeLinecap='round'
    />
    <circle cx='312' cy='96' r='6' fill='#67e813' />
    <circle cx='368' cy='54' r='5' fill='#5b8cff' />
  </CanvasArt>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  repoUrl,
  liveUrl,
  previewSrc,
  previewAlt,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(previewSrc) && !imageFailed;

  return (
    <Card>
      <Preview>
        {showImage ? (
          <PreviewImage
            src={previewSrc}
            alt={previewAlt || `${title} preview`}
            loading='lazy'
            decoding='async'
            onError={() => setImageFailed(true)}
          />
        ) : (
          <CanvasPreview />
        )}
      </Preview>
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Tags aria-label='Tech stack'>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <IconContext.Provider value={{ size: '1em' }}>
          <Actions aria-label={`${title} links`}>
            <ActionLink
              href={repoUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${title} GitHub repository`}
            >
              <FaGithub aria-hidden='true' />
              Code
            </ActionLink>
            {liveUrl && (
              <ActionLink
                href={liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${title} live demo`}
              >
                <FaExternalLinkAlt aria-hidden='true' />
                Live
              </ActionLink>
            )}
          </Actions>
        </IconContext.Provider>
      </Body>
    </Card>
  );
};
