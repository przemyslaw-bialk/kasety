import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MenuBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background 0.6s ease, opacity 0.6s ease;
  z-index: 300;
  background: ${({ scrolled }) => (scrolled ? "#00183E" : "transparent")};
`;

const MenuInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
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
  margin-left: auto;

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
  inset: 0;
  padding: 3rem 0;
  margin: 0;
  text-align: center;
  z-index: 350;
  gap: 2rem;

  li a {
    font-size: 2.2rem;
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
  const [scrolled, setScrolled] = useState(false);

  // scroll for changing background color of menu
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
  }, []);
  const { t } = useTranslation();

  const menuItems = t("menu", { returnObjects: true, defaultValue: [] });

  return (
    <>
      <MenuBar scrolled={scrolled}>
        <MenuInner>
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
            <HamburgerIcon onClick={() => setMenuOpen(true)} />
          </MenuLeft>
        </MenuInner>
      </MenuBar>

      {menuOpen && (
        <MobileMenu>
          <IoCloseOutline
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "3rem",
              position: "absolute",
              top: 20,
              left: 20,
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
