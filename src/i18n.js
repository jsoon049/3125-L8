import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Language": "English",
      "Home": "Home",
      "Flower": "Flowers",
      "Order": "View Order",
      "Contact": "Contact Us",
      "Help": "Help",
      "Title": "Welcome to Flower Express",
      "preferencesText": "If applicable, please one or more flower preferences below",
      "Orchid": "Would you like to see our selection of orchids?",
      "Hyacinth": "Would you like to see our selection of hyacinths?",
      "Lilly": "Would you like to see our selection of lillies?",
      "preferencesButton": "Update Flower Preferences",
    }
  },
  fre: {
      translation: {
        "Language": "Français",
        "Home": "Maison",
        "Flower": "Fleur",
        "Order": "Voir L'ordre",
        "Contact": "Nous contacter",
        "Help": "Aider",
        "Title": 'Bienvenue à Flower Express',
        "preferencesText": "Le cas échéant, s'il vous plaît une ou plusieurs préférences de fleurs ci-dessous",
        "Orchid": "Vous souhaitez voir notre sélection d'orchidées?",
        "Hyacinth": "Vous souhaitez voir notre sélection de jacinthes?",
        "Lilly": "Vous souhaitez voir notre sélection de lys?",
        "preferencesButton": "Mettre à jour les préférences de fleurs",
      }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;