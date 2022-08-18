import React, { useState, useEffect } from 'react'
import Hero from '../components/Sections/Hero'
import SectionClientes from '../components/Sections/SectionClientes'
import SectionComoContratar from '../components/Sections/SectionComoContratar'
import SectionOQueFazemos from '../components/Sections/SectionOQueFazemos'
import SectionProjetos from '../components/Sections/SectionProjetos'
import SectionSobreNos from '../components/Sections/SectionSobreNos'


export default function Home() {


    return (
        <main>
            {/* hero */}
            <Hero />


            <section className='bg-brand-blue-100'>
                <div className="main_container py-4">
                    <span className='text-white text-xl'>Site em desenvolvimento, estamos construindo uma melhor experiência para nossos clientes, aguarde...</span>

                </div>
            </section>

            <section className='py-24'>
                <SectionSobreNos />
            </section>

            <section className='pt-24 pb-32 bg-zinc-300 bg-opacity-70'>
                <SectionClientes />
            </section>

            <section className='py-24' id="servicos">
                <SectionOQueFazemos />
            </section>

            <section className='py-24 bg-brand-blue-600 bg-opacity-80'>
                <SectionProjetos />
            </section>
            <section className='py-24'>
                <SectionComoContratar />
            </section>





        </main>
    )
}
