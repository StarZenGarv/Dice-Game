import React from 'react'
import Rules from './Rules'
import dice1 from '../../public/dice_1.png'
import dice2 from '../../public/dice_2.png'
import dice3 from '../../public/dice_3.png'
import dice4 from '../../public/dice_4.png'
import dice5 from '../../public/dice_5.png'
import dice6 from '../../public/dice_6.png'

const RoleDice = () => {
    return (
        <div className='flex flex-col'>
            <img src={dice1} alt="dice" className='mx-auto mt-10 mb-5' />
            <div className='flex flex-col mt-full'>
                <button className='border-[2px] border-black w-fit mx-auto p-2 rounded-xl font-bold hover:text-white hover:bg-black transition-all'>Reset Score</button>
                <button className='border-[2px] border-black w-fit mx-auto p-2 rounded-xl font-bold mt-7  hover:text-white hover:bg-black transition-all'>{<Rules /> ? 'Show' : 'Hide'} Rules</button>
            </div>
        </div>
    )
}

export default RoleDice
