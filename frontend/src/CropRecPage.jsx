import { useState } from "react";
import Cookies from "js-cookie";
import ShowRecc from "./ShowRecc";
import styles from "./Recommendations.module.css";
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";

function CropRecPage() {
    const token = Cookies.get('token');
    
    if(!token)
        window.location.replace('/login');

    const [getFert, setFert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = "https://crophawk-api.onrender.com/";

    const predict = async () => {
        // Collect inputs
        const inputs = {
            nitrogen: document.getElementById("nitrogen").value,
            phosphorous: document.getElementById("phosphorous").value,
            potassium: document.getElementById("potassium").value,
            temperature: document.getElementById("temperature").value,
            humidity: document.getElementById("humidity").value,
            pH: document.getElementById("pH").value,
            rainfall: document.getElementById("rainfall").value
        };

        // Check if any input is empty
        if (Object.values(inputs).some(value => value === "")) {
            alert("Please fill out all fields before predicting.");
            return;
        }

        // Convert inputs to numbers and validate ranges
        const parsedInputs = {
            nitrogen: parseInt(inputs.nitrogen, 10),
            phosphorous: parseInt(inputs.phosphorous, 10),
            potassium: parseInt(inputs.potassium, 10),
            temperature: parseInt(inputs.temperature, 10),
            humidity: parseFloat(inputs.humidity, 10),
            pH: parseFloat(inputs.pH, 10),
            rainfall: parseFloat(inputs.rainfall, 10)
        };

        // Validate input ranges
        if (
            parsedInputs.nitrogen < 0 || parsedInputs.nitrogen > 100 ||
            parsedInputs.phosphorous < 0 || parsedInputs.phosphorous > 100 ||
            parsedInputs.potassium < 0 || parsedInputs.potassium > 100 ||
            parsedInputs.temperature < 0 || parsedInputs.temperature > 100 ||
            parsedInputs.humidity < 0 || parsedInputs.humidity > 100 ||
            parsedInputs.pH < 0 || parsedInputs.pH > 14 ||
            parsedInputs.rainfall < 0
        ) {
            alert("Please provide valid input values:\n- Nitrogen, Phosphorous, Potassium, Temperature, Humidity: 0 to 100\n- pH: 0 to 14\n- Rainfall: 0 or above");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${API_URL}crop_recommendation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(parsedInputs),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`API error: ${errorMessage}`);
            }

            const result = await response.json();
            console.log("Crop Recommendation:", result.res);

            setFert(result.res || "No recommendation available"); // Handle unexpected response
        } catch (err) {
            console.error("Error during api call:", err);
            setError("Failed to fetch recommendation. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.recc_body}>
                <div className={styles.recc_content}>
                    <br />
                    <center><h1>Crop Recommendation</h1></center>
                    <br />

                    {/* Input fields */}
                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Nitrogen (in kg/ha)</p>
                        <input id="nitrogen" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Phosphorous (in kg/ha)</p>
                        <input id="phosphorous" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Potassium (in kg/ha)</p>
                        <input id="potassium" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Temperature (in °C )</p>
                        <input id="temperature" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Humidity (in %)</p>
                        <input id="humidity" className={styles.input_value} type="number" />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>pH (in pH Scale)</p>
                        <input id="pH" className={styles.input_value} type="number"  />
                    </div>

                    <div className={styles.input_container}>
                        <p className={styles.input_name}>Rainfall (in mm)</p>
                        <input id="rainfall" className={styles.input_value} type="number" min="0" required />
                    </div>

                    <br />
                    <button className="learn_more_btn btn_transition" onClick={predict} disabled={loading}>
                        {loading ? "Predicting..." : "Predict"}
                    </button>
                    <br />

                    {error && <div className={styles.error}>{error}</div>}
                    {loading && <div className={`${styles.loading_spinner_box} ${styles.show_recc_container}`}
                    > <div className={`${styles.spinner_roller} ${styles.show_recc_container}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>}
                    {!loading && getFert && <ShowRecc thing="Crop" getFert={getFert} />}
                </div>
            </div>
        </>
    );
}

export default CropRecPage;