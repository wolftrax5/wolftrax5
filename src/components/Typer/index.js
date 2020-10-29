import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useTypeText(textToType = 'Hello useTypeText', delay = 200) {
  const [text, setText] = useState('');
  const [currentTextToType, setTextToType] = useState(textToType);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [atWordEnd, setAtWordEnd] = useState(false);
  const [nextType, setNextype] = useState(false);

  const updateWord = (word) => setTextToType(word);

  const typeText = () => {
    if (currentIndex < currentTextToType.length) {
      setText(text + currentTextToType[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    } else {
      setAtWordEnd(true);
    }
  };
  const deleteType = () => {
    if (currentIndex > 0) {
      setText(text.substr(0, currentIndex - 1));
      setCurrentIndex(currentIndex - 1);
    } else {
      setNextype(true);
      setAtWordEnd(false);
    }
  };
  useEffect(() => {
    // at new word to type reset all
    setText('');
    setAtWordEnd(false);
    setNextype(false);
    setCurrentIndex(0);
  }, [textToType, currentTextToType]);
  // typing loop. for current word

  useEffect(() => {
    if (!nextType) {
      setTimeout(!atWordEnd ? typeText : deleteType, delay);
    }

    // eslint-disable-next-line
  }, [currentIndex, atWordEnd, nextType]);

  return [text, nextType, updateWord];
}
function useTypeTexts(
  words = ['hello', 'word'],
  waitDalay = 400,
  typeDelay = 200,
  loop = true
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentIndex]);
  const [text, nextType, updateWord] = useTypeText(currentWord, typeDelay);
  useEffect(() => {
    if (currentIndex < words.length) {
      setCurrentWord(words[currentIndex]);
      updateWord(words[currentIndex]);
      console.log(`Siguiente palabra ${nextType} ${currentIndex}`);
    } else if (loop) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (nextType) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [nextType]);

  return [text];
}

export const TypingComponent = ({
  textToType = 'Hello wolftrax',
  delay = 200,
}) => {
  const [text] = useTypeTexts(['hello', 'WOLFTRAX']);

  return <span>{text}</span>;
};

TypingComponent.propTypes = {
  delay: PropTypes.number,
  textToType: PropTypes.string,
};
