import React from 'react';

import css from './Keys.module.css';

function Key({
  letter,
  handleClick,
  correctLetters,
  presentLetters,
  usedLetters,
}) {
  const getClassToUse = (key) => {
    const letterLowered = key.toLowerCase();
    if (correctLetters.has(letterLowered)) {
      return css.correct;
    }
    if (presentLetters.has(letterLowered)) {
      return css.present;
    }
    if (usedLetters.has(letterLowered)) {
      return css.absent;
    }

    return '';
  };

  return (
    <button
      className={`${css.key} ${getClassToUse(letter)}`}
      key={letter}
      onClick={handleClick}
      type="button"
    >
      {letter}
    </button>
  );
}

export default Key;
