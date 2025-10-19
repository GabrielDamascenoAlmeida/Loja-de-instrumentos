import whatzapp from '../assets/images/WhatsApp.png'
import instagram from '../assets/images/Instagram_logo_2022.png'
import facebook from '../assets/images/facebook.png'
import style from './css/Form.module.css'

export default function Forms () {
    return (
       <section>
            <div className={style.cadastro_pedido}>
                <form action="">
                    <label htmlFor="nome">Entre com seu nome</label>
                    <input type="text" name="nome" className={style.input} placeholder="Digite seu nome aqui: "/>
                    <label htmlFor="nome">Entre com seu email: </label>
                    <input type="email" name="email" className={style.input} placeholder="Digite seu e-mail aqui: "/>
                    <textarea name="pedido" className={style.pedido} placeholder="Faça seu pedido aqui"></textarea>
                    <button type="submit" id={style.enviar}>Enviar</button>
                </form>
            </div>
            <div className={style.redes}>
                <h2>Acesse também nossas redes sociais: </h2>
                <div>
                    <a href="#"><img src={whatzapp} alt="Whatsapp" /></a>
                    <a href="#"><img src={instagram} alt="Facebook" /></a>
                    <a href="#"><img src={facebook} alt="Instagram" /></a>
                </div>
            </div>
        </section>
    )
}