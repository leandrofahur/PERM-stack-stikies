import { TextareaHTMLAttributes } from 'react';
import { Button } from '../Button';
import { Card, Menu, TextArea } from './styles';

import { CloseIcon } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Note: React.FC = (props: TextAreaProps) => {
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      drag
    >
      <Menu>
        <Button>
          <CloseIcon />
        </Button>
      </Menu>
      <TextArea />
    </Card>
  );
};

export { Note };
