import React, { useState, useEffect, useReducer } from 'react';
import { TextContainer, Cursor } from './styles';

interface TypeState {
  text: string;
  currentTextToType: string;
  currentIndex: number;
  typingEnd: boolean;
  typeDone: boolean;
}

type TypeAction =
  | { type: 'TYPE' }
  | { type: 'DELETE' }
  | { type: 'RESTART'; payload: { word: string } };

const typeReducer = (state: TypeState, action: TypeAction): TypeState => {
  switch (action.type) {
    case 'TYPE':
      if (state.currentIndex < state.currentTextToType.length) {
        return {
          ...state,
          currentIndex: state.currentIndex + 1,
          text: state.text + state.currentTextToType[state.currentIndex],
        };
      }
      return {
        ...state,
        typingEnd: true,
      };
    case 'DELETE':
      if (state.currentIndex > 0) {
        return {
          ...state,
          text: state.text.substr(0, state.currentIndex - 1),
          currentIndex: state.currentIndex - 1,
        };
      }
      return {
        ...state,
        typeDone: true,
        typingEnd: false,
      };
    case 'RESTART':
      return {
        text: '',
        currentTextToType: action.payload.word,
        currentIndex: 0,
        typingEnd: false,
        typeDone: false,
      };
    default:
      throw new Error('No Action');
  }
};

function useTypeText(
  textToType: string = 'Hello useTypeText',
  delay: number = 200
) {
  const [chartsState, dispatchChart] = useReducer(typeReducer, {
    text: '',
    currentTextToType: textToType,
    currentIndex: 0,
    typingEnd: false,
    typeDone: false,
  });

  const updateWord = (word: string) =>
    dispatchChart({ type: 'RESTART', payload: { word } });

  const typeText = () => {
    dispatchChart({ type: 'TYPE' });
  };

  const deleteType = () => {
    dispatchChart({ type: 'DELETE' });
  };

  useEffect(() => {
    // at new word to type reset all
    updateWord(textToType);
  }, [textToType]);

  // typing for current word, if the word is end start deleting
  const doType = () => {
    setTimeout(!chartsState.typingEnd ? typeText : deleteType, delay);
  };

  useEffect(doType, [
    chartsState.currentIndex,
    chartsState.typingEnd,
    chartsState.typeDone,
    delay,
  ]);

  return { text: chartsState.text, typeDone: chartsState.typeDone };
}

interface WordState {
  words: string[];
  currentIndex: number;
  currentWord: string;
  endWords: boolean;
}

type WordAction = { type: 'NEXT_WORD' } | { type: 'RESTART_WORD' };

const wordReducer = (state: WordState, action: WordAction): WordState => {
  switch (action.type) {
    case 'NEXT_WORD':
      if (state.currentIndex < state.words.length - 1) {
        return {
          ...state,
          currentIndex: state.currentIndex + 1,
          currentWord: state.words[state.currentIndex + 1],
        };
      }
      return {
        ...state,
        currentIndex: 0,
        currentWord: state.words[0],
        endWords: true,
      };
    case 'RESTART_WORD':
      return {
        ...state,
        currentIndex: 0,
        currentWord: state.words[0],
        endWords: false,
      };
    default:
      throw new Error('No Action');
  }
};

function useTypeTexts(
  words: string[] = ['hello', 'word'],
  typeDelay: number = 200
) {
  const [wordsState, dispatchWord] = useReducer(wordReducer, {
    words,
    currentIndex: 0,
    currentWord: words[0],
    endWords: false,
  });

  const { text, typeDone } = useTypeText(wordsState.currentWord, typeDelay);

  const canChaneWord = () => {
    if (typeDone) {
      dispatchWord({ type: 'NEXT_WORD' });
    }
  };

  useEffect(canChaneWord, [typeDone]);

  return { text };
}

interface TypingComponentProps {
  wordsToType?: string[];
  delay?: number;
  size?: number;
}

export const TypingComponent: React.FC<TypingComponentProps> = ({
  wordsToType = ['Hello', 'Typer'],
  delay = 1000,
  size,
}) => {
  const { text } = useTypeTexts(wordsToType, delay);

  return (
    <TextContainer size={size}>
      {`{`}
      {text}
      <Cursor>_</Cursor>
      {`}`}
    </TextContainer>
  );
};
