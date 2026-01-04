import styled from "styled-components";
import Header from "../ui/Header";
import { IoMdArrowDropright } from "react-icons/io";
import { useTranslation } from "react-i18next";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Outer = styled.div`
  background-color: #fafbfd;
  padding-bottom: 3rem;
`;

const SectionWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 3rem;
  margin-top: 5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, var(--color-brand-950), #001840);
  border-radius: 10px;
  padding: 5rem 2rem;

  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: transparent;
  }

  & h4 {
    font-size: 2rem;
    color: #fff;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ffffffe2;
    margin-top: 1.5rem;
  }

  & span {
    color: #ffc105;
    display: flex;
    align-items: center;
  }
`;

const TechnicalCapabilities = () => {
  const { t } = useTranslation();
  const technical_DVC = t("technical_DVC", { returnObjects: true });
  const technical_AI = t("technical_AI", { returnObjects: true });
  const technical_ASSET = t("technical_ASSET", { returnObjects: true });
  const technical_POST = t("technical_POST", { returnObjects: true });

  return (
    <Outer id="capabilities">
      <SectionWrapper>
        <FadeInWhenVisible>
          <Header>{t("technical_heading")}</Header>
        </FadeInWhenVisible>
        <CardWrapper>
          <Card>
            <FadeInWhenVisible>
              <div>
                <h4>{t("technical_subheading.0")}</h4>
                {technical_DVC.map((item, i) => (
                  <ul key={i}>
                    <li>
                      <span>
                        <IoMdArrowDropright />
                      </span>
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </FadeInWhenVisible>
          </Card>
          <Card>
            <FadeInWhenVisible>
              <div>
                <h4>{t("technical_subheading.1")}</h4>
                {technical_AI.map((item, i) => (
                  <ul key={i}>
                    <li>
                      <span>
                        <IoMdArrowDropright />
                      </span>
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </FadeInWhenVisible>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <FadeInWhenVisible>
              <div>
                <h4>{t("technical_subheading.2")}</h4>
                {technical_ASSET.map((item, i) => (
                  <ul key={i}>
                    <li>
                      <span>
                        <IoMdArrowDropright />
                      </span>
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </FadeInWhenVisible>
          </Card>
          <Card>
            <FadeInWhenVisible>
              <div>
                <h4>{t("technical_subheading.3")}</h4>
                {technical_POST.map((item, i) => (
                  <ul key={i}>
                    <li>
                      <span>
                        <IoMdArrowDropright />
                      </span>
                      {item}
                    </li>
                  </ul>
                ))}
              </div>
            </FadeInWhenVisible>
          </Card>
        </CardWrapper>
      </SectionWrapper>
    </Outer>
  );
};

export default TechnicalCapabilities;
