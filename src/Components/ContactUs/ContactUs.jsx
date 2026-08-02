import './ContactUs.css';
function ContactUs() {
    return (
        <div className='CPage'>
            <div className='COuterBox'><div className='CBlur'></div></div>
            <div className="CScrool">
                <form className='CB1' onSubmit={(e) => e.preventDefault()}>
                    <div className='CBS1'>
                        <h1 className='CH1'><i className="bi bi-person-fill"></i> Enquire now</h1>
                    </div>

                    <label className='CT1' htmlFor='c-name'>Name</label>
                    <input type="text" id='c-name' name='name' className='CI1' placeholder='Enter your name' />

                    <label className='CT1' htmlFor='c-phone'>Phone</label>
                    <input type="tel" id='c-phone' name='phone' className='CI1' placeholder='Enter your phone no' />

                    <label className='CT1' htmlFor='c-email'>Email</label>
                    <input type="email" id='c-email' name='email' className='CI1' placeholder='Enter your email' />

                    <label className='CT1' htmlFor='c-info'>Info</label>
                    <textarea id='c-info' name='info' className='CAB1'></textarea>

                    <button type='submit' className='CSB1'>Submit</button>
                </form>

                <div className='CB2'>
                    <a href='https://web.whatsapp.com/' className='social-icon'>
                        <i className="bi bi-whatsapp" id='CBB1'></i>
                    </a>
                    <a href='https://www.instagram.com/?hl=en' className='social-icon'>
                        <i className="bi bi-instagram" id='CBB2'></i>
                    </a>
                    <a href='https://www.facebook.com/' className='social-icon'>
                        <i className="bi bi-facebook" id='CBB3'></i>
                    </a>
                    <a href='https://www.youtube.com/' className='social-icon'>
                        <i className="bi bi-youtube" id='CBB4'></i>
                    </a>
                    <a href='https://in.linkedin.com/' className='social-icon'>
                        <i className="bi bi-linkedin" id='CBB5'></i>
                    </a>
                    <a href='https://x.com/' className='social-icon'>
                        <i className="bi bi-twitter-x" id='CBB6'></i>
                    </a>
                    <a href='https://discord.com/channels/@me' className='social-icon'>
                        <i className="bi bi-discord" id='CBB7'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;