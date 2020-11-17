import styled from 'styled-components';

export const HeaderSystemStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  width: 100%;
  padding: 0 25px;
  background-color: #fff;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  h3 {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 svg {
    margin: 0 10px 2px 0;
  }

  .icon {
    width: 50px;
    height: 50px;

    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: var(--bg-nav);
  }

  .account-info {
    display: flex;
    align-items: center;
  }
  .account-info div a,
  .account-info div p {
    font-size: 16px;
    font-weight: normal;

    margin: 3px 0;

    text-align: left;
    text-decoration: none;
    color: var(--text-primary);
  }
`;