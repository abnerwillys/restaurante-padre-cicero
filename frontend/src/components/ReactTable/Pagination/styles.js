import styled from 'styled-components';

export const PaginationStyle = styled.div`
  width: 100%;
  padding-top: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
    display: flex;
    align-items: center;
  }

  div:nth-child(2) {
    justify-content: flex-end;
  }

  div.info-page {
    span {
      background-color: var(--bg-nav);
      height: 35px;
      border-radius: 8px;
      border: none;
      padding: 4px 8px 4px 16px;
      color: #fff;
      font-size: 14px;
      font-weight: normal;

      input {
        border-radius: 8px;
        border: none;
        padding: 3px 6px;
        width: 50px;
        outline: none;
        margin-left: 5px;
        background-color: #f2f2f2;
      }
    }

    select {
      background-color: var(--bg-nav);
      color: #fff;

      height: 35px;
      padding: 4px 16px;
      margin-left: 10px;

      border-radius: 8px;
      border: none;
      outline: none;

      font-size: 14px;
      font-weight: normal;

      cursor: pointer;
    }

    span,
    select {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
  }

  button {
    width: 35px;
    height: 35px;

    border-radius: 8px;
    border: none;
    background-color: var(--bg-nav);
    outline: none;

    margin: 0 5px;

    cursor: pointer;
    transition: 0.2s all;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background-color: var(--primary);
  }

  button[disabled] {
    background-color: var(--text-primary);
    cursor: default;
  }
`;
