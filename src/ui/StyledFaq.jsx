import styled from "styled-components";

const StyledFaq = styled.div`
  text-align: center;
  background-color: var(--color-grey-0);
  padding: 1rem 0 6rem 0;
  h2 {
    font-size: 6rem;
    color: var(--color-brand-950);
    margin-top: 5rem;

    @media (max-width: 810px) {
      font-size: 3.5rem;
    }
  }

  p {
    color: var(--color-brand-800);
  }
`;

export default StyledFaq;
