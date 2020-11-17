import styled from 'styled-components';

export const NavStyle = styled.div`
  display: flex;

  aside {
    width: 250px;
    height: 100%;
    display: grid;
    grid-template: auto 1fr/ 1fr;

    background-color: var(--bg-nav);
  }

  aside .logo {
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;

    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 
                0px 4px 5px 0px rgba(0,0,0,0.14), 
                0px 1px 10px 0px rgba(0,0,0,0.12);
  }

  aside .logo img {
    height: 60px;
    margin-right: 10px;
  }

  aside .logo h1 span {
    font-size: 14px;
    letter-spacing: 1.2px;
  }

  aside .logo h1 {
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFF;
    font-size: 18px;
    line-height: 20px;
  }

  aside p {
    display: flex;
    align-items: center;
    
    padding: 10px 0 10px 17px;
    margin: 0;
    font-weight: bold;
  }

  aside p svg {
    margin-right: 10px;
  }

  aside .links {
    width: 100%;
    height: 100%;

    padding-top: 20px;
    color: #FFF;
  }

  aside .links a {
    width: 100%;
    height: 45px;

    display: flex;
    align-items: center;

    padding-left: 45px; 
    text-decoration: none;
    color: #FFF;
    font-weight: 400;
    border-left: 4px transparent;

    transition: 0.2s all;
  }

  aside .links a:hover,
  aside .links a.active {
    background-color: var(--primary);
    border-left: 4px solid #FFF;
  }

  aside .links .products,
  aside .links .sales,
  aside .links .settings {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
`;