import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footter() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <div id="footer">
            <br />

            <div className="footer_div">
                <div className="footer_actions">
                    <a href="/#brand_heead">{t("footer.about_us")}</a>
                    <a href="/#soil_health">{t("footer.services")}</a>
                    <a href="/#rev">{t("footer.solutions")}</a>
                    <a href="/#form_section">{t("footer.contact_us")}</a>
                </div>
            </div>

            <br />

            <div className="footer_line_container">
                <hr className="footer_line" />
            </div>

            <br />

            <div className="footer_rem">
                <div className="copyright">
                    {t("footer.copyright", { year })}
                </div>
                <div className="policies">
                    <Link
                        to="https://github.com/yatharth-2906/crophawk"
                        target="__blank"
                        rel="noopener noreferrer"
                    >
                        {t("footer.made_by")}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footter;
