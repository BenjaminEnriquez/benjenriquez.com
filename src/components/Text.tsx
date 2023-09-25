import React, { useState, useEffect } from 'react';

interface TextProps {
  element?: keyof JSX.IntrinsicElements;
  label: string;
  className?: string;
}

const wrapWordsInSpans = (
  text: string,
  wordsPerGroup: number,
  colors: string[],
  padding?: string,
) => {
  const words = text.split(' ');
  const wrappedWords = [];

  for (let i = 0; i < words.length; i += wordsPerGroup) {
    const group = words.slice(i, i + wordsPerGroup).join(' ');
    const color = colors[(i / wordsPerGroup) % colors.length];

    wrappedWords.push(
      <span
        key={i}
        className={`inline-block px-6 my-2 rounded-full mx-1 ${color} ${
          padding || ''
        }`}
      >
        {group}
      </span>,
    );
  }

  return wrappedWords;
};

const Text: React.FC<TextProps> = ({ element = 'p', label, className }) => {
  const ElementType = element;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const [colors, setColors] = useState([
    'bg-secondary-1',
    'bg-secondary-2',
    'bg-secondary-3',
  ]);
  const wrappedWords = wrapWordsInSpans(label, 3, colors);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= wrappedWords.length) {
          clearInterval(intervalId);
          setIsStopped(true);
        }
        return nextIndex % wrappedWords.length;
      });
    }, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, [wrappedWords.length, colors]);

  return (
    <ElementType className={className}>
      {isStopped ? wrappedWords : wrappedWords.slice(0, currentIndex + 1)}
    </ElementType>
  );
};

export default Text;
