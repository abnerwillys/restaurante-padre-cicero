import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;

  form {
    padding: 20px;
    background-color: #fff;
    width: 100%;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  form fieldset {
    border: none;
    padding: 0;

    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 10px;
  }

  form fieldset div:first-child {
    grid-column: 1 / span 2;
  }
`;
