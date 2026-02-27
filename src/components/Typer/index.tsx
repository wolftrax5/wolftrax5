import React, { useState, useEffect, useRef } from 'react';
import { TextContainer, Cursor } from './styles';

type Phase = 'typing' | 'holding' | 'deleting';

interface TypingComponentProps {
  wordsToType?: string[];
  delay?: number;
  size?: number;
}

export const TypingComponent: React.FC<TypingComponentProps> = ({
  wordsToType = ['Hello', 'Typer'],
  delay = 90,
  size,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wordsRef = useRef(wordsToType);

  const currentWord = wordsRef.current[wordIndex];

  // Natural human-like variation: ±30% per keystroke
  const jitter = (ms: number) => ms * (0.7 + Math.random() * 0.6);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (phase === 'typing') {
      if (displayText.length < currentWord.length) {
        // Type one character at a time with slight speed variation
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, jitter(delay));
      } else {
        // Word is fully typed — hold so the user can read it
        timeoutRef.current = setTimeout(() => setPhase('holding'), 1500);
      }
    } else if (phase === 'holding') {
      // Brief extra beat before erasing begins
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 300);
    } else {
      if (displayText.length > 0) {
        // Delete faster than typing — feels intentional, not sluggish
        timeoutRef.current = setTimeout(
          () => {
            setDisplayText((prev) => prev.slice(0, -1));
          },
          jitter(delay * 0.4)
        );
      } else {
        // All erased — short pause then move to next word
        timeoutRef.current = setTimeout(() => {
          setWordIndex((i) => (i + 1) % wordsRef.current.length);
          setPhase('typing');
        }, 400);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, phase, wordIndex, delay, currentWord]);

  return (
    <TextContainer size={size}>
      {`{`}
      {displayText}
      <Cursor>_</Cursor>
      {`}`}
    </TextContainer>
  );
};
