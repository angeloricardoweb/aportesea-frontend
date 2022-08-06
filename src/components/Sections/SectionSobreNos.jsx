import React from 'react'

export default function SectionSobreNos() {
    return (
        <div>
            <div className="main_container">
                <div className="grid md:grid-cols-2 gap-8 justify-items-end">
                    <article>
                        <h2>Sobre nós</h2>
                        <p className='text-zinc-400'>A empresa Aporte Sea Engenharia,  Consultoria e Treinamento tem como objetivo a prestação de serviço de excelência qualidade, com uma equipe de profissionais  qualificados e éticos. Equipe com vivência em embarcações de cabotagem, offshore e navegação fluvial.</p>

                        <p className='mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos praesentium asperiores consequatur eum tempora sunt magni dolores dolorem fuga sint enim aspernatur deleniti dicta voluptates sapiente consequuntur, laborum reprehenderit commodi hic iure illum. Voluptate neque et suscipit ab maiores veritatis iste quis blanditiis provident.</p>
                    </article>
                    <div>
                        <img src="/img/quem-somos.png" alt="aporte sea" className='rounded shadow' />
                    </div>
                </div>
            </div>

        </div>
    )
}
