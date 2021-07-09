import { TextareaHTMLAttributes } from 'react';
import { Card, TextArea } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Note: React.FC = (props: TextAreaProps) => {
  return (
    <Card>
      <TextArea />
    </Card>
  );
};

export { Note };
