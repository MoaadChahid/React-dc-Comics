import './Footer.css';

import Facebook from '../assets/footer-facebook.png';
import Periscope from '../assets/footer-periscope.png';
import Pinterest from '../assets/footer-pinterest.png';
import Twitter from '../assets/footer-twitter.png';
import Youtube from '../assets/footer-youtube.png';





const Bottone = () => (


    <div className='BarraFooter'>
        <button className="btn">
            SIGN-UP NOW!
        </button>


        <section className='titleFooter'>

            <h2 >FOLLOW US</h2>
            <section className='smallImage'>
                <img className='FooterMargin' src={Facebook} alt="Facebook" />
                <img className='FooterMargin' src={Periscope} alt="Periscope" />
                <img className='FooterMargin' src={Pinterest} alt="Pinterest" />
                <img className='FooterMargin' src={Twitter} alt="Twitter" />
                <img className='FooterMargin' src={Youtube} alt="Youtube" />



            </section>



        </section>

    </div>
)





export const Footer = () => (

    <>


        <Bottone />


    </>
)