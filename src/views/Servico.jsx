import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import { usePrismicDocumentByUID, useSinglePrismicDocument } from '@prismicio/react'
import { Email, Facebook, Instagram, Whatsapp } from '../components/Partials/ContactElements';

export default function Servico() {
    let { slug } = useParams();

    const [servico] = usePrismicDocumentByUID('servico', slug)
    const [contato] = useSinglePrismicDocument('contatos_e_redes_sociais')
    console.log(servico);

    return (
        <section className='py-32'>
            <div className="main_container">
                <h2>{servico?.data.titulo_do_servico}</h2>
                <div className="grid md:grid-cols-2 gap-5">

                    <img src={servico?.data.banner_do_servico.url} alt="" />
                    <article className='mt-5'>
                        <p>
                            {servico?.data.descricao_do_servico}
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            {contato?.data.whatsapp && (
                                <div className="rounded-md shadow">
                                    <a href={`https://api.whatsapp.com/send?phone=${contato.data.whatsapp}`} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" target="_blank"> Quero contratar </a>

                                </div>)}
                        </div>
                        <div className='flex flex-col gap-2 mt-3'>
                            <Email/>
                            <Whatsapp/>
                            <Instagram/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
