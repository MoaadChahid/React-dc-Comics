import './Main.css';

import digitalComics from '../assets/buy-comics-digital-comics.png';
import merchandiseComics from '../assets/buy-comics-merchandise.png';
import shopLocator from '../assets/buy-comics-shop-locator.png';
import subscriptionsComics from '../assets/buy-comics-subscriptions.png';
import dcPowerVisa from '../assets/buy-dc-power-visa.svg';

const Content = () => (
    <a href="" className='link'>-- Content Goes Here --</a>
)

const Descrizione = () => (

    <div className='Background_image'>

        <img className='img_one' src={digitalComics} alt="DigitalComics" />
        <p className='nomeone'>DIGITAL COMICS</p>

        <img className='img_one' src={merchandiseComics} alt="DigitalComics" />
        <p className='nomeone'> DC MERCHANDISE</p>

        <img className='img_one' src={subscriptionsComics} alt="DigitalComics" />
        <p className='nomeone'> SUBSCRIPTIONS</p>

        <img className='img_one' src={shopLocator} alt="DigitalComics" />
        <p className='nomeone'> COMICS SHOP LOCAL</p>

        <img className='img_one' src={dcPowerVisa} alt="DigitalComics" />
        <p className='nomeone'> DC POWER VISA</p>


    </div>
)


export const Main = () => (

    <main>


        <Content />
        <Descrizione />


    </main>
)