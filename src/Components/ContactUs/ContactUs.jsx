import './ContactUs.css';
function ContactUs() {
    return (
        <div className='CPage'>
            <div className='COuterBox'><div className='CBlur'></div></div>
            <div className="CScrool">
                <form className='CB1' onSubmit={(e) => e.preventDefault()}>
                    <div className='CBS1'>
                        <h1 className='CH1'><i aria-hidden="true" className="bi bi-person-fill"></i> Enquire now</h1>
                    </div>

                    <label className='CT1' htmlFor='c-name'>Name</label>
                    <input type="text" name='name' id='c-name' className='CI1' placeholder='Enter your name' />

                    <label className='CT1' htmlFor='c-phone'>Phone</label>
                    <input type="tel" name='phone' id='c-phone' className='CI1' placeholder='Enter your phone no' />

                    <label className='CT1' htmlFor='c-email'>Email</label>
                    <input type="email" name='email' id='c-email' className='CI1' placeholder='Enter your email' />

                    <label className='CT1' htmlFor='c-info'>Info</label>
                    <textarea id='c-info' className='CAB1'></textarea>

                    <button type='submit' className='CSB1'>Submit</button>
                </form>

                <div className='CB2'>
                    <a href='https://web.whatsapp.com/' target='_blank' rel='noopener noreferrer' aria-label='WhatsApp' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-whatsapp" id='CBB1'></i>
                    </a>
                    <a href='https://www.instagram.com/?hl=en' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-instagram" id='CBB2'></i>
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-facebook" id='CBB3'></i>
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' aria-label='YouTube' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-youtube" id='CBB4'></i>
                    </a>
                    <a href='https://in.linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-linkedin" id='CBB5'></i>
                    </a>
                    <a href='https://x.com/' target='_blank' rel='noopener noreferrer' aria-label='X' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-twitter-x" id='CBB6'></i>
                    </a>
                    <a href='https://discord.com/channels/@me' target='_blank' rel='noopener noreferrer' aria-label='Discord' className='social-icon'>
                        <i aria-hidden="true" className="bi bi-discord" id='CBB7'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;
