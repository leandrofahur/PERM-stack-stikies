import { Note } from '../Note';

const NoteList: React.FC = (props: any) => {
  const notes = props.notes.map(() => {
    return <Note />;
  });

  return <div>{notes}</div>;
};

export { NoteList };
