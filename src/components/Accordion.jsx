import { useState } from "react";
import styled from "styled-components";
import Faq from "./FAQ";

const data = [
  {
    question: "What is Tapestransfer.com and what services does it offer?",
    answer:
      " Tapestransfer.com is a pioneering service in AI-powered media digitization. We specialize in transforming DVC PRO tape recordings into high-quality digital formats. Our services include advanced AI digitization, rapid data processing, and comprehensive video processing from capture to post-production.",
  },
  {
    question:
      "How does AI technology enhance the digitization process at Tapestransfer.com?",
    answer:
      "Our AI technology enhances the digitization process by preserving the original authenticity of recordings while significantly improving their quality. The AI algorithms are designed to optimize clarity, color balance, and sound quality, making the digitized content suitable for modern media platforms.",
  },
  {
    question:
      "Is Tapestransfer.com suitable for large-scale broadcasting and production company needs?",
    answer:
      "Absolutely. Tapestransfer.com is tailored for the broadcast industry, offering rapid processing capabilities ideal for broadcasters, production companies, and archives. Our services are designed to handle large-scale projects efficiently, meeting tight deadlines without compromising quality.",
  },
  {
    question:
      "Can Tapestransfer.com digitize tapes for educational and governmental use?",
    answer:
      "Yes, Tapestransfer.com provides customized solutions for various sectors, including educational and governmental organizations. We understand the unique needs of these sectors and offer tailored services to digitize educational and historical content.",
  },
  {
    question:
      "What sets Tapestransfer.com apart from other digitization services?",
    answer:
      "What sets us apart is our state-of-the-art AI technology combined with our team's deep expertise in the television and media industry. We offer a holistic approach to digitization, covering everything from capture to AI-enhanced post-production.",
  },
  {
    question: "How can clients start a project with Tapestransfer.com?",
    answer:
      "Starting a project is simple. Clients can contact us through our website, where they can discuss their needs, timelines, and any specific requirements. Our team will provide a tailored approach to meet the unique demands of each project",
  },
];

const AccordionWrapper = styled.div`
  padding: 15rem;
  background-color: #031f82;

  @media (max-width: 1000px) {
    padding: 4rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const StyledAccordion = styled.div`
  background-color: #fff;
  padding: ${({ isLast }) => (isLast ? "0 5rem 8rem 5rem" : "0 5rem")};

  @media (max-width: 1200px) {
    font-size: 1.5rem;
    padding: 1rem;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-brand-950);
    background-color: var(--color-grey-0);
    padding: 0.2rem 0.6rem;
    border: none;
    border-bottom: 1px solid var(--color-brand-700);
    font-size: 1.9rem;
    font-weight: 700;
    transition: background-color 0.5s, color 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-950);
      color: var(--color-brand-50);
    }

    @media (max-width: 1268px) {
      font-size: 2rem;
      padding: 1rem;
    }
  }

  @media (max-width: 1268px) {
    font-size: 1.5rem;
  }

  span {
    font-size: 3rem;
  }
`;

const AccordionAnswer = styled.div`
  color: var(--color-brand-950);
  padding: 0.5rem;
  font-size: 2rem;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  padding-bottom: ${({ isOpen }) => (isOpen ? "20px" : "0")};
  transition: all 0.25s ease-in-out;
  overflow: hidden;

  @media (max-width: 1268px) {
    font-size: 1.5rem;
  }
`;
function Accordion() {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(data.length).fill(false)
  );

  const handleAccordionClick = (index) => {
    const updatedAccordionOpen = [...accordionOpen];
    updatedAccordionOpen[index] = !updatedAccordionOpen[index];
    setAccordionOpen(updatedAccordionOpen);
  };

  return (
    <AccordionWrapper>
      <Faq />
      {data.map((item, index) => (
        <StyledAccordion key={index} isLast={index === data.length - 1}>
          <button onClick={() => handleAccordionClick(index)}>
            <div>{item.question}</div>
            {accordionOpen[index] ? <span>-</span> : <span>+</span>}
          </button>
          <AccordionAnswer isOpen={accordionOpen[index]}>
            {item.answer}
          </AccordionAnswer>
        </StyledAccordion>
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;
