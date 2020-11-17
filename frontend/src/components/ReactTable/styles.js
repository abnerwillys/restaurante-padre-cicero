import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  margin-bottom: 30px;

  div.flex {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 20px;
  }

  div.container {
    background-color: #FFF;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  
  table {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 4px;
  }

  table tr {
    background-color: #fcfcfc;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th,
  table td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
  }

  table td {
    font-size: 14px;
    font-weight: normal;
  }

  table th:last-child,
  table td:last-child {
    width: 50px;
  }

  table td:last-child {
    padding: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    cursor: pointer;
  }

  table th {
    background-color: var(--primary);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  table .icon {
    margin-left: 15px;
  }
`;
