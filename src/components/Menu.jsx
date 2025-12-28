import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  text-transform: uppercase;
  z-index: 300;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem;
  }

  h2 {
    font-size: 2.6rem;
    color: var(--color-grey-0);

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const WrapperMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledMenuItem = styled.li`
  a {
    color: var(--color-grey-0);
    font-size: 2rem;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--color-brand-700);
  }
`;

const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HamburgerIcon = styled(MdOutlineMenu)`
  display: none;
  font-size: 3rem;
  cursor: pointer;
  color: var(--color-grey-0);

  @media (max-width: 600px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: rgba(7, 12, 57);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  margin: 0;
  text-align: center;
  z-index: 350;
  gap: 1.5rem;

  li a {
    font-size: 2rem;
    color: var(--color-grey-0);
    text-decoration: none;
  }

  li a:hover {
    color: var(--color-brand-700);
  }

  @media (min-width: 801px) {
    display: none;
  }
`;

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = t("menu", { returnObjects: true });

  return (
    <>
      <StyledMenu>
        <h2>TapesTransfer.com</h2>
        <WrapperMenu>
          {menuItems.map((item, index) => (
            <StyledMenuItem key={index}>
              <a
                href={
                  index === 0
                    ? "#services"
                    : index === 1
                    ? "#capabilities"
                    : "#contact"
                }
              >
                {item}
              </a>
            </StyledMenuItem>
          ))}
        </WrapperMenu>

        <MenuLeft>
          <LanguageSwitcher />
          <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)} />
        </MenuLeft>
      </StyledMenu>

      {menuOpen && (
        <MobileMenu>
          <IoCloseOutline
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "3rem",
              position: "absolute",
              top: 10,
              left: 10,
              cursor: "pointer",
              color: "white",
            }}
          />

          <li>
            <LanguageSwitcher />
          </li>

          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={
                  index === 0
                    ? "#services"
                    : index === 1
                    ? "#capabilities"
                    : "#contact"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </MobileMenu>
      )}
    </>
  );
}

export default Menu;
