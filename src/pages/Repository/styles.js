import styled from 'styled-components';

export const Owner = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #7159c1;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 15px;
  }

  h1 {
    margin-top: 10px;
    font-size: 30px;
  }

  p {
    color: #7a7a7a;
    margin-top: 10px;
    line-height: 1.4;
  }
`;

export const Issues = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    border: 1px solid #ddd;
    margin: 10px 0;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;

    img {
      width: 40px;
      border-radius: 50%;
    }

    div {
      padding-left: 15px;
    }

    a {
      text-decoration: none;
      line-height: 24px;
      color: #111;

      &:hover {
        color: #7159c1;
        transition: 0.2s;
      }
    }

    p {
      margin-top: 4px;
      color: #aaa;
    }
  }
`;

export const Label = styled.span`
  font-weight: bold;
  background: ${props => `#${props.data.color}`};
  margin-left: 10px;
  padding: 2px 5px;
`;
