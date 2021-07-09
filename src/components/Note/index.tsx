import { useState, TextareaHTMLAttributes } from 'react';
import { Button } from '../Button';
import { Card, Menu, TextArea } from './styles';

import { CloseIcon } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Note: React.FC = (props: TextAreaProps) => {
  const [text, setText] = useState<string>('');

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setText(event.target.value);
  };

  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      drag
    >
      <Menu>
        <Button onClick={(event) => console.log('clicked!')}>
          <CloseIcon />
        </Button>
      </Menu>
      <TextArea onChange={(event) => handleText(event)} value={text} />
    </Card>
  );
};

export { Note };
