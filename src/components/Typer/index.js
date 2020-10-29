import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

const typeReducer = (state, action) => {
  switch (action.type) {
    case 'TYPE':
      if (state.currentIndex < state.currentTextToType.length) {
        return {
          ...state,
          text: state.text + state.currentTextToType[state.currentIndex],
          currentIndex: state.currentIndex + 1,
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

  return { text: chartsState.text, typeDone: chartsState.typeDone, updateWord };
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
function useTypeTexts(
  words = ['hello', 'word'],
  waitDalay = 400,
  typeDelay = 200,
  loop = true
) {
  const [wordsState, dispatchWord] = useReducer(wordReducer, {
    words,
    currentIndex: 0,
    currentWord: words[0],
    endWords: false,
  });

  const { text, typeDone, updateWord } = useTypeText(
    wordsState.currentWord,
    typeDelay
  );

  const typeNewWord = () => {
    if (!wordsState.endWords) {
      updateWord(wordsState.currentWord);
    } else if (loop) {
      dispatchWord({ type: 'RESTART_WORD' });
    }
  };
  const canChaneWord = () => {
    if (typeDone) {
      dispatchWord({ type: 'NEXT_WORD' });
    }
  };

  useEffect(typeNewWord, [
    wordsState.currentWord,
    loop,
    wordsState.endWords,
    updateWord,
  ]);
  useEffect(canChaneWord, [typeDone]);

  return { text };
}

export const TypingComponent = ({
  textToType = 'Hello wolftrax',
  delay = 200,
}) => {
  const { text } = useTypeText('Hello');

  return <span>{text}</span>;
};

TypingComponent.propTypes = {
  delay: PropTypes.number,
  textToType: PropTypes.string,
};
