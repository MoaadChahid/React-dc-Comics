import './Header.css';
import dcLogo from '../assets/dc-logo.png';




////LOGO/////////
const Logo = () => (
    <img className='Image' src={dcLogo} alt="Logo DC-Comics" />
)





///////NAVABAR///////
const Nav = () => (


    <ul className='navbar'>
        <li><a href="#">CHARACTERS</a></li>
        <li><a href="#" className="active">COMICS</a></li>
        <li><a href="#">MOVIES</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">GAMES</a></li>
        <li><a href="#">COLLECTIBLES</a></li>
        <li><a href="#">VIDEOS</a></li>
        <li><a href="#">FANS</a></li>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">SHOP</a></li>


    </ul>
);



export const Header = () => (

    <header>
        <Logo />
        <Nav />


    </header>
)