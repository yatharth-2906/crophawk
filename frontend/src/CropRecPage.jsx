import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import ShowRecc from "./ShowRecc";
import styles from "./Recommendations.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CropRecPage() {
  const { t } = useTranslation();

  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  const [getFert, setFert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://crophawk-api.onrender.com/";

  const predict = async () => {
    const inputs = {
      nitrogen: document.getElementById("nitrogen").value,
      phosphorous: document.getElementById("phosphorous").value,
      potassium: document.getElementById("potassium").value,
      temperature: document.getElementById("temperature").value,
      humidity: document.getElementById("humidity").value,
      pH: document.getElementById("pH").value,
      rainfall: document.getElementById("rainfall").value,
    };

    if (Object.values(inputs).some((value) => value === "")) {
      alert(t("cropRecPage.fillAllFieldsAlert"));
      return;
    }

    const parsedInputs = {
      nitrogen: parseInt(inputs.nitrogen, 10),
      phosphorous: parseInt(inputs.phosphorous, 10),
      potassium: parseInt(inputs.potassium, 10),
      temperature: parseInt(inputs.temperature, 10),
      humidity: parseFloat(inputs.humidity, 10),
      pH: parseFloat(inputs.pH, 10),
      rainfall: parseFloat(inputs.rainfall, 10),
    };

    if (
      parsedInputs.nitrogen < 0 ||
      parsedInputs.nitrogen > 100 ||
      parsedInputs.phosphorous < 0 ||
      parsedInputs.phosphorous > 100 ||
      parsedInputs.potassium < 0 ||
      parsedInputs.potassium > 100 ||
      parsedInputs.temperature < 0 ||
      parsedInputs.temperature > 100 ||
      parsedInputs.humidity < 0 ||
      parsedInputs.humidity > 100 ||
      parsedInputs.pH < 0 ||
      parsedInputs.pH > 14 ||
      parsedInputs.rainfall < 0
    ) {
      alert(t("cropRecPage.invalidValuesAlert"));
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}crop_recommendation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInputs),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`API error: ${errorMessage}`);
      }

      const result = await response.json();
      setFert(result.res || "No recommendation available");
    } catch (err) {
      console.error("Error during api call:", err);
      setError(t("cropRecPage.fetchError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.recc_body}>
      <div className={styles.recc_content}>
        <br />
        <center>
          <h1>{t("cropRecPage.title")}</h1>
        </center>
        <br />

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.nitrogen")}</p>
          <input id="nitrogen" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.phosphorous")}</p>
          <input id="phosphorous" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.potassium")}</p>
          <input id="potassium" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.temperature")}</p>
          <input id="temperature" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.humidity")}</p>
          <input id="humidity" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.pH")}</p>
          <input id="pH" className={styles.input_value} type="number" />
        </div>

        <div className={styles.input_container}>
          <p className={styles.input_name}>{t("cropRecPage.rainfall")}</p>
          <input id="rainfall" className={styles.input_value} type="number" min="0" required />
        </div>

        <br />
        <button className="learn_more_btn btn_transition" onClick={predict} disabled={loading}>
          {loading ? t("cropRecPage.predictingButton") : t("cropRecPage.predictButton")}
        </button>
        <br />

        {error && <div className={styles.error}>{error}</div>}
        {loading && (
          <div className={`${styles.loading_spinner_box} ${styles.show_recc_container}`}>
            <div className={`${styles.spinner_roller} ${styles.show_recc_container}`}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        {!loading && getFert && <ShowRecc thing="Crop" getFert={getFert} />}
      </div>
    </div>
  );
}

export default CropRecPage;
