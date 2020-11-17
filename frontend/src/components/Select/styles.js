import styled from 'styled-components';

export const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  position: relative;

  label {
    margin-bottom: 10px;
  }

  select {
    height: 45px;
    border-radius: 4px;
    border: 1px solid var(--color-line-in-white);
    outline: none;
    padding: 8px 16px;
    font-size: 16px;
  }

  &:focus-within::after {
    content: "";

    width: 4px;
    border-radius: 4px 0 0 4px;
    background: var(--primary);

    position: absolute;
    top: 32px;
    left: 0;
    bottom: 0;
  }
`;