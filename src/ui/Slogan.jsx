import styled, { keyframes } from "styled-components";
import { ImArrowDown } from "react-icons/im";
import { useTranslation } from "react-i18next";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInAndOut = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(10%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledSlogan = styled.h1`
  font-size: 2rem;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 150;
  color: var(--color-grey-400);
  font-weight: 500;
  text-align: center;
  max-width: 750px;
  padding-bottom: 2rem;
  margin-top: 3rem;
  padding: 1rem 1rem;
  border-left: 2px solid #e6b905;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.a`
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
  margin-top: 2rem;
  animation: ${slideInAndOut} 1.8s ease-in-out;

  &:hover {
    background: #e6b905;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const StyledArrow = styled(ImArrowDown)`
  color: var(--color-brand-900);
  font-size: 10rem;
  margin-top: 5rem;
  z-index: 150;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Title = styled.h1`
  font-size: 8rem;
  color: var(--color-grey-0);
  position: relative;
  z-index: 150;
  text-align: center;
  margin-top: 14rem;
  line-height: 1;
  max-width: 900px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Features = styled.div`
  position: relative;
  z-index: 150;
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  font-size: 3rem;
  color: var(--color-grey-200);
  animation: ${fadeIn} 2s ease-in-out;
`;

const FeatureItem = styled.p`
  &:not(:last-child)::after {
    content: "|";
    margin-left: 0.5rem;
  }
`;

function Slogan() {
  const { t } = useTranslation();
  return (
    <CenteredContainer>
      <Title>{t("title")}</Title>
      <Features>
        {t("features", { returnObjects: true }).map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </Features>
      <StyledSlogan>{t("slogan")}</StyledSlogan>
      <Button href="#contact">{t("button")}</Button>
      <StyledArrow />
    </CenteredContainer>
  );
}

export default Slogan;
