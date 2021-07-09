import styled from 'styled-components';

export const Card = styled.div`
  height: 224px;
  width: 224px;
  box-shadow: 3px 5px 8px var(--light-gray);
`;

export const Menu = styled.div`
  height: 15px;
  width: 100%px;
  background-color: var(--dark-yellow);
  border-bottom: 1px solid var(--light-gray);

  :hover {
    cursor: grabbing;
  }
`;

export const TextArea = styled.textarea`
  height: 209px;
  width: 100%;
  padding: 15px 8px;
  outline: none;
  background-color: var(--yellow);
`;
