import React from 'react'
import CardServico from '../Cards/CardServico'



export default function SectionOQueFazemos() {

    const servicos = [
        {
            id: 1,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-1.jpg',
            url: '/'
        },
        {
            id: 2,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-2.jpg',
            url: '/'
        },
        {
            id: 3,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-3.jpg',
            url: '/'
        }
        ,
        {
            id: 4,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-4.jpg',
            url: '/'
        },
        {
            id: 5,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-5.jpg',
            url: '/'
        },
        {
            id: 6,
            nome: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            banner: '/temp/servico-6.jpg',
            url: '/'
        }

    ]


    return (
        <div>
            <div className="main_container">
                <h2>O que fazemos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur modi. Ipsam voluptatem blanditiis tempora aut illo minus dolores enim perferendis sapiente quo harum qui consequuntur, nemo nobis officia architecto?</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
                    {React.Children.toArray(
                        servicos.map(servico => <CardServico servico={servico} />)
                    )}
                </div>
            </div>
        </div>
    )
}
