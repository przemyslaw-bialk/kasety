import styled from "styled-components";
import Header from "../ui/Header";
import { GiCompactDisc } from "react-icons/gi";
import { BsStars } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { LiaPhotoVideoSolid } from "react-icons/lia";

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
    border: none;
  }

  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CardLogo = styled.span`
  display: block;
  font-size: 4rem;
  color: #00ff00;
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
  return (
    <>
      <Header>BROADCAST-GRADE SERVICES</Header>
      <Wrapper>
        <Card>
          <CardLogo>
            <GiCompactDisc />
          </CardLogo>
          <CardHeader>DVC PRO Digitization & Migration</CardHeader>
          <CardText>
            Professional ingest using calibrated broadcast equipment with
            frame-accurate capture
          </CardText>
        </Card>
        <Card>
          <CardLogo style={{ color: "#20B1FF" }}>
            <BsStars />
          </CardLogo>
          <CardHeader>AI-Powered Content Restoration</CardHeader>
          <CardText>
            Machine learning-based enhancement: temporal noise reduction,
            upscaling, and color science workflows
          </CardText>
        </Card>
        <Card>
          <CardLogo style={{ color: "#FF5500" }}>
            <FiDatabase />
          </CardLogo>
          <CardHeader>Digital Asset Management & Archival</CardHeader>
          <CardText>
            LTO/cloud hybrid archival strategies with metadata enrichment and
            MAM integration
          </CardText>
        </Card>
        <Card>
          <CardLogo style={{ color: "#FF208F" }}>
            <LiaPhotoVideoSolid />
          </CardLogo>
          <CardHeader>Broadcast Post-Production Services</CardHeader>
          <CardText>
            Professional ingest using calibrated broadcast equipment with
            frame-accurate capture
          </CardText>
        </Card>
      </Wrapper>
    </>
  );
}

export default WhyUs;
