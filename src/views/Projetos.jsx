import React from 'react'
import { SwiperProjeto } from '../components/Swipers/SwiperProjeto'
import { useAllPrismicDocumentsByType } from '@prismicio/react';

export default function Projetos() {
    const [projetos] = useAllPrismicDocumentsByType('projeto')
    console.log(projetos)
    return (
        <main className='py-32'>
            <div className="main_container">
                <h2>Projetos realizados</h2>

            </div>
            <section>
                <div className="main_container">
                    {projetos && React.Children.toArray(projetos.map(projeto => (
                        <article className='mt-5'>
                            <h3>{projeto.data.titulo}</h3>
                            <SwiperProjeto {...projeto} />
                            <p className='mt-3'>{projeto.data.descricao}</p>
                            <hr />
                        </article>
                    )))}
                </div>
            </section>
        </main>
    )
}
