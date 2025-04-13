import { Link } from "react-router-dom";

function Footter(){
    const year = new Date().getFullYear();

    return <>
    <div id="footer">
        {/* <div className="logo_img_container">
            <h1 className="logo_text">CropHawk</h1>
        </div> */}

        <br />

        <div className="footer_div">
            <div className="footer_actions">
                <a href="/#brand_heead">About Us</a>
                <a href="/#soil_health">Services</a>
                <a href="/#rev">Solutions</a>
                <a href="/#form_section">Contact Us</a>
            </div>
        </div>

        <br />

        <div className="footer_line_container">
            <hr className="footer_line" />
        </div> 
        
        <br />

        <div className="footer_rem">
            <div className="copyright">© {year} CropHawk. All rights reserved.</div>
            <div className="policies">
                <Link to="https://github.com/yatharth-2906/crophawk-api" target="__blank" rel="noopener noreferrer">Made with ❤️ by CropHawk Team</Link>
            </div>
        </div>
    </div>
    </>
}

export default Footter;