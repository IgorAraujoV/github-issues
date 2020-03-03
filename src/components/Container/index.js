import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 20px;
    }
  }
`;

export default Container;
