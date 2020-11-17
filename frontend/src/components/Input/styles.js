import styled from 'styled-components';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 0;
  width: 100%;

  position: relative;

  label {
    margin-bottom: 10px;
  }

  input {
    height: 45px;
    border-radius: 4px;
    border: 1px solid var(--color-line-in-white);
    outline: none;
    padding: 8px 16px;
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