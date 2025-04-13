import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineInsights } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";

function HomePage(){
    const { user, handleLogout } = useContextUser();

    return <>
    <main>
        <img id="brand_desc" className="brand_img" src="./src/assets/home_bg.jpg" alt="Brand Image" />
        <section className="brand_desc">
            <div className="brand_desc_heading">
                <h1 id="brand_heead">Revolutionizing Agriculture with AI-Driven Smart Solutions</h1>
            </div>

            <div className="brand_para">
                <div className="brand_para1">CropHawk leverages edge cutting AI driven technology to tackle agricultural challenges, offering smart solutions for crop recommendation, yield prediction and precision farming insights.</div>

                <div className="brand_para2">
                    <a className="learn_more_btn btn_transition" href="#">Learn More</a>
                    {!user ? <Link className="sign_up_btn btn_transition" to="/login">Login</Link> : <button className="sign_up_btn btn_transition sign_out" onClick={handleLogout}>Sign Out</button> }
                </div>
            </div>
        </section>

        <br /><br /><br /><br />   

        <section className="soil_health" id="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Enhancing Yield Prediction with AI Powered Insights</h2>
                </div>

                <div className="soil_health_para">
                    At CropHawk, we leverage advanced AI technology to predict crop yields with unmatched accuracy. Our innovative approach provides farmers with valuable insights for better planning and higher productivity.
                </div>

                <br />

                <div>
                    <ul className="soil_health_list">
                        <li> <FaDatabase className="icons_list"/> 
                        Data-Driven Farming Decisions</li> 
                        <li> <GiFarmer className="icons_list"/>
                        Valuable Insights for Farmers</li>
                        <li> <MdOutlineInsights className="icons_list" />
                        Optimized Crop Productivity</li>
                    </ul>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/soil_health.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Precise Recommendations for Optimal Fertilization</h2>
                </div>

                <div className="soil_health_para">CropHawk's advanced data analysis enables accurate fertilizer recommendations, maximizing crop yield and minimizing waste. With our innovative technology, farmers can achieve optimal fertilization for healthier plants and increased profitability.</div>

                <br />

                <div className="soil_health_para_btn">
                    <Link className="learn_more_btn_contrast btn_transition" to="/learn_more">Learn More</Link>
                    <Link className="learn_more_btn btn_transition" to="/fertilizer_recommendation">Fertilizer Recommendation</Link>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/fertilizer_recommendation.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="soil_health">
            <div className="soil_health_text">
                <div className="soil_health_heading">
                    <h2>Smart Crop Recommendation System for Optimal Harvests</h2>
                </div>

                <div className="soil_health_para">CropHawk's intelligent crop recommendation system empowers farmers with data-driven insights to maximize yields. Our advanced AI analyzes soil and climate conditions, ensuring optimal crop selection for sustainable and profitable farming.</div>

                <br />

                <div className="soil_health_para_btn">
                    <Link className="learn_more_btn_contrast btn_transition" to="/learn_more">Learn More</Link>
                    <Link className="learn_more_btn btn_transition" to="/crop_recommendation">Crop Recommendation</Link>
                </div>
            </div>
            
            <div className="soil_health_img_container">
                <img className="soil_health_img" src="./src/assets/efficient_spraying.jpg" alt="Soil health Image" />
            </div>
        </section>

        <br /><br /><br /><br />

        <section className="rev" id="rev">
            <div>
                <h1 className="rev_heading">Transforming Agriculture Through Drone Technology</h1>
            </div>

            <p className="rev_para">CropHawk's services begin with the deployment of advanced drones equipped with cutting edge sensors. These drones collect data on soil health, crop growth, and other vital parameters.</p>
        </section>

        <br /><br /><br /><br />

        <section className="services">
                <div className="services_element">
                    <img className="services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">Data-Driven Insights for Optimal Crop Management</div>

                    <div className="services_para">Our team of agronomists and data scientists analyze the collected data to provide actionable insights for farmers.</div>
                </div>

                <br /><br />

                <div className="services_element">
                    <img className=" services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">Efficient Recommendation for Maximum Yield</div>

                    <div className="services_para">Based on the data analysis, CropHawk recommends the most suitable fertilizer for each specific crop.</div>
                </div>

                <br /><br />

                <div className="services_element">
                    <img className=" services_img" src="./src/assets/box_3d.svg" alt="" />

                    <div className="services_head">AI-Powered Yield Prediction for Smarter Farming</div>

                    <div className="services_para">CropHawk utilizes AI technology to accurately forecast crop yields, helping farmers make informed decisions.</div>
                </div>
        </section>

        <div className="brand_para2">
            <Link className="learn_more_btn btn_transition" to="/learn_more">Learn More</Link>
            {!user ? <Link className="sign_up_btn btn_transition" to="/login">Login</Link> : <button className="sign_up_btn btn_transition sign_out" onClick={handleLogout}>Sign Out</button> }
        </div>

        <br /><br />

        <section className="form_section" id="form_section">
            <h1 className="form_heading">Contact Us</h1>
            <p className="form_para">Feel free to reach out to us at CropHawk! Our dedicated team is here to assist you. Whether you have questions, feedback, or inquiries, we're eager to hear from you.</p>

            <div className="form_div">
                <div className="details">
                    <div className="details-item">
                        <div className="details-icon">
                        <i><FaHome /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Address</h4>
                          <p className="form_para">4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                        </div>
                      </div>

                      <div className="details-item">
                        <div className="details-icon">
                        <i><FaPhone /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Phone</h4>
                          <p className="form_para">+91 XX XXXX XXXX</p>
                        </div>
                      </div>

                      <div className="details-item">
                        <div className="details-icon">
                        <i><MdEmail /></i>
                        </div>
                        
                        <div className="details-content">
                          <h4 className="form_detail_heading">Email</h4>
                          <p className="form_para">crophawk@gmail.co.in</p>
                        </div>
                      </div>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
                    <input type="hidden" name="access_key" value="7a472bdd-13cd-46ad-9d27-defa5ba4f0e8" />

                    <h2 className="form_heading">Send Message</h2>

                    <div className="inputt_container">
                        <input className="inputt" type="text" required= {true} placeholder="Name" name="name" />
                    </div>
                    <div className="inputt_container">
                        <input className="inputt" type="email" required= {true} placeholder="Email" name="email" />
                    </div>
                    <div className="form-textarea-container">
                        <textarea id="form-textarea" placeholder="Your Message" name="message"></textarea>
                    </div>
                    
                    <br />
                    <button className="submit_btn btn_transition" type="submit">Submit</button>
                  </form>
            </div>
        </section>
    </main>
    </>
}

export default HomePage;