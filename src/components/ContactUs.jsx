import styled from "styled-components";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(to bottom, var(--color-brand-950), #001840);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    background: #fff;
  }
`;

const FormContainer = styled.div`
  position: relative;
  margin-top: 4rem;

  ::before {
    content: "Tapes Transfer .com";
    width: 150px;
    height: 150px;
    border-radius: 220px;
    border: 5px solid #fff;
    padding: 4rem;
    background-color: #00247d;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-20%);
    color: #fff;
    overflow: hidden;
    font-size: 2.4rem;
    padding: 3rem;
    font-weight: 700;
    line-height: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem 2rem 3rem;
  background-color: #f1f1f1;
  color: var(--color-text);
  text-align: center;
  margin-top: 5rem;
  input,
  textarea {
    padding: 1rem 1rem;
    width: 100%;
    border: 1px solid var(--color-grey-300);
    outline-color: var(--color-brand-200);
    color: var(--color-brand-950);
    border-radius: 20px;
  }

  textarea {
    resize: none;
  }

  ::placeholder {
    color: var(--color-grey-300);
  }

  h3 {
    font-weight: 400;
  }
  h1 {
    line-height: 1.3;
  }

  p {
    font-weight: 700;
    font-size: 1.4rem;
    padding-bottom: 3rem;
  }
`;

const SubmitFormButton = styled.input`
  background-color: #ffcd05;
  color: var(--color-text) !important;
  font-size: 2rem;
  padding: 1rem 2rem;
  font-weight: 400;
  border-radius: 20px;
  transition: all 0.3s;
  display: inline-block;
  width: 50% !important;
  cursor: pointer;

  &:hover {
    background: #e6b905;
  }
  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 700px) {
    width: 100% !important;
  }
`;

const BackgroundPhoto = styled.div`
  background: linear-gradient(to bottom, var(--color-brand-950), #001840);

  padding: 1rem;
  color: #e6e9ee;
  text-align: left;

  & h4 {
    font-size: 4rem;
    color: #fff;
    margin-top: 8rem;

    @media (max-width: 900px) {
      margin-top: 2rem;
    }
  }

  & span {
    font-weight: 700;
    display: inline-block;
    margin-top: 8rem;
  }

  & a {
    color: #e6e9ee;
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  @media (max-width: 900px) {
    margin-bottom: 4rem;
  }
`;

const ContactTextLeft = styled.p`
  margin-top: 2rem;
  color: #e6e9ee;
`;

const PopupMessage = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;
`;

const Outer = styled.div`
  background: linear-gradient(to bottom, var(--color-brand-950), #001840);
  padding: 2rem 1rem;
`;

export const ContactUs = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [popup, setPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s2fawgp",
        "template_7kpbrxn",
        form.current,
        "Q-_C632UKuIFHRiVy"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          showPopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const showPopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 5000);
  };

  return (
    <Outer id="contact">
      <FormWrapper>
        <BackgroundPhoto>
          <h4>
            technical <br /> consultation
          </h4>
          <p>Let{"'"}s discuss your digitization project</p>
          <ContactTextLeft>
            Complete the form below and our technical team will respond within
            24 hours
          </ContactTextLeft>
          <p>
            <span>Contact: </span>
            <a href="mailto:contact@tapestransfer.com">
              contact@tapestransfer.com
            </a>
          </p>
        </BackgroundPhoto>
        <FormContainer>
          <Form onSubmit={handleSubmit} ref={form}>
            <h3>{t("contact_us")}</h3>
            <h1>
              <Trans i18nKey="contact_heading" />
            </h1>
            <p>{t("contact_subheading")}</p>
            <div>
              <input type="text" placeholder="Name*" name="name" required />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email*"
                name="email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div>
              <textarea
                cols="20"
                rows="3"
                placeholder="Your message*"
                name="message"
                required
              ></textarea>
            </div>
            <div>
              <SubmitFormButton type="submit" value={t("button")} />
            </div>
          </Form>
        </FormContainer>
      </FormWrapper>
      <PopupMessage show={popup}>Message sent successfully!</PopupMessage>
    </Outer>
  );
};
