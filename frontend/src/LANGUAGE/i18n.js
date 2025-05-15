import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: Cookies.get("language") || "en",
    fallbackLng: "en",
    returnObjects: true,
    detection: {
        order: ["cookie"],
        lookupCookie: "language",
        caches: ["cookie"]
    },
    resources: {
        en: {
            translation: {
                h1: "Revolutionizing Agriculture with AI Driven Smart Solutions",
                brand_para1: "CropHawk leverages edge cutting AI driven technology to tackle agricultural challenges, offering smart solutions for crop recommendation, yield prediction and precision farming insights.",
                enhancing_yield: "Enhancing Yield Prediction with AI Powered Insights",
                enhancing_yield_para: "At CropHawk, we leverage advanced AI technology to predict crop yields with unmatched accuracy. Our innovative approach provides farmers with valuable insights for better planning and higher productivity.",
                data_driven: "Data-Driven Farming Decisions",
                valuable_insights: "Valuable Insights for Farmers",
                optimized_productivity: "Optimized Crop Productivity",
                precise_heading: "Precise Recommendations for Optimal Fertilization",
                precise_para: "CropHawk's advanced data analysis enables accurate fertilizer recommendations, maximizing crop yield and minimizing waste. With our innovative technology, farmers can achieve optimal fertilization for healthier plants and increased profitability.",
                smart_crop_heading: "Smart Crop Recommendation System for Optimal Harvests",
                smart_crop_para: "CropHawk's intelligent crop recommendation system empowers farmers with data-driven insights to maximize yields. Our advanced AI analyzes soil and climate conditions, ensuring optimal crop selection for sustainable and profitable farming.",
                transforming_heading: "Transforming Agriculture Through Advanced Technology",
                transforming_para: "CropHawk's services begin with the development and deployment of cutting edge technologies that collect data on crop growth and other vital parameters.",
                service1_head: "Data-Driven Insights for Optimal Crop Management",
                service1_para: "Our team of agronomists and data scientists analyze the collected data to provide actionable insights for farmers.",
                service2_head: "Efficient Recommendation for Maximum Yield",
                service2_para: "Based on the data analysis, CropHawk recommends the most suitable fertilizer for each specific crop.",
                service3_head: "AI-Powered Yield Prediction for Smarter Farming",
                service3_para: "CropHawk utilizes AI technology to accurately forecast crop yields, helping farmers make informed decisions.",
                contact_heading: "Contact Us",
                contact_para: "Feel free to reach out to us at CropHawk! Our dedicated team is here to assist you. Whether you have questions, feedback, or inquiries, we're eager to hear from you.",
                send_message: "Send Message",
                name: "Name",
                email: "Email",
                your_message: "Your Message",
                submit: "Submit",
                learn_more: "Learn More",
                fertilizer_button: "Fertilizer Recommendation",
                crop_button: "Crop Recommendation",
                login: "Login",
                logout: "Sign Out",
                nav: {
                    "news": "News",
                    "services": "Services",
                    "yield": "Yield Prediction",
                    "crop": "Crop Recommendation",
                    "fertilizer": "Fertilizer Recommendation",
                    "login": "Login",
                    "greeting": "Hi"
                },
                footer: {
                    about_us: "About Us",
                    services: "Services",
                    solutions: "Solutions",
                    contact_us: "Contact Us",
                    copyright: "© {{year}} CropHawk. All rights reserved.",
                    made_by: "Made with ❤️ by Yatharth"
                },
                cropRecPage: {
                    title: "Crop Recommendation",
                    nitrogen: "Nitrogen (in kg/ha)",
                    phosphorous: "Phosphorous (in kg/ha)",
                    potassium: "Potassium (in kg/ha)",
                    temperature: "Temperature (in °C)",
                    humidity: "Humidity (in %)",
                    pH: "pH (in pH Scale)",
                    rainfall: "Rainfall (in mm)",
                    fillAllFieldsAlert: "Please fill out all fields before predicting.",
                    invalidValuesAlert:
                        "Please provide valid input values:\n- Nitrogen, Phosphorous, Potassium, Temperature, Humidity: 0 to 100\n- pH: 0 to 14\n- Rainfall: 0 or above",
                    predictButton: "Predict",
                    predictingButton: "Predicting...",
                    fetchError: "Failed to fetch recommendation. Please try again."
                },
                fertRecPage: {
                    title: "Fertilizer Recommendation",
                    temperature: "Temperature (in °C )",
                    humidity: "Humidity (in %)",
                    moisture: "Moisture (in %)",
                    soilType: "Soil Type",
                    cropType: "Crop Type",
                    nitrogen: "Nitrogen (in kg/ha)",
                    potassium: "Potassium (in kg/ha)",
                    phosphorous: "Phosphorous (in kg/ha)",
                    predictButton: "Predict",
                    predictingButton: "Predicting...",
                    invalidInputAlert: "Please provide valid input values for the given parameters.",
                    fetchError: "Failed to fetch recommendation. Please try again."
                }

            }
        },
        hi: {
            translation: {
                h1: "AI-संचालित स्मार्ट समाधानों के साथ कृषि में क्रांति",
                brand_para1: "CropHawk उन्नत AI तकनीक का उपयोग करके कृषि की चुनौतियों का समाधान करता है और फसल सिफारिश, उपज पूर्वानुमान और सटीक कृषि में स्मार्ट समाधान प्रदान करता है।",
                enhancing_yield: "AI-समर्थित अंतर्दृष्टि के साथ उपज पूर्वानुमान को बेहतर बनाना",
                enhancing_yield_para: "CropHawk उन्नत AI तकनीक का उपयोग करता है ताकि किसानों को बेहतर योजना और अधिक उत्पादकता के लिए मूल्यवान जानकारी प्रदान की जा सके।",
                data_driven: "डेटा-आधारित कृषि निर्णय",
                valuable_insights: "किसानों के लिए मूल्यवान अंतर्दृष्टि",
                optimized_productivity: "अनुकूलित फसल उत्पादकता",
                precise_heading: "उत्तम उर्वरक सिफारिशों के लिए सटीक सुझाव",
                precise_para: "CropHawk का उन्नत डेटा विश्लेषण सटीक उर्वरक सिफारिशें प्रदान करता है, जिससे फसल की उपज अधिकतम होती है और अपशिष्ट कम होता है।",
                smart_crop_heading: "स्मार्ट फसल सिफारिश प्रणाली",
                smart_crop_para: "CropHawk की AI आधारित प्रणाली मिट्टी और जलवायु का विश्लेषण कर सर्वोत्तम फसल चुनने में मदद करती है।",
                transforming_heading: "उन्नत तकनीक के माध्यम से कृषि में बदलाव",
                transforming_para: "CropHawk नवीनतम तकनीकों के साथ डेटा एकत्र कर किसानों को मूल्यवान जानकारी प्रदान करता है।",
                service1_head: "इष्टतम फसल प्रबंधन के लिए डेटा-आधारित अंतर्दृष्टि",
                service1_para: "हमारी टीम एकत्रित डेटा का विश्लेषण करके किसानों के लिए व्यावहारिक सुझाव प्रदान करती है।",
                service2_head: "अधिकतम उपज के लिए कुशल सिफारिश",
                service2_para: "डेटा विश्लेषण के आधार पर, CropHawk प्रत्येक फसल के लिए सबसे उपयुक्त उर्वरक की सिफारिश करता है।",
                service3_head: "स्मार्ट कृषि के लिए AI-आधारित उपज पूर्वानुमान",
                service3_para: "CropHawk सटीक उपज पूर्वानुमान के लिए AI तकनीक का उपयोग करता है, जिससे किसान सूचित निर्णय ले सकें।",
                contact_heading: "संपर्क करें",
                contact_para: "CropHawk से संपर्क करने के लिए स्वतंत्र महसूस करें! हमारी समर्पित टीम आपकी सहायता के लिए हमेशा तैयार है।",
                send_message: "संदेश भेजें",
                name: "नाम",
                email: "ईमेल",
                your_message: "आपका संदेश",
                submit: "सबमिट करें",
                learn_more: "और जानें",
                fertilizer_button: "उर्वरक सिफारिश",
                crop_button: "फसल सिफारिश",
                login: "लॉगिन",
                logout: "साइन आउट",
                nav: {
                    "news": "समाचार",
                    "services": "सेवाएं",
                    "yield": "उपज पूर्वानुमान",
                    "crop": "फसल सिफारिश",
                    "fertilizer": "उर्वरक सिफारिश",
                    "login": "लॉगिन",
                    "greeting": "नमस्ते"
                },
                footer: {
                    about_us: "हमारे बारे में",
                    services: "सेवाएं",
                    solutions: "समाधान",
                    contact_us: "संपर्क करें",
                    copyright: "© {{year}} CropHawk. सर्वाधिकार सुरक्षित।",
                    made_by: "Yatharth द्वारा ❤️ के साथ बनाया गया"
                },
                cropRecPage: {
                    title: "फसल सिफारिश",
                    nitrogen: "नाइट्रोजन (किलो/हेक्टेयर)",
                    phosphorous: "फॉस्फोरस (किलो/हेक्टेयर)",
                    potassium: "पोटैशियम (किलो/हेक्टेयर)",
                    temperature: "तापमान (°C में)",
                    humidity: "नमी (%)",
                    pH: "pH (pH पैमाने में)",
                    rainfall: "बारिश (मिमी में)",
                    fillAllFieldsAlert: "कृपया भविष्यवाणी से पहले सभी फ़ील्ड भरें।",
                    invalidValuesAlert:
                        "कृपया मान्य इनपुट मान प्रदान करें:\n- नाइट्रोजन, फॉस्फोरस, पोटैशियम, तापमान, नमी: 0 से 100\n- pH: 0 से 14\n- बारिश: 0 या उससे अधिक",
                    predictButton: "पूर्वानुमान लगाएं",
                    predictingButton: "पूर्वानुमान लग रहा है...",
                    fetchError: "सिफारिश प्राप्त करने में विफल। कृपया पुनः प्रयास करें।"
                },
                fertRecPage: {
                    title: "उर्वरक सिफारिश",
                    temperature: "तापमान (°C में)",
                    humidity: "आर्द्रता (% में)",
                    moisture: "माटी में नमी (% में)",
                    soilType: "मिट्टी का प्रकार",
                    cropType: "फसल का प्रकार",
                    nitrogen: "नाइट्रोजन (किग्रा/हेक्टेयर में)",
                    potassium: "पोटैशियम (किग्रा/हेक्टेयर में)",
                    phosphorous: "फॉस्फोरस (किग्रा/हेक्टेयर में)",
                    predictButton: "भविष्यवाणी करें",
                    predictingButton: "भविष्यवाणी की जा रही है...",
                    invalidInputAlert: "कृपया दिए गए मानदंडों के लिए मान्य इनपुट मान प्रदान करें।",
                    fetchError: "सिफारिश प्राप्त करने में विफल। कृपया पुनः प्रयास करें।"
                }
            }
        }
    }
});

const checkLanguage = () => {
    const currentLanguage = i18n.language;
    const cookieLanguage = Cookies.get("language");

    if (cookieLanguage && cookieLanguage !== currentLanguage) {
        i18n.changeLanguage(cookieLanguage);
    }
};

setInterval(checkLanguage, 1000);

export default i18n;
