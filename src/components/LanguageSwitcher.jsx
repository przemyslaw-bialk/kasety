import { useTranslation } from "react-i18next";
import styled from "styled-components";
import german from "../assets/german.png";
import english from "../assets/english.png";

const LanguageButton = styled.button`
  border: none;
`;

const GermanFlag = styled.img`
  width: 50px;
  height: 25px;
  display: block;
`;
const EnglishFlag = styled.img`
  width: 50px;
  height: 25px;
  display: block;
`;
const Switcher = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 2;
  right: 2rem;
`;

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <Switcher>
      <LanguageButton onClick={() => changeLanguage("en")}>
        <EnglishFlag src={english} />
      </LanguageButton>
      <LanguageButton onClick={() => changeLanguage("de")}>
        <GermanFlag src={german} />
      </LanguageButton>
    </Switcher>
  );
}

export default LanguageSwitcher;
