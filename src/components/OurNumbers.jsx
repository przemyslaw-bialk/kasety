import styled from "styled-components";
import photo from "../assets/photo3.jpg";
import SlotCounter from "react-slot-counter";

const StyledNumbers = styled.section`
  width: 100%;
  height: 75vh;
  margin-top: 10rem;

  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 1030px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h4 {
    font-size: 4rem;
    color: #ffc105;
    margin-top: 0.9rem;
    font-weight: 700;

    @media (max-width: 800px) {
      margin-top: 0;
    }
  }
`;

const WrappNumbers = styled.div`
  display: flex;
  font-size: 4rem;
  align-items: center;
  gap: 0.5rem;
  color: #ffc105;
  font-weight: 700;
`;

const Text = styled.p`
  color: #ccd7e1;
  text-align: center;
  font-size: 2rem;
`;

function OurNumbers() {
  return (
    <StyledNumbers>
      <Inner>
        <WrapCard>
          <WrappNumbers>
            <SlotCounter
              value={1000}
              animateOnVisible={{
                triggerOnce: true,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <span>+</span>
          </WrappNumbers>
          <Text>hours/month digitization capacity</Text>
        </WrapCard>

        <WrapCard>
          <WrappNumbers>
            <SlotCounter
              value={8000}
              animateOnVisible={{
                triggerOnce: true,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <span>+</span>
          </WrappNumbers>
          <Text>tapes migrated in 2024</Text>
        </WrapCard>

        <WrapCard>
          <WrappNumbers>
            <SlotCounter
              value={15}
              animateOnVisible={{
                triggerOnce: true,
                rootMargin: "0px 0px -100px 0px",
              }}
            />
            <span>+</span>
          </WrappNumbers>
          <Text>years broadcast engineering</Text>
        </WrapCard>
        <WrapCard>
          <h4>Frame-accurate</h4>
          <Text>SMPTE-compliant workflows</Text>
        </WrapCard>
      </Inner>
    </StyledNumbers>
  );
}

export default OurNumbers;
