import styled from "styled-components";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: "30vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const StyledCompanyService = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  gap: 6rem;
  margin-top: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    :nth-child(3) {
      grid-row-start: 4;
      grid-row-end: 5;
    }

    :last-child {
      grid-row-start: 7;
      grid-row-end: 8;
    }
  }
`;

const ImageContainer = styled(motion.div)`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 45vw;
  height: 60vh;
  border-radius: 15px;
  box-shadow: rgb(5, 8, 10) 2px 15px 20px -4px;
  text-align: center;
  font-size: 4rem;
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 90vw;
  }

  p {
    background-color: #00247d;
    width: 110%;
    padding: 2rem 3rem;
    margin-left: -2rem;
    margin-right: -2rem;
    border-radius: 20px;
    font-weight: 700;
    color: var(--color-grey-0);

    @media (max-width: 600px) {
      width: 105%;
      font-size: 2rem;
    }
  }
`;

const TextParagraph = styled.p`
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1%.6;
  }
`;

const TextContainer = styled.div`
  color: var(--color-brand-950);
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  h4 {
    font-size: 3rem;
    color: var(--color-brand-950);
    letter-spacing: 0;
  }

  p {
    font-size: 1.9rem;
    color: var(--color-brand-950);
    width: 75%;
    margin-top: -2rem;

    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
`;

const MotionTextContainer = motion(TextContainer);

function CompanyService() {
  return (
    <StyledCompanyService>
      <ImageContainer
        imageUrl={photo1}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <p>Tape Digitalization</p>
      </ImageContainer>

      <TextContainer>
        <MotionTextContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h4 id="services">Broadcast Workflow</h4>
          <TextParagraph>
            Leveraging industry-standard broadcast workflows ensures seamless
            digitization processes, adhering to quality standards and preserving
            the integrity of the content.
          </TextParagraph>
          <h4>High Volume Capabilities</h4>
          <TextParagraph>
            With a capacity to digitize over 1000 tapes monthly, we streamline
            large-scale digitization projects, ensuring timely delivery and
            efficiency.
          </TextParagraph>
        </MotionTextContainer>
      </TextContainer>
      <TextContainer>
        <MotionTextContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h4>Upscaling Technology</h4>
          <TextParagraph>
            Through advanced machine learning algorithms, we upscale
            low-resolution footage, breathing new life into vintage recordings
            and ensuring optimal viewing experiences.
          </TextParagraph>
          <h4>Significant Improvements</h4>
          <TextParagraph>
            Our AI restoration techniques guarantee substantial enhancements in
            clarity, color accuracy, and stability, revitalizing your content to
            meet modern viewing standards.
          </TextParagraph>
        </MotionTextContainer>
      </TextContainer>

      <ImageContainer
        imageUrl={photo2}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <p>Advanced AI restauration</p>
      </ImageContainer>

      <ImageContainer
        imageUrl={photo3}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <p>Digital Archiving Solutions</p>
      </ImageContainer>

      <TextContainer>
        <MotionTextContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h4>Customized Archiving Strategies</h4>
          <TextParagraph>
            Tailored to your specific needs, our archiving strategies ensure
            efficient management and retrieval of digital assets, providing
            peace of mind for long-term preservation.
          </TextParagraph>
          <h4>Collaboration with Top Cloud Platforms</h4>
          <TextParagraph>
            Partnering with leading cloud storage providers, we offer secure and
            reliable archiving solutions, safeguarding your valuable content for
            future generations.
          </TextParagraph>
        </MotionTextContainer>
      </TextContainer>
      <TextContainer>
        <MotionTextContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <h4>Comprehensive Editing and Grading</h4>
          <TextParagraph>
            Our post-production services encompass comprehensive editing, color
            grading, metadata tagging, and format conversions.
          </TextParagraph>
          <h4>Media Asset Management Systems</h4>
          <TextParagraph>
            Seamlessly compatible with Media Asset Management systems, our
            services facilitate efficient archival and retrieval processes,
            enabling easy access to archived content for future use.
          </TextParagraph>
        </MotionTextContainer>
      </TextContainer>

      <ImageContainer
        imageUrl={photo4}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <p>Post-Production Services</p>
      </ImageContainer>
    </StyledCompanyService>
  );
}

export default CompanyService;
