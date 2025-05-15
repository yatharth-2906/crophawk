import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineInsights } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";
import { useTranslation } from "react-i18next";

function HomePage() {
    const { user, handleLogout, language, handleLanguageChange } = useContextUser();
    const { t } = useTranslation();

    return (
        <>
            <main>
                <img id="brand_desc" className="brand_img" src="home_bg.jpg" alt="Brand Image" />
                <section className="brand_desc">
                    <div className="brand_desc_heading">
                        <h1 id="brand_heead">{t("h1")}</h1>
                    </div>

                    <div className="brand_para">
                        <div className="brand_para1">{t("brand_para1")}</div>
                        <div className="brand_para2">
                            <select value={language} onChange={handleLanguageChange} className="language_dropdown">
                                <option value="en" className="language_value">English</option>
                                <option value="hi" className="language_value">Hindi</option>
                            </select>
                            {!user ? <Link className="sign_up_btn btn_transition" to="/login">{t("login")}</Link> :
                                <button className="sign_up_btn btn_transition sign_out" onClick={handleLogout}>{t("logout")}</button>}
                        </div>
                    </div>
                </section>

                <br /><br /><br /><br />

                <section className="soil_health" id="soil_health">
                    <div className="soil_health_text">
                        <div className="soil_health_heading">
                            <h2>{t("enhancing_yield")}</h2>
                        </div>
                        <div className="soil_health_para">{t("enhancing_yield_para")}</div>
                        <br />
                        <ul className="soil_health_list">
                            <li><FaDatabase className="icons_list" />{t("data_driven")}</li>
                            <li><GiFarmer className="icons_list" />{t("valuable_insights")}</li>
                            <li><MdOutlineInsights className="icons_list" />{t("optimized_productivity")}</li>
                        </ul>
                    </div>
                    <div className="soil_health_img_container">
                        <img className="soil_health_img" src="soil_health.jpg" alt="Soil health" />
                    </div>
                </section>

                <br /><br /><br /><br />

                <section className="soil_health">
                    <div className="soil_health_text">
                        <div className="soil_health_heading">
                            <h2>{t("precise_heading")}</h2>
                        </div>
                        <div className="soil_health_para">{t("precise_para")}</div>
                        <br />
                        <div className="soil_health_para_btn">
                            <Link className="learn_more_btn_contrast btn_transition" to="https://github.com/yatharth-2906/crophawk-api" target="_blank">{t("learn_more")}</Link>
                            <Link className="learn_more_btn btn_transition" to="/fertilizer_recommendation">{t("fertilizer_button")}</Link>
                        </div>
                    </div>
                    <div className="soil_health_img_container">
                        <img className="soil_health_img" src="fertilizer_recommendation.jpg" alt="Fertilizer Recommendation" />
                    </div>
                </section>

                <br /><br /><br /><br />

                <section className="soil_health">
                    <div className="soil_health_text">
                        <div className="soil_health_heading">
                            <h2>{t("smart_crop_heading")}</h2>
                        </div>
                        <div className="soil_health_para">{t("smart_crop_para")}</div>
                        <br />
                        <div className="soil_health_para_btn">
                            <Link className="learn_more_btn_contrast btn_transition" to="https://github.com/yatharth-2906/crophawk-api" target="_blank">{t("learn_more")}</Link>
                            <Link className="learn_more_btn btn_transition" to="/crop_recommendation">{t("crop_button")}</Link>
                        </div>
                    </div>
                    <div className="soil_health_img_container">
                        <img className="soil_health_img" src="efficient_spraying.jpg" alt="Crop Recommendation" />
                    </div>
                </section>

                <br /><br /><br /><br />

                <section className="rev" id="rev">
                    <div><h1 className="rev_heading">{t("transforming_heading")}</h1></div>
                    <p className="rev_para">{t("transforming_para")}</p>
                </section>

                <br /><br /><br /><br />

                <section className="services">
                    <div className="services_element">
                        <img className="services_img" src="box_3d.svg" alt="" />
                        <div className="services_head">{t("service1_head")}</div>
                        <div className="services_para">{t("service1_para")}</div>
                    </div>
                    <br /><br />
                    <div className="services_element">
                        <img className=" services_img" src="box_3d.svg" alt="" />
                        <div className="services_head">{t("service2_head")}</div>
                        <div className="services_para">{t("service2_para")}</div>
                    </div>
                    <br /><br />
                    <div className="services_element">
                        <img className=" services_img" src="box_3d.svg" alt="" />
                        <div className="services_head">{t("service3_head")}</div>
                        <div className="services_para">{t("service3_para")}</div>
                    </div>
                </section>

                <div className="brand_para2">
                    <Link className="learn_more_btn_contrast btn_transition" to="https://github.com/yatharth-2906/crophawk-api" target="_blank">{t("learn_more")}</Link>
                    {!user ? <Link className="sign_up_btn btn_transition" to="/login">{t("login")}</Link> :
                        <button className="sign_up_btn btn_transition sign_out" onClick={handleLogout}>{t("logout")}</button>}
                </div>

                <br /><br />

                <section className="form_section" id="form_section">
                    <h1 className="form_heading">{t("contact_heading")}</h1>
                    <p className="form_para">{t("contact_para")}</p>

                    <div className="form_div">
                        <div className="details">
                            <div className="details-item">
                                <div className="details-icon"><i><FaHome /></i></div>
                                <div className="details-content">
                                    <h4 className="form_detail_heading">Address</h4>
                                    <p className="form_para">4671 Sugar Camp Road,<br />Owatonna, Minnesota,<br />55060</p>
                                </div>
                            </div>
                            <div className="details-item">
                                <div className="details-icon"><i><FaPhone /></i></div>
                                <div className="details-content">
                                    <h4 className="form_detail_heading">Phone</h4>
                                    <p className="form_para">+91 XX XXXX XXXX</p>
                                </div>
                            </div>
                            <div className="details-item">
                                <div className="details-icon"><i><MdEmail /></i></div>
                                <div className="details-content">
                                    <h4 className="form_detail_heading">Email</h4>
                                    <p className="form_para">crophawk@gmail.co.in</p>
                                </div>
                            </div>
                        </div>

                        <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
                            <input type="hidden" name="access_key" value="7a472bdd-13cd-46ad-9d27-defa5ba4f0e8" />
                            <h2 className="form_heading">{t("send_message")}</h2>
                            <div className="inputt_container">
                                <input className="inputt" type="text" required placeholder={t("name")} name="name" />
                            </div>
                            <div className="inputt_container">
                                <input className="inputt" type="email" required placeholder={t("email")} name="email" />
                            </div>
                            <div className="form-textarea-container">
                                <textarea id="form-textarea" placeholder={t("your_message")} name="message"></textarea>
                            </div>
                            <br />
                            <button className="submit_btn btn_transition" type="submit">{t("submit")}</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

export default HomePage;

