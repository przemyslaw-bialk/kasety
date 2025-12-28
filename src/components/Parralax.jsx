import styled from "styled-components";
import photo from "../assets/photo3.jpg";
import CtaButton from "./Button";

const StyledParralax = styled.div`
  height: 75vh;
  background-color: red;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  gap: 2rem;

  p {
    font-size: 3rem;
    text-align: center;
    padding: 4rem 0;
    width: 65%;
    color: var(--color-grey-0);

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

function Parralax() {
  return (
    <StyledParralax>
      <p>
        1000 tapes per month digitalized, with the capability to expand rapidly
        to meet demand. Over 8000 tapes digitalized last year. Ofer 15 years of
        experience in broadcast industry.
      </p>
      <CtaButton href="#contact">Book Your Consultation</CtaButton>
    </StyledParralax>
  );
}

export default Parralax;
