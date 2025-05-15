import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";
import { useTranslation } from "react-i18next";

function Headder() {
  const { user } = useContextUser();
  const { t } = useTranslation();

  return (
    <nav className="nav_bar">
      <div className="nav_btn_container">
        <button className="dropbtn">≡</button>
        <div className="dropdown-content">
          <Link to="/news">{t("nav.news")}</Link>
          <Link to="/yield_prediction">{t("nav.yield")}</Link>
          <Link to="/crop_recommendation">{t("nav.crop")}</Link>
          <Link to="/fertilizer_recommendation">{t("nav.fertilizer")}</Link>
        </div>
      </div>

      <div className="nav-content">
        <Link to="/news">{t("nav.news")}</Link>
        <Dropdown className="services_dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="services_dropdown_heading">
            {t("nav.services")}
          </Dropdown.Toggle>

          <Dropdown.Menu className="services_dropdown_menu">
            <Dropdown.Item as={Link} to="/yield_prediction" className="services_dropdown_links">
              {t("nav.yield")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/crop_recommendation" className="services_dropdown_links">
              {t("nav.crop")}
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/fertilizer_recommendation" className="services_dropdown_links">
              {t("nav.fertilizer")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="logo_img_container">
        <Link to="/"><h1 className="logo_text">CropHawk</h1></Link>
      </div>

      <div className="sign_up_btn_container">
        {!user ? (
          <Link className="sign_up_btn btn_transition" to="/login">{t("nav.login")}</Link>
        ) : (
          <p className="user_name">{t("nav.greeting")}, {user["name"]}</p>
        )}
      </div>
    </nav>
  );
}

export default Headder;
