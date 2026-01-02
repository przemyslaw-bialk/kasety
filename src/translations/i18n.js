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
      contact_us: "Contact Us",
      contact_heading: "Let's talk about <br/> your project",
      contact_subheading:
        "Drop us a line through the form below and we'll get back to you",
      about_us: "About us",
      about_us_subheading:
        "Meet the team behind Tapes Transfer - professionals dedicated to preserving your audiovisual heritage with expertise and passion",
      about_us_position: [
        "Technical Director & Co-Founder",
        "Producer & Co-Founder",
      ],
      about_us_text: [
        "Award-winning editor with expertise in technical video workflows and digital preservation. Graduate of the Krakow Academy of Fine Arts, combining technical precision with deep understanding of image quality. Experienced in working with major TV broadcast stations. Responsible for the technical and operational side of the venture.",
        "Experienced film producer and problem solver. Graduate of Polish National Film School, with experience in advertising agencies and film productions. Ensures every project is delivered at the highest level, on time and within budget.",
      ],
      technical_heading: "TECHNICAL CAPABILITIES",
      technical_subheading: [
        "DVC PRO Digitization",
        "AI Restoration",
        "Asset Management",
        "Post-Production",
      ],
      technical_DVC: [
        "Professional Panasonic DVC PRO decks (AJ-D750, AJ-HD1400)",
        "Bit-accurate capture with SMPTE timecode preservation",
        "1000+ hours monthly capacity with rapid scaling",
        "Full broadcast QC standards compliance",
      ],
      technical_AI: [
        "Neural network-based super-resolution upscaling (SD/HDV → HD/4K)",
        "Temporal noise reduction and dropout compensation",
        "Color science workflows preserving original characteristics",
        "Broadcast delivery specifications compliant",
      ],
      technical_ASSET: [
        "LTO tape libraries and cloud hybrid archival",
        "FADGI, IASA, and broadcast archive standards",
        "MAM integration (Avid, Premiere, DaVinci Resolve)",
        "AWS, Google Cloud, Azure Media Services compatible",
      ],
      technical_POST: [
        "Professional color grading (DaVinci Resolve certified)",
        "Standards conversion (frame rate, resolution, color space)",
        "All broadcast formats: ProRes, DNxHD/HR, IMF, AS-11 DPP, MXF",
        "Comprehensive QC reports and technical metadata",
      ],
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
      contact_us: "Kontakt",
      contact_heading: "Lassen Sie uns über Ihr Projekt sprechen",
      contact_subheading:
        "Schreiben Sie uns über das untenstehende Formular – wir melden uns zeitnah bei Ihnen",
      about_us: "Über Uns",
      about_us_subheading:
        "Lernen Sie das Team hinter Tapes Transfer kennen - Profis, die sich mit Expertise und Leidenschaft der Erhaltung Ihres audiovisuellen Erbes widmen",
      about_us_position: [
        "Technischer Direktor & Mitgründer",
        "Produzent & Mitgründer",
      ],
      about_us_text: [
        "Preisgekrönter Editor mit Expertise in technischen Video-Workflows und digitaler Archivierung. Absolvent der Kunstakademie Krakau, verbindet technische Präzision mit tiefem Verständnis für Bildqualität. Erfahrung in der Arbeit mit großen TV-Sendern. Verantwortlich für die technische und operative Seite des Unternehmens.",
        "Erfahrener Filmproduzent und Problemlöser. Absolvent der Polnischen Nationalen Filmhochschule mit Erfahrung in Werbeagenturen und Filmproduktionen. Stellt sicher, dass jedes Projekt auf höchstem Niveau, pünktlich und im Budget geliefert wird.",
      ],
      technical_heading: "TECHNISCHE FÄHIGKEITEN",
      technical_subheading: [
        "DVC PRO Digitalisierung",
        "KI-Restaurierung",
        "Asset-Management",
        "Postproduktion",
      ],
      technical_DVC: [
        "Professionelle Panasonic DVC PRO Decks (AJ-D750, AJ-HD1400)",
        "Bitgenaue Erfassung mit SMPTE-Timecode-Erhaltung",
        "1000+ Stunden monatliche Kapazität mit schneller Skalierung",
        "Vollständige Einhaltung der Broadcast-QC-Standards",
      ],
      technical_AI: [
        "Neuronale Netzwerk-basierte Super-Resolution-Hochskalierung (SD/HDV → HD/4K)",
        "Zeitliche Rauschunterdrückung und Dropout-Kompensation",
        "Farbwissenschafts-Workflows zur Erhaltung der ursprünglichen Eigenschaften",
        "Einhaltung der Broadcast-Lieferspezifikationen",
      ],
      technical_ASSET: [
        "LTO-Bandbibliotheken und Cloud-Hybrid-Archivierung",
        "FADGI-, IASA- und Broadcast-Archiv-Standards",
        "MAM-Integration (Avid, Premiere, DaVinci Resolve)",
        "AWS, Google Cloud, Azure Media Services kompatibel",
      ],
      technical_POST: [
        "Professionelle Farbkorrektur (DaVinci Resolve zertifiziert)",
        "Standardkonvertierung (Bildrate, Auflösung, Farbraum)",
        "Alle Broadcast-Formate: ProRes, DNxHD/HR, IMF, AS-11 DPP, MXF",
        "Umfassende QC-Berichte und technische Metadaten",
      ],
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
