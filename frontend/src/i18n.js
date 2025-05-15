import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en:{
            translation:{
                h1: "Revolutionizing Agriculture with AI Driven Smart Solutions"
            }
        },
        hi:{
            translation:{
                h1: "नमस्ते, Revolutionizing Agriculture with AI Driven Smart Solutions"
            }
        },
    }
});