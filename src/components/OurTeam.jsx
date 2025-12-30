import Header from "../ui/Header";
import styled from "styled-components";
import tomasz from "../assets/tomasz_bochniak.jpg";
import zenon from "../assets/zenon_budyn.jpg";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SubHeading = styled.p`
  color: var(--color-brand-950);
  text-align: center;
  padding: 0 22rem;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 1rem;
  margin-bottom: 5rem;

  & p {
    color: #5e708d;
    text-align: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const Avatar = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d1d5db;
`;

const Name = styled.h4`
  font-size: 2rem;
  margin-top: 3rem;
  color: #172554;
`;

const Position = styled.p`
  font-size: 1.6rem;
  color: #172554 !important;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const OurTeam = () => {
  return (
    <Wrapper>
      <Header>About Us</Header>
      <SubHeading>
        Meet the team behind Tapes Transfer - professionals dedicated to
        preserving your audiovisual heritage with expertise and passion.
      </SubHeading>
      <CardWrapper>
        <Card>
          <Avatar src={tomasz} alt="Tomasz Bochniak" />
          <Name>Tomasz Bochniak</Name>
          <Position>Technical Director & Co-Founder</Position>
          <p>
            Award-winning editor with expertise in technical video workflows and
            digital preservation. Graduate of the Krakow Academy of Fine Arts,
            combining technical precision with deep understanding of image
            quality. Experienced in working with major TV broadcast stations.
            Responsible for the technical and operational side of the venture.
          </p>
        </Card>
        <Card>
          <Avatar src={zenon} alt="Zenon Budyn" />
          <Name>Zenon Budyn</Name>
          <Position>Producer & Co-Founder</Position>
          <p>
            Experienced film producer and problem solver. Graduate of Polish
            National Film School, with experience in advertising agencies and
            film productions. Ensures every project is delivered at the highest
            level, on time and within budget.
          </p>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default OurTeam;
