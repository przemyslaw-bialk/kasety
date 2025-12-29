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
      why_us_header: "BROADCAST-GRADE SERVICES",
      card_title: [
        "DVC PRO Digitization & Migration",
        "AI-Powered Content Restoration",
        "Digital Asset Management & Archival",
        "Broadcast Post-Production Services",
      ],
      card_text: [
        "Professional ingest using calibrated broadcast equipment with frame-accurate capture",
        "Machine learning-based enhancement: temporal noise reduction, upscaling, and color science workflows",
        "LTO/cloud hybrid archival strategies with metadata enrichment and MAM integration",
        "Professional color grading, standards conversion, and delivery in all broadcast formats (ProRes, DNxHD, IMF)",
      ],
      our_numbers: [
        "hours/month digitization capacity",
        "tapes migrated in 2024",
        "years broadcast engineering",
        "SMPTE-compliant workflows",
      ],
      number_heading: "Frame-accurate",
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
      why_us_header: "BROADCAST-KLASSE DIENSTLEISTUNGEN",
      card_title: [
        "DVC PRO Digitalisierung & Migration",
        "KI-gestützte Inhaltsrestaurierung",
        "Digitale Asset-Verwaltung & Archivierung",
        "Broadcast-Postproduktions-Dienstleistungen",
      ],
      card_text: [
        "Professionelle Erfassung mit kalibrierter Broadcast-Ausrüstung und bildgenauer Aufnahme",
        "Maschinelles Lernen-basierte Verbesserung: zeitliche Rauschunterdrückung, Hochskalierung und Farbwissenschafts-Workflows",
        "LTO/Cloud-Hybrid-Archivierungsstrategien mit Metadatenanreicherung und MAM-Integration",
        "Professionelle Farbkorrektur, Standardkonvertierung und Lieferung in allen Broadcast-Formaten (ProRes, DNxHD, IMF)",
      ],
      our_numbers: [
        "Stunden/Monat Digitalisierungskapazität",
        "Bänder migriert in 2024",
        "Jahre Broadcast-Engineering",
        "SMPTE-konforme Workflows",
      ],
      number_heading: "Bildgenau",
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
