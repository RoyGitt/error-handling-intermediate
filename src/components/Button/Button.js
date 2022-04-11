import styled from "styled-components";

const Button = styled.button`
  margin-left: auto;
  color: #fff;
  background-color: #b721ff;
  font-weight: 700;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
