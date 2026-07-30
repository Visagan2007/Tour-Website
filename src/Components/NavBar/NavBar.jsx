import './NavBar.css'
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <div className="logo">
                <svg viewBox="10 0 40 40"><path d="M20 4 C10 10 6 20 20 36 C34 20 30 10 20 4Z" fill="#2E6F62" /><path d="M20 8 C13 13 11 21 20 32 C29 21 27 13 20 8Z" fill="#e3a478" /></svg>
                <div className="word">Thendral<span>TOURS</span></div>
            </div>
            <div className='TopBar'>
                <NavLink to='/' end className='Comp Box1'>Home</NavLink>
                <NavLink to='/aboutus' className='Comp Box2'>About Us</NavLink>
                <NavLink to='/trips' className='Comp Box2'>Trips</NavLink>
                <NavLink to='/contact' className='Comp Box2'>Contact Us</NavLink>
            </div>
        </>
    )
}
export default NavBar;