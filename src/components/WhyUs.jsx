import styled from "styled-components";
import Header from "../ui/Header";
import { GiCompactDisc } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Wrapper = styled.div`
  margin-top: 15rem;
  display: grid;
  align-items: stretch;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 10rem;
  color: var(--color-brand-950);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    font-size: 7rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    font-size: 5rem;
  }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dadfe7;
  border-radius: 10px;
  padding: 5rem 3rem;
  margin-top: 5rem;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: transparent;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CardLogo = styled.span`
  display: block;
  font-size: 4rem;
`;

const CardHeader = styled.h4`
  font-size: 2rem;
  margin-top: 3rem;
`;

const CardText = styled.p`
  font-size: 1.6rem;
  color: #5e708d;
  margin-top: 2rem;
`;

function WhyUs() {
  const { t } = useTranslation();
  const WHY_US_CARDS = [
    {
      icon: GiCompactDisc,
      color: "#00ff00",
      textKey: "card_title.0",
      bodyKey: "card_text.0",
    },
    {
      icon: BsStars,
      color: "#20B1FF",
      textKey: "card_title.1",
      bodyKey: "card_text.1",
    },
    {
      icon: FiDatabase,
      color: "#FF5500",
      textKey: "card_title.2",
      bodyKey: "card_text.2",
    },
    {
      icon: LiaPhotoVideoSolid,
      color: "#FF208F",
      textKey: "card_title.3",
      bodyKey: "card_text.3",
    },
  ];

  return (
    <>
      <FadeInWhenVisible>
        <Header>{t("why_us_header")}</Header>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Wrapper>
          {WHY_US_CARDS.map(({ icon: Icon, color, textKey, bodyKey }, i) => (
            <Card key={i}>
              <CardLogo style={{ color }}>
                <Icon />
              </CardLogo>
              <CardHeader>{t(textKey)}</CardHeader>
              <CardText>{t(bodyKey)}</CardText>
            </Card>
          ))}
        </Wrapper>
      </FadeInWhenVisible>
    </>
  );
}

export default WhyUs;
