import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "it",
    resources: {
      en: {
        translation: {
          travel: "TRAVEL",
          events: "EVENTS",
          freeTime: "LEISURE",
          ourPartners: "OUR PARTNERS",
          contacts: "CONTACTS",
          p1: "BEYOND TRAVEL, EXPERIENCES",
          p2: "We are an experience agency and our goal",
          p3: "is your free time in truly indelible memories.",
          p4: "Whether we are talking about a few hours, days, weeks or months, little changes,",
          p5: "because time is the most precious asset we have.",
          p6: "For this, we study every experience in the smallest detail,",
          p7: "Based on your person and your interests",
          p8: "Because it's true that time goes by the same for everyone,",
          p9: "but each has their own perfect way of making it flow",
          p10: "Adventure, relax, fun,",
          p11: "a short distance from home or on the other side of the world",
          p12: "Whatever experience you've always dreamed of,",
          p13: "it will first become reality and then a magnificent memory.",
        }
      },
      it: {
        translation: {
          travel: "VIAGGI",
          events: "EVENTI",
          freeTime: "TEMPO LIBERO",
          ourPartners: "I NOSTRI PARTNER",
          contacts: "CONTATTI",
          p1: "OLTRE I VIAGGI, ESPERIENZE",
          p2: "Siamo una experience agency e il nostro obiettivo",
          p3: "è trasformare il tuo tempo libero in ricordi realmente indelebili.",
          p4: "Che si parli di poche ore, giorni, settimane o mesi, poco cambia,",
          p5: "perchè il tempo è il bene più prezioso che abbiamo.",
          p6: "Per questo, studiamo ogni esperienza nel minimo dettaglio,",
          p7: "In base alla tua persona e ai tuoi interessi",
          p8: "Perchè è vero che il tempo scorre per tutti uguale,",
          p9: "ma ognuno ha il suo modo perfetto di farlo scorrere",
          p10: "Avventura, relax, divertimento,",
          p11: "a pochi passi da casa o dall'altra parte del mondo",
          p12: "qualunque sia l'esperienza che hai sempre sognato,",
          p13: "divenerà prima realtà e poi un magnifico ricordo.",
        }
      }
    }
  });