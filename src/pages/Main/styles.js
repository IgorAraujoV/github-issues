import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const InputRepo = styled.input`
  border: ${props => (props.error ? css`1px solid red` : css`1px solid #eee`)};
  border-radius: 4px;
  padding: 10px 15px;
  flex: 1;
  font-size: 16px;
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border-radius: 2px;
  border: 0;

  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-left: 10px;
  justify-content: center;

  &:hover {
    background: #4b3596;
    transition: 0.5s;
  }

  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    border: 1px solid #ddd;
    margin: 7px 0;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;

    a {
      text-decoration: none;
      border: 1px solid #7159c1;
      padding: 8px;
      color: #7159c1;
      font-size: 12px;
      border-radius: 4px;

      &:hover {
        color: white;
        background: #7159c1;
        transition: 0.2s;
      }
    }
  }
`;
