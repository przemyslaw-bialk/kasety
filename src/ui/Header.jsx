import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.h2`
  font-size: 6rem;
  color: var(--color-brand-950);
  margin-top: 8rem;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
