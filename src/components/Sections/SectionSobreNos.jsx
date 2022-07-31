import React from 'react'

export default function SectionSobreNos() {
    return (
        <div>
            <div className="main_container">
                <div className="grid md:grid-cols-2 gap-8 justify-items-end">
                    <article>
                        <h2>Sobre nós</h2>
                        <p className='text-zinc-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam amet qui necessitatibus itaque sint minus voluptate odit, ullam temporibus quis dolorum aspernatur harum mollitia rem nobis dicta doloribus? Officia?</p>

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
