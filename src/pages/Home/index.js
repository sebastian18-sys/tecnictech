    import React from 'react'
    import Hero from '../../components/Background'
    import Contact from '../../components/Contact'
    import Content from '../../components/Content'
    import Features from '../../components/Features'
    import Footer from '../../components/footer'
    import ImageSection from '../../components/ImageSection'
    import Nav from '../../components/Nav'
import Wrap from '../../components/Wrap'
    import "./home.css"

    export default function Home() {

        const information = [
            {
            "title": "Nuestro enfoque en el",
            "titleLight": "Impacto positivo",
            "info": `
                Somos un negocio impulsado por una misión,
                enfocada en crear un cambio positivo para las
                pequeñas empresas. Creemos que el crecimiento,
                habilitado por las tecnología adecuada, es posible
                para todos.

                Desarollamos una solución de optimización de procesos para 
                promover el crecimiento en una organización
            `
            },
            {
            "title": "Nuestro progreso",
            "titleLight": "Tecnológico",
            "info": `
                La tecnología fluye por todos lados. Eche un vistazo
                más de cerca al desarrollo de nuestros sistemas más recientes.
            `
            }
        ]

        // https://i.ibb.co/Fh3yst3/imgHero2.jpg

        return (
            <>
                <header>
                    <Nav />
                </header>
                <main className='main'>
                    <section className='hero'>
                        <Hero />
                    </section>
                    <section id='aboutus' name="#aboutus">
                        <Content title={information[0].title} titleLight={information[0].titleLight} info={information[0].info} />
                        <Wrap />
                    </section>
                    
                    <ImageSection img={"https://i.ibb.co/rwnrvLc/imgHero1.jpg"} />
                    <Content title={information[1].title} titleLight={information[1].titleLight} info={information[1].info} button />
                    <ImageSection img={"https://i.ibb.co/ysK1bHw/imgHero4.jpg"} />
                    <Features />
                    <ImageSection img={"https://i.ibb.co/VCdBy5c/imgHero3.jpg"} />
                    <Contact />
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        )
    }
