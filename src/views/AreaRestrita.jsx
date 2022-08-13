import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import { usePrismicDocumentByUID, } from '@prismicio/react'


export default function AreaRestrita() {
    const { empresa: uid } = useParams();
    const [empresa] = usePrismicDocumentByUID('area_privada', uid)

    console.log(empresa)

    return (
        <section className='py-32'>
            <div className="main_container">
                <h2>Olá, {empresa?.data.empresa}</h2>
                <h4 className='text-xl'>Esta é a sua área pessoal, aqui você pode consultar dados sobre nosso treinamento:</h4>
                <hr />
                <article className='mt-5'>
                    <p>{empresa?.data.descricao}</p>
                </article>
            </div>
        </section>
    )
}
