import { useState } from 'react'
import loja from "./assets/images/loja-imagens.jpeg"
import Header from './components/Header'
import SectionProps from './components/SectionProps'
import DivProps from "./components/DivProps" 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <Header />
        <SectionProps 
        identificador={"red"}
        content={<DivProps 
            titulo1={"Nossa Loja - Instrumentos Musicais"}
            texto1={"Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja voçe encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!"}
            imagemFundo={`url(${loja})`}  alt={"Loja de instrumentos musicais"}
            />}
        />
          
        <SectionProps 
        identificador="cian"
        titulo1="Nossa Loja - Instrumentos Musicais" // Você pode querer mudar este título
        texto1="Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda a família!"
        content={
            <DivProps 
              oculto={"ocultar"}
              titulo2={"Nossa Loja - Instrumentos Musicais"}
              texto2={"Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, com uma variada gama de instrumentos, em um ambiente agradável para toda a família!"}
              conteudo={<iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122020101012!2d-46.69483352379603!3d-23.528391278822736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579a32c71f47%3A0x6b80d0e3a5a7f03!2sR.%20Tito%2C%2054%20-%20Vila%20Romana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005051-000!5e0!3m2!1spt-BR!2sbr!4v1729067303867!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
              } 
            />}
            />
    </main>
  )
}

export default App
