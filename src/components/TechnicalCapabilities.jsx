import styled from "styled-components";
import Header from "../ui/Header";
import { IoMdArrowDropright } from "react-icons/io";

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
  return (
    <Outer>
      <SectionWrapper>
        <Header>TECHNICAL CAPABILITIES</Header>
        <CardWrapper>
          <Card>
            <div>
              <h4>DVC PRO Digitization</h4>
              <ul>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Professional Panasonic DVC PRO decks (AJ-D750, AJ-HD1400)
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Bit-accurate capture with SMPTE timecode preservation
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  1000+ hours monthly capacity with rapid scaling
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Full broadcast QC standards compliance
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div>
              <h4>DVC PRO Digitization</h4>
              <ul>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Professional Panasonic DVC PRO decks (AJ-D750, AJ-HD1400)
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Bit-accurate capture with SMPTE timecode preservation
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  1000+ hours monthly capacity with rapid scaling
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Full broadcast QC standards compliance
                </li>
              </ul>
            </div>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card>
            <div>
              <h4>DVC PRO Digitization</h4>
              <ul>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Professional Panasonic DVC PRO decks (AJ-D750, AJ-HD1400)
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Bit-accurate capture with SMPTE timecode preservation
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  1000+ hours monthly capacity with rapid scaling
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Full broadcast QC standards compliance
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div>
              <h4>DVC PRO Digitization</h4>
              <ul>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Professional Panasonic DVC PRO decks (AJ-D750, AJ-HD1400)
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Bit-accurate capture with SMPTE timecode preservation
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  1000+ hours monthly capacity with rapid scaling
                </li>
                <li>
                  <span>
                    <IoMdArrowDropright />
                  </span>
                  Full broadcast QC standards compliance
                </li>
              </ul>
            </div>
          </Card>
        </CardWrapper>
      </SectionWrapper>
    </Outer>
  );
};

export default TechnicalCapabilities;
