import styled, { keyframes } from "styled-components";
import { ImArrowDown } from "react-icons/im";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInAndOut = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(10%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledSlogan = styled.h1`
  font-size: 3rem;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 150;
  color: var(--color-grey-0);
  font-weight: 500;
  text-align: center;
  width: 65%;
  padding-bottom: 4rem;
  margin-top: 16rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.a`
  background: #ffcd05;
  color: var(--color-text);
  border: none;
  font-size: 3rem;
  padding: 1rem 5rem;
  font-weight: 400;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 150;
  margin-top: 2rem;
  animation: ${slideInAndOut} 1.8s ease-in-out;

  &:hover {
    background: #e6b905;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const StyledArrow = styled(ImArrowDown)`
  color: var(--color-brand-900);
  font-size: 10rem;
  margin-top: 5rem;
  z-index: 150;
  animation: ${fadeIn} 2s ease-in-out;
`;

function Slogan() {
  return (
    <CenteredContainer>
      <StyledSlogan>
        {'"'}According to UNESCO, 200 million hours of video programmes are in
        danger of being lost. Preserving one’s audiovisual heritage means
        ensuring that it can be seen or heard today, tomorrow and forever.{'"'}
      </StyledSlogan>
      <Button href="#contact">Book Your Consultation</Button>
      <StyledArrow />
    </CenteredContainer>
  );
}

export default Slogan;
