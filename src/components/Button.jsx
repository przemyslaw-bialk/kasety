import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.a`
  background: #ffcd05;
  color: var(--color-text);
  border: none;
  font-size: 3rem;
  padding: 1rem 5rem;
  font-weight: 400;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 150;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  &:hover {
    background: #e6b905;
  }
`;

function CtaButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

CtaButton.propTypes = {
  children: PropTypes.any,
};

export default CtaButton;
