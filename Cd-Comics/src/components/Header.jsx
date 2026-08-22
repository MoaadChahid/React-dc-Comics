import './Header.css';
import dcLogo from '../assets/dc-logo.png';




////LOGO/////////
const Logo = () => (
    <img className='Image' src={dcLogo} alt="Logo DC-Comics" />
)

const NavBar = [

    { id: 1, href: "#", contenuto: "CHARACTERS", active: false, },
    { id: 2, href: "#", contenuto: "COMICS", active: true, },
    { id: 3, href: "#", contenuto: "MOVIES", active: false, },
    { id: 4, href: "#", contenuto: "TV ", active: false, },
    { id: 5, href: "#", contenuto: "GAMES", active: false, },
    { id: 6, href: "#", contenuto: "COLLECTIBLES", active: false, },
    { id: 7, href: "#", contenuto: "VIDEOS", active: false, },
    { id: 8, href: "#", contenuto: "FANS", active: false, },
    { id: 9, href: "#", contenuto: "NEWS", active: false, },
    { id: 10, href: "#", contenuto: "SHOP", active: false, },

]



///////NAVABAR///////
const Nav = () => (

    (

        <section >
            <ul className='navbar'>
                {NavBar.map(link => (
                    <li key={link.id} className={link.active ? "active" : " "}>

                        <a href={link.href}>{link.contenuto}</a>

                    </li>
                ))}
            </ul>
        </section>

    )

);



export const Header = () => (

    <header>
        <Logo />
        <Nav />


    </header>
)