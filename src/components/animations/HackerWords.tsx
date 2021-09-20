import React, { ReactElement, useState, useEffect } from 'react';

interface Props {
  Word: string
}

const HackerWords: React.FC<Props> = ({ Word }): ReactElement => {
  const [word, setWord ] = useState(Word)

  let interv = undefined;
  let canChange = false
  let globalCount = 0
  let count = 0
  let INITIAL_WORD = Word;
  let isGoing= true;

  const rand = (minimum:number, maximum:number) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  function getRandomLetter() {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return alphabet[rand(0,alphabet.length - 1)]
  }

  function getRandomWord(_word:string) {
    let text = _word
    
    let finalWord = ''
    for (let i=0;i<text.length;i++) {
      finalWord += text[i] == ' ' ? ' ' : getRandomLetter()
    }
   
    return finalWord
  }

  const init = () => {
    //if(isGoing) return;
    isGoing = true;
    const randomWord = getRandomWord(word)
    setWord(randomWord)
    let interv = setInterval(function() {
     let finalWord = ''
     for (let x=0;x<INITIAL_WORD.length;x++) {
      if(x <= count && canChange) {
       finalWord += INITIAL_WORD[x]
      } else {
       finalWord += getRandomLetter()
      }
     }
     setWord(finalWord)
     if(canChange) {
       count++
     }
     if(globalCount >= 20) {
      canChange = true
     }
     if(count>=INITIAL_WORD.length) {
      clearInterval(interv)
      count = 0
      canChange = false
      globalCount = 0
      isGoing = false
     }
     globalCount++
    },50)
  }
  return (
    <span onMouseEnter={init}>
      {word}
    </span>
  );
};

export default HackerWords;