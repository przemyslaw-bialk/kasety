// import GlobalStyles from "./styles/GlobalStyles";
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

import GlobalStyles from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";

import Accordion from "./components/Accordion";

import OurNumbers from "./components/OurNumbers";

import WhyUs from "./components/WhyUs";
import { ContactUs } from "./components/ContactUs";

import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import TechnicalCapabilities from "./components/TechnicalCapabilities";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <I18nextProvider i18n={i18n}>
        <HeroSection />
        <WhyUs />
        <OurNumbers />
        <TechnicalCapabilities />
        <OurTeam />
        <Accordion />

        <ContactUs />
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;
