import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

function useToken() {
    const [token, setToken] = useState(Cookies.get("token") || null);

    useEffect(() => {
        const checkToken = () => {
            const newToken = Cookies.get("token");
            if (newToken !== token) {
                setToken(newToken);
            }
        };

        const interval = setInterval(checkToken, 1000);

        return () => clearInterval(interval);
    }, [token]);

    return token;
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const handleLogout = () => {
        Cookies.remove("token");
        setUser(null);
    };

    const token = useToken();

    const backend_url = import.meta.env.VITE_BACKEND_URL;

    if(Cookies.get('language') === undefined) {
        Cookies.set('language', 'en');
    }

    const [language, setLanguage] = useState(Cookies.get('language') || 'en');

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        Cookies.set('language', selectedLang);
    };

    useEffect(() => {
        async function fetchUser() {
            if (!token) return;

            try {
                const response = await fetch(`${backend_url}/user/login?token=${token}`);
                const data = await response.json();
                if (response.ok) {
                    setUser(data);
                }
                else {
                    Cookies.remove("token");
                    setUser(null);
                };
            } catch (err) {
                console.log("User Authentication Error:", err);
                Cookies.remove("token");
                setUser(null);
            }
        }

        fetchUser();
    }, [token]);


    return (
        <UserContext.Provider value={{ user, setUser, handleLogout, backend_url, language, handleLanguageChange }}>
            {children}
        </UserContext.Provider>
    );
}

export function useContextUser() {
    return useContext(UserContext);
}