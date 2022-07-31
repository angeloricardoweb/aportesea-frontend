import React, { useState, useEffect } from 'react'
import Hero from '../components/Sections/Hero'
import SectionOQueFazemos from '../components/Sections/SectionOQueFazemos'
import SectionSobreNos from '../components/Sections/SectionSobreNos'


export default function Home() {


    return (
        <main>
            {/* hero */}
            <Hero />


            <section className='bg-brand-blue-100'>
                <div className="main_container py-4">
                    <span className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam eos delectus quas deleniti nihil quaerat ab in ratione impedit, blanditiis amet eligendi molestiae eum asperiores dolor? Id, tempore natus.</span>

                </div>
            </section>

            <section className='py-20'>
                <SectionSobreNos />
            </section>

            <section className='py-20 bg-zinc-200'>
                <SectionOQueFazemos />
            </section>





        </main>
    )
}
