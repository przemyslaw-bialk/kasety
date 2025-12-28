import { PiCassetteTape } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { FaPhotoVideo, FaRegLightbulb } from "react-icons/fa";

import styled from "styled-components";
import Header from "../ui/Header";

const Wrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 10rem;
  color: var(--color-brand-950);

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    font-size: 7rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    font-size: 5rem;
  }

  p {
    font-size: 3rem;
    text-align: center;
    padding: 2rem;
    color: var(--color-grey-950);
    font-weight: 700;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;
`;

function WhyUs() {
  return (
    <>
      <Header>Our Core Services</Header>
      <Wrapper>
        <ContentContainer>
          <div>
            <PiCassetteTape />
          </div>
          <p>Tape Digitalization</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <MdSpeed />
          </div>
          <p>Advanced AI Restoration</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <FaPhotoVideo />
          </div>
          <p>Digital Archiving Solutions</p>
        </ContentContainer>
        <ContentContainer>
          <div>
            <FaRegLightbulb />
          </div>
          <p>Post-Production Services</p>
        </ContentContainer>
      </Wrapper>
    </>
  );
}

export default WhyUs;
