import React from 'react';

interface TextProps {
  element?: keyof JSX.IntrinsicElements;
  label: string;
  className?: string;
}

const wrapWordsInSpans = (
  text: string,
  wordsPerGroup: number,
  padding?: string,
) => {
  const words = text.split(' ');
  const wrappedWords = [];
  const colors = ['bg-secondary-1', 'bg-secondary-2', 'bg-secondary-3'];

  for (let i = 0; i < words.length; i += wordsPerGroup) {
    const group = words.slice(i, i + wordsPerGroup).join(' ');

    // Create an array of colors with more occurrences of 'bg-primary-1'
    const weightedColors = [
      'bg-secondary-1',
      'bg-secondary-1',
      ...colors.slice(1), // Exclude 'bg-primary-1' from the remaining colors
    ];

    // Randomly select a color from the weighted array
    const randomColor =
      weightedColors[Math.floor(Math.random() * weightedColors.length)];

    wrappedWords.push(
      `<span class='inline-block px-6 my-2 rounded-full ${randomColor}'>${group}</span>`,
    );
  }

  return wrappedWords.join(' ');
};

const Text: React.FC<TextProps> = ({ element = 'p', label, className }) => {
  const ElementType = element;

  return (
    <ElementType
      className={className}
      dangerouslySetInnerHTML={{ __html: wrapWordsInSpans(label, 3) }}
    ></ElementType>
  );
};

export default Text;
