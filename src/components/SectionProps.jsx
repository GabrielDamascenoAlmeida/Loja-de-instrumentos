
import style from "./css/SectionProps.module.css"


export default function SectionProps ({identificador, content}) {
    return (
        <section id={identificador}>
            {content}
        </section>
    )
}