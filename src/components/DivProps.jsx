import style from "./css/DivProps.module.css"

export default function DivProps ({titulo1, titulo2, texto1, texto2, alt, imagemFundo, conteudo, oculto}) {
    return (
        <div className={style.div_container}>
            <div className={style.pink_div} id={style.texto}>
                <h2 className={oculto}>{titulo1}</h2>
                <p className={oculto}>{texto1}</p>
                {conteudo}
            </div>
            <div className={style.pink_div} id={style.texto} style={{backgroundImage: imagemFundo, backgroundSize:'cover'}} alt={alt}>
                <h2>{titulo2}</h2>
                <p>{texto2}</p>
            </div>
        </div>
    )
}