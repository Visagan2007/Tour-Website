import './Footer.css';
function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="logo-line">Thendral Tours</div>
                <div className="tag">carrying you somewhere new</div>
                <div className="social-row">
                    <a href='https://web.whatsapp.com/' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp'><i aria-hidden="true" className="bi bi-whatsapp" id='CBB1'></i></a>
                    <a href='https://www.instagram.com/?hl=en' target='_blank' rel='noopener noreferrer' aria-label='Instagram'><i aria-hidden="true" className="bi bi-instagram" id='CBB2'></i></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'><i aria-hidden="true" className="bi bi-facebook" id='CBB3'></i></a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' aria-label='YouTube'><i aria-hidden="true" className="bi bi-youtube" id='CBB4'></i></a>
                    <a href='https://in.linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><i aria-hidden="true" className="bi bi-linkedin" id='CBB5'></i></a>
                    <a href='https://x.com/' target='_blank' rel='noopener noreferrer' aria-label='X'><i aria-hidden="true" className="bi bi-twitter-x" id='CBB6'></i></a>
                    <a href='https://discord.com/channels/@me' target='_blank' rel='noopener noreferrer' aria-label='Discord'><i aria-hidden="true" className="bi bi-discord" id='CBB7'></i></a>
                </div>
                <div className="copy">© 2026 Thendral Tours. All rights reserved.</div>
            </footer>
        </>
    )
}
export default Footer;
