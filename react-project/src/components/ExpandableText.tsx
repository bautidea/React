import { useState } from 'react';

interface Props {
  children: string;
  amountOfCharacters?: number;
}
const ExpandableText = ({ children, amountOfCharacters = 100 }: Props) => {
  // If we are getting a shorter text than amountOfCharacters.
  if (children.length <= amountOfCharacters) return <p>{children}</p>;

  const [expanded, setExpanded] = useState(false);

  const text = expanded
    ? children
    : children.substring(0, amountOfCharacters) + '...';

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <p>
        {text}{' '}
        <button onClick={handleClick}>{expanded ? 'Less' : 'More'}</button>
      </p>
    </>
  );
};

export default ExpandableText;
