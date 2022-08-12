import React from 'react'
import CardServico from '../Cards/CardServico'

import { usePrismicDocumentByUID, useSinglePrismicDocument, useAllPrismicDocumentsByType } from '@prismicio/react'


export default function SectionOQueFazemos() {
    const [servicos] = useAllPrismicDocumentsByType('servico')

    return (
        <div>
            <div className="main_container">
                <h2>O que fazemos</h2>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur modi. Ipsam voluptatem blanditiis tempora aut illo minus dolores enim perferendis sapiente quo harum qui consequuntur, nemo nobis officia architecto?</p> */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
                    {servicos && React.Children.toArray(
                        servicos.map(servico => <CardServico servico={servico} />)
                    )}
                </div>
            </div>
        </div>
    )
}
