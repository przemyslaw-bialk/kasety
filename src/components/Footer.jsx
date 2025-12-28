import styled from "styled-components";
import { CiMail } from "react-icons/ci";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 1rem 1rem 1rem;
  color: var(--color-brand-950);
  padding: 2rem 0 0;
  border-top: 1px solid var(--color-brand-950);

  @media (max-width: 900px) {
    font-size: 1.4rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    font-size: 2rem;
    color: var(--color-brand-950);

    &:hover {
      color: var(--color-brand-800);
    }
  }
`;

const Mail = styled.a`
  font-size: 1.6rem !important;
  font-family: inherit;

  @media (max-width: 900px) {
    font-size: 1rem !important;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>TapesTransfer.com - all rights reserved &#169;</p>

      <Flex>
        <CiMail />

        <Mail
          href="mailto:contact@tapestransfer.com
"
        >
          contact@tapestransfer.com
        </Mail>
      </Flex>
    </StyledFooter>
  );
}

export default Footer;
