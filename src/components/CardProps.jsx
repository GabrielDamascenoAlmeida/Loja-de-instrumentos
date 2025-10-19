import style from './css/CardProps.module.css'
import produto from '../assets/images/classico.png'

export default function CardProps () {
    return (
            <div className={style.white_div}>
                <img src={produto} alt="imagem do instrumento" className={style.classico}/>
                 <p>VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE</p>
                 <p id={style.preco}>R$ 989,50</p>
            </div>
    )
}