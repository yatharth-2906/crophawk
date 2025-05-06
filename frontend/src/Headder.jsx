import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { useContextUser } from "./CONTEXT_PROVIDERS/UserProvider";

function Headder() {
    const { user } = useContextUser();

    return (
        <nav className="nav_bar">
            <div className="nav_btn_container">
                <button className="dropbtn">≡</button>
                <div className="dropdown-content">
                    <Link to="/news">News</Link>
                    <Link to="/yield_prediction">Yield Prediction</Link>
                    <Link to="/crop_rec">Crop Recommendation</Link>
                    <Link to="/fertilizer_recommendation">Fertilizer Recommendation</Link>
                </div>
            </div>

            <div className="nav-content">
                <Link to="/news">News</Link>
                <Dropdown className="services_dropdown">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="services_dropdown_heading">
                        Services
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="services_dropdown_menu">
                        <Dropdown.Item as={Link} to="/yield_prediction" className="services_dropdown_links">
                            Yield Prediction
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/crop_recommendation" className="services_dropdown_links">
                            Crop Recommendation
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/fertilizer_recommendation" className="services_dropdown_links">
                            Fertilizer Recommendation
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="logo_img_container">
                <Link to="/"><h1 className="logo_text">CropHawk</h1></Link>
            </div>

            <div className="sign_up_btn_container">
                {!user ? <Link className="sign_up_btn btn_transition" to="/login">Login</Link> : <p className="user_name">Hi, {user['name']}</p> }
            </div>
        </nav>
    );
}

export default Headder;
