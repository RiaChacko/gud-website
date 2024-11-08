import logo from '../assets/GUD-logo.svg';
import './Navbar.css';
import hamburger from '../assets/hamburger.png';
import { useState, useRef, useEffect } from 'react';
import instagram from '../assets/instagram-icon.svg';
import slack from '../assets/slack-icon.svg';
import linktree from '../assets/linktree-icon.svg';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='navbar' ref={navRef}>
            <nav className='nav'>
                <a href='/'>
                    <img src={logo} alt='GUD Logo' />
                </a>
                <ul className={menuOpen ? 'open' : ''}>
                    <CustomLink href='/about'>About</CustomLink>
                    <CustomLink href='/events'>Events</CustomLink>
                    <CustomLink href='/officers'>Officers</CustomLink>
                    <CustomLink href='/design-teams'>Design Teams</CustomLink>
                    <CustomLink href='/gallery'>Gallery</CustomLink>
                    <CustomLink href='/resources'>Resources</CustomLink>
                    {menuOpen && (
                        <div className='contact-socials'>
                            <p>Contact Us</p>
                            <div className='social-icons'>
                                <li>
                                    <a href='https://www.instagram.com/gatoruserdesign/' target='_blank' rel='noopener noreferrer'>
                                        <img className='icon' src={instagram} alt='Instagram Icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://join.slack.com/t/gatoruserdesign/shared_invite/zt-1nofnnydf-75uKuXmWY8yXoKQsbl3NLw' target='_blank' rel='noopener noreferrer'>
                                        <img className='icon' src={slack} alt='Slack Icon' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://linktr.ee/gatoruserdesign' target='_blank' rel='noopener noreferrer'>
                                        <img className='icon' src={linktree} alt='Linktree Icon' />
                                    </a>
                                </li>
                            </div>
                        </div>
                    )}
                </ul>
                <button className={`hamburger ${menuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                    <div>
                        <img src={hamburger} alt='Menu Icon' />
                    </div>
                </button>
            </nav>
        </div>
    );
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? 'active' : ''}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    );
}

export default Navbar;

// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/GUD-logo.svg';
// import hamburger from '../assets/hamburger.png';
// import instagram from '../assets/instagram-icon.svg';
// import slack from '../assets/slack-icon.svg';
// import linktree from '../assets/linktree-icon.svg';
// import './Navbar.css';

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navRef = useRef(null);
//     const location = useLocation();

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const handleClickOutside = (event) => {
//         if (navRef.current && !navRef.current.contains(event.target)) {
//             setMenuOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     // Close menu when navigating to a new route
//     useEffect(() => {
//         setMenuOpen(false);
//     }, [location]);

//     return (
//         <div className='navbar' ref={navRef}>
//             <nav className='nav'>
//                 <Link to='/'>
//                     <img src={logo} alt='GUD Logo' />
//                 </Link>
//                 <ul className={menuOpen ? 'open' : ''}>
//                     <CustomLink to='/about'>About</CustomLink>
//                     <CustomLink to='/events'>Events</CustomLink>
//                     <CustomLink to='/officers'>Officers</CustomLink>
//                     <CustomLink to='/design-teams'>Design Teams</CustomLink>
//                     <CustomLink to='/gallery'>Gallery</CustomLink>
//                     <CustomLink to='/resources'>Resources</CustomLink>
//                     {menuOpen && (
//                         <div className='contact-socials'>
//                             <p>Contact Us</p>
//                             <div className='social-icons'>
//                                 <li>
//                                     <a href='https://www.instagram.com/gatoruserdesign/' target='_blank' rel='noopener noreferrer'>
//                                         <img className='icon' src={instagram} alt='Instagram Icon' />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href='https://join.slack.com/t/gatoruserdesign/shared_invite/zt-1nofnnydf-75uKuXmWY8yXoKQsbl3NLw' target='_blank' rel='noopener noreferrer'>
//                                         <img className='icon' src={slack} alt='Slack Icon' />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href='https://linktr.ee/gatoruserdesign' target='_blank' rel='noopener noreferrer'>
//                                         <img className='icon' src={linktree} alt='Linktree Icon' />
//                                     </a>
//                                 </li>
//                             </div>
//                         </div>
//                     )}
//                 </ul>
//                 <button className={`hamburger ${menuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
//                     <div>
//                         <img src={hamburger} alt='Menu Icon' />
//                     </div>
//                 </button>
//             </nav>
//         </div>
//     );
// }

// function CustomLink({ to, children, ...props }) {
//     const location = useLocation();
//     const isActive = location.pathname === to;

//     return (
//         <li className={isActive ? 'active' : ''}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     );
// }

// export default Navbar;
