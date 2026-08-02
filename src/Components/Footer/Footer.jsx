import './Footer.css';
function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="logo-line">Thendral Tours</div>
                <div className="tag">carrying you somewhere new</div>
                <div className="social-row">
                    <a href="#"><i className="bi bi-whatsapp" id='CBB1'></i></a>
                    <a href="#"><i className="bi bi-instagram" id='CBB2'></i></a>
                    <a href="#"><i className="bi bi-facebook" id='CBB3'></i></a>
                    <a href="#"><i className="bi bi-youtube" id='CBB4'></i></a>
                    <a href="#"><i className="bi bi-linkedin" id='CBB5'></i></a>
                    <a href="#"><i className="bi bi-twitter-x" id='CBB6'></i></a>
                    <a href="#"><i className="bi bi-discord" id='CBB7'></i></a>
                </div>
                <div className="copy">© 2026 Thendral Tours. All rights reserved.</div>
            </div>
        </>
    )
}
export default Footer;