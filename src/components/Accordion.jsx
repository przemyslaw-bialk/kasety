import { useState } from "react";
import { useTranslation } from "react-i18next";

const Accordion = () => {
  const { t } = useTranslation();

  const accordionData = t("faq", { returnObjects: true });

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionData.map(({ question, answer }, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-title" onClick={() => toggle(index)}>
            <div>{question}</div>
            <div>{activeIndex === index ? "-" : "+"}</div>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">{answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
