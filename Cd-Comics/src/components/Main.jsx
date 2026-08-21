import './Main.css';

import digitalComics from '../assets/buy-comics-digital-comics.png';
import merchandiseComics from '../assets/buy-comics-merchandise.png';
import shopLocator from '../assets/buy-comics-shop-locator.png';
import subscriptionsComics from '../assets/buy-comics-subscriptions.png';
import dcPowerVisa from '../assets/buy-dc-power-visa.svg';
import LogoBackGround from '../assets/dc-logo-bg.png';
import FooterBg from '../assets/footer-bg.jpg';


const Content = () => (
    <a href="" className='link'>-- Content Goes Here --</a>
)

const Descrizione = () => (

    <div className='Background_image'>

        <img className='img' src={digitalComics} alt="DigitalComics" />
        <p className='nomeone'>DIGITAL COMICS</p>

        <img className='img' src={merchandiseComics} alt="DigitalComics" />
        <p className='nomeone'> DC MERCHANDISE</p>

        <img className='img' src={subscriptionsComics} alt="DigitalComics" />
        <p className='nomeone'> SUBSCRIPTIONS</p>

        <img className='img' src={shopLocator} alt="DigitalComics" />
        <p className='nomeone'> COMICS SHOP LOCAL</p>

        <img className='img' src={dcPowerVisa} alt="DigitalComics" />
        <p className='nomeone'> DC POWER VISA</p>


    </div>
)

const Lista = () => (

    <div className='Contenitori'>
        <ul className='List'>
            <h1 className='title' >DC COMICS</h1>
            <section className='Caratteri'>
                <p>Charectrs</p>
                <p>Comics</p>
                <p>Movies</p>
                <p>TV</p>
                <p>Games</p>
                <p>Videos</p>
                <p>News</p>

            </section>



        </ul>

        <ul className='List'>
            <h1 className='title' >SHOP</h1>
            <section className='Caratteri'>
                <p>Shop DC</p>
                <p>Shop DC Collectibles</p>

            </section>

        </ul>

        <ul className='List'>
            <h1 className='title' >DC </h1>
            <section className='Caratteri'>
                <p>Terms Of Use</p>
                <p>Privacy policy (New)</p>
                <p>Ad Choices</p>
                <p>Advertising</p>
                <p>Jobs</p>
                <p>Subscriptions</p>
                <p>Talent Workshops</p>
                <p>CPSC Certificates</p>
                <p>Ratings</p>
                <p>Shop Help</p>
                <p>Contact Us</p>

            </section>

        </ul>
        <ul className='List'>
            <h1 className='title' >SITES </h1>
            <section className='Caratteri'>
                <p>DC</p>
                <p>MAD Magazine</p>
                <p>DC Kids</p>
                <p>DC Universe</p>
                <p>DC Power Visa</p>

            </section>



        </ul>


        <section >

            <img className="Bgimage" src={LogoBackGround} alt="BgDescrizione" />

        </section>

    </div>



);


export const Main = () => (

    <main>


        <Content />
        <Descrizione />
        <Lista />



    </main>
)