import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  
  form {
    padding: 20px;
    background-color: #FFF;
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

    display: flex;
    flex-direction: column;
  }

  form .info {
    display: grid;
    grid-template-columns: 15rem 1fr 15rem;
    grid-gap: 10px;
  } 

  form .sale-products .product-item {
    display: grid;
    grid-template-columns: 1fr 12rem 12rem 12rem;
    grid-gap: 10px;
  } 

  form fieldset > button {
    font-size: 14px;
    align-self: flex-end;
    min-width: 175px;
    height: 40px;

    border-radius: 8px;
    border: none;
    background-color: var(--bg-nav);

    cursor: pointer;
    transition: 0.2s all;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    svg {
      margin-right: 5px;
    }
  }

  form fieldset > button:hover {
    transform: scale(1.05, 1.05);
    background-color: var(--primary);
  }

  form .footer-form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
  }

  .actions {
    display: flex;
    align-self: flex-end;
  }

  .reset-form {
    width: 40px;
    height: 40px;
    margin-right: 10px;

    border-radius: 8px;
    border: none;
    background-color: var(--primary);
    outline: none;

    cursor: pointer;
    transition: 0.2s all;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reset-form:hover {
    transform: scale(1.05, 1.05);
  }
`;