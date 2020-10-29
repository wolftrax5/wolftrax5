import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { TextContainer, Cursor } from './styles';

const typeReducer = (state, action) => {
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
      break;
    default:
      throw new Error('No Action');
      break;
  }
};
function useTypeText(textToType = 'Hello useTypeText', delay = 200) {
  const [chartsState, dispatchChart] = useReducer(typeReducer, {
    text: '',
    currentTextToType: textToType,
    currentIndex: 0,
    typingEnd: false,
    typeDone: false,
  });
  const updateWord = (word) =>
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
const wordReducer = (state, action) => {
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
      break;
    default:
      throw new Error('No Action');
      break;
  }
};
function useTypeTexts(words = ['hello', 'word'], typeDelay = 200) {
  const [wordsState, dispatchWord] = useReducer(wordReducer, {
    words,
    currentIndex: 0,
    currentWord: words[0],
    endWords: false,
  });

  const { text, typeDone } = useTypeText(wordsState.currentWord, typeDelay);

  const canChaneWord = () => {
    if (typeDone && !wordsState.endWords) {
      dispatchWord({ type: 'NEXT_WORD' });
    }
  };

  useEffect(canChaneWord, [typeDone, wordsState.endWords]);

  return { text };
}

export const TypingComponent = ({
  wordsToType = 'Hello wolftrax',
  delay = 1000,
}) => {
  const { text } = useTypeTexts(['WORD', 'HELL'], delay);

  return (
    <TextContainer>
      {text}
      <Cursor>_</Cursor>
    </TextContainer>
  );
};

TypingComponent.propTypes = {
  delay: PropTypes.number,
  wordsToType: PropTypes.arrayOf(PropTypes.string),
};
