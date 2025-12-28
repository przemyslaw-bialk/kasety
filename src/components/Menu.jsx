import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";

const StyledMenu = styled.ul`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  text-transform: uppercase;
  z-index: 300;

  @media (max-width: 600px) {
    justify-content: center;
  }

  h2 {
    font-size: 2.6rem;
    color: var(--color-grey-0);

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const StyledMenuItem = styled.li`
  a {
    color: var(--color-grey-0);
    font-size: 2rem;
  }

  a:hover {
    color: var(--color-brand-700);
  }
`;

const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-right: 12rem;

  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <h2>TapesTransfer.com</h2>
      <WrapperMenu>
        <StyledMenuItem>
          <a href="#services">services</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#services">about us</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <a href="#contact">contact</a>
        </StyledMenuItem>
      </WrapperMenu>
      <LanguageSwitcher />
    </StyledMenu>
  );
}

export default Menu;
