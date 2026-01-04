import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Faq from "./FAQ";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const AccordionItem = styled.div`
  border: 1px solid #dadfe7;
  margin-bottom: 1rem;
  padding: 0.3rem;
  border-radius: 10px;
`;

const AccordionQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  color: #172554;
  background-color: #fff;

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media (max-width: 445px) {
    padding: 0;
    font-size: 1.2rem;
  }
`;

const AccordionAnswerWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? "1fr" : "0fr")};
  transition: all 0.3s ease;
`;

const AccordionAnswer = styled.p`
  overflow: hidden;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0 1rem")};
  transition: all 0.3s ease;
  color: #5e708d;

  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

const Accordion = () => {
  const { t } = useTranslation();
  const accordionData = t("faq", { returnObjects: true, defaultValue: [] });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Wrapper>
      <Faq />
      {accordionData.map(({ question, answer }, index) => (
        <AccordionItem key={index}>
          <AccordionQuestion onClick={() => toggle(index)}>
            <span>{question}</span>
            <span>{activeIndex === index ? "−" : "+"}</span>
          </AccordionQuestion>

          <AccordionAnswerWrapper isOpen={activeIndex === index}>
            <AccordionAnswer isOpen={activeIndex === index}>
              {answer}
            </AccordionAnswer>
          </AccordionAnswerWrapper>
        </AccordionItem>
      ))}
    </Wrapper>
  );
};

export default Accordion;
