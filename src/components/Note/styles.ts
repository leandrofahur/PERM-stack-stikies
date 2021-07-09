import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Close } from '../../styles/Icons';

export const Card = styled(motion.div)`
  height: 224px;
  width: 224px;
  box-shadow: 3px 5px 8px var(--light-gray);
`;

export const Menu = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  height: 25px;
  width: 100%px;
  background-color: var(--dark-yellow);
  border-bottom: 1px solid var(--light-gray);

  &:hover {
    cursor: grabbing;
  }
`;

export const TextArea = styled.textarea`
  height: 199px;
  width: 100%;
  padding: 15px 8px;
  outline: none;
  background-color: var(--yellow);
`;

export const CloseIcon = styled(Close)`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  cursor: pointer;
  fill: var(--gray);

  &:hover,
  &:active {
    fill: var(--light-gray);
  }
`;
