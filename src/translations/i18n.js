import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  //------------------------------------------ENGLISH----------------------------------//
  en: {
    translation: {
      title: "Professional DVC PRO Transfer & Restoration",
      features: [
        "Broadcast-Standard Digitization",
        "AI-Enhanced Workflows",
        "Enterprise Scale",
      ],
      slogan:
        "UNESCO estimates 200 million hours of video content face imminent loss due to magnetic media degradation and playback equipment obsolescence. Professional migration is no longer optional— it is urgent.",
      button: "Book Your Consultation",
      menu: ["Services", "Capabilities", "Contact"],
    },
  },
  //------------------------------------------GERMAN----------------------------------//

  de: {
    translation: {
      title: "Professioneller DVC PRO Transfer & Restaurierung",
      features: [
        "Broadcast-Standard-Digitalisierung",
        "KI-gestützte Workflows",
        "Enterprise-Skalierung",
      ],
      slogan:
        "Die UNESCO schätzt, dass 200 Millionen Stunden Videoinhalte aufgrund der Degradation magnetischer Medien und der Überalterung von Abspielgeräten unmittelbar vom Verlust bedroht sind. Professionelle Migration ist nicht mehr optional—sie ist dringend erforderlich.",
      button: "Buchen Sie Ihre Beratung",
      menu: ["Dienstleistungen", "Fähigkeiten", "Kontakt"],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
