import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;

  .container-cards {
    padding: 20px;
    background-color: #fff;
    width: 100%;
    min-height: 200px;
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    .card {
      width: 200px;
      height: 200px;
      padding: 10px;
      margin: 5px;

      border-radius: 8px;
      background-color: var(--primary);

      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

      img {
        width: 100%;
        height: 100px;
        border-radius: 8px;
      }

      p {
        margin-top: 5px;
        color: #fff;
        font-weight: normal;
        text-align: center;
      }
    }
  }
`;
