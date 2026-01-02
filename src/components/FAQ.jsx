import styled from "styled-components";
import StyledFaq from "../ui/StyledFaq";

const Text = styled.p`
  color: var(--color-brand-950) !important;
`;

function Faq() {
  return (
    <StyledFaq id="faq">
      <h2>Frequently asked questions</h2>
      <Text>
        We are here to help with any questions you have about the service with
        offer
      </Text>
    </StyledFaq>
  );
}

export default Faq;
