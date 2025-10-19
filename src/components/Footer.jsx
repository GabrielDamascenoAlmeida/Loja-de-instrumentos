import whatzapp from '../assets/images/WhatsApp.png'
import instagram from '../assets/images/Instagram_logo_2022.png'
import facebook from '../assets/images/facebook.png'
import style from './css/Footer.module.css'


export default function Footer () {
    return (
        <footer>
            <h3>Nossa loja - Instrumentos Musicais</h3>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>
            <div>
                <a href="#"><img src={whatzapp} alt="WhatsApp" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={facebook} alt="facebook" /></a>                   
            </div>
        </footer>
    )
}