import React from 'react'

export default function CardServico({ servico }) {
    return (
        <a href={servico.url} className='card_servico'>
            <div className='w-full aspect-[21/12] bg-cover rounded'
                style={{
                    backgroundImage: `url(${servico.banner})`
                }}></div>
            <div className='mt-4'>
                <h3 >{servico.nome}</h3>
            </div>
        </a>
    )
}
