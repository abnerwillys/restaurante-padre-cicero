import styled from 'styled-components';

export const HeaderStyle = styled.div`
  background-color: var(--primary);
  width: 100%;
  padding: 10px 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
              0px 4px 5px 0px rgba(0,0,0,0.14), 
              0px 1px 10px 0px rgba(0,0,0,0.12);

  > a {
    background-color: var(--bg-nav);
    width: 150px;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    color: #FFF;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
                0px 4px 5px 0px rgba(0,0,0,0.14), 
                0px 1px 10px 0px rgba(0,0,0,0.12);
    transition: 0.2s all;
  }

  > a:hover {
    transform: scale(1.05, 1.05);
  }
`;

export const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 span {
    font-size: 18px;
    letter-spacing: 1.2px;
  }

  h1 {
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFF;
    font-size: 26px;
    line-height: 22px;
  }  

  em {
    font-size: 12px;
    font-weight: normal;
    color: #FFF;
    opacity: 0.6;
    text-align: left;
  }

  img {
    height: 100px;
    margin-right: 10px;
  }
`;