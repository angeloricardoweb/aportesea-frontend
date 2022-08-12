import React from 'react'

export default function CardServico({ servico }) {
    return (
        <a href={"/" + servico.uid} className='card_servico'>
            <div className='w-full aspect-[21/12] bg-cover rounded'
                style={{
                    backgroundImage: `url(${servico.data.banner_do_servico.url})`
                }}></div>
            <div className='mt-4'>
                <h3 >{servico.data.titulo_do_servico}</h3>
            </div>
        </a>
    )
}
