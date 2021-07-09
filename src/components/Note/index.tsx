import { motion } from 'framer-motion';

import { TextareaHTMLAttributes } from 'react';
import { Card, Menu, TextArea } from './styles';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Note: React.FC = (props: TextAreaProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      drag
    >
      <Card>
        <Menu />
        <TextArea />
      </Card>
    </motion.div>
  );
};

export { Note };
