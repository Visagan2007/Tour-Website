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

                    <label className='CT1'>Name</label>
                    <input type="text" name='name' className='CI1' placeholder='Enter your name' />

                    <label className='CT1'>Phone</label>
                    <input type="tel" name='phone' className='CI1' placeholder='Enter your phone no' />

                    <label className='CT1'>Email</label>
                    <input type="email" name='email' className='CI1' placeholder='Enter your email' />

                    <label className='CT1'>Info</label>
                    <textarea id='c-info' className='CAB1'></textarea>

                    <button type='submit' className='CSB1'>Submit</button>
                </form>

                <div className='CB2'>
                    <a href='https://web.whatsapp.com/' target='_blank' className='social-icon'>
                        <i className="bi bi-whatsapp" id='CBB1'></i>
                    </a>
                    <a href='https://www.instagram.com/?hl=en' target='_blank' className='social-icon'>
                        <i className="bi bi-instagram" id='CBB2'></i>
                    </a>
                    <a href='https://www.facebook.com/' target='_blank' className='social-icon'>
                        <i className="bi bi-facebook" id='CBB3'></i>
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' className='social-icon'>
                        <i className="bi bi-youtube" id='CBB4'></i>
                    </a>
                    <a href='https://in.linkedin.com/' target='_blank' className='social-icon'>
                        <i className="bi bi-linkedin" id='CBB5'></i>
                    </a>
                    <a href='https://x.com/' target='_blank' className='social-icon'>
                        <i className="bi bi-twitter-x" id='CBB6'></i>
                    </a>
                    <a href='https://discord.com/channels/@me' target='_blank' className='social-icon'>
                        <i className="bi bi-discord" id='CBB7'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;