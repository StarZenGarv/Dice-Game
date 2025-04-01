import React from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'

const GamePlay = () => {
    return (
        <div>
            <div className='flex items-center justify-around'>
                <Score />
                <NumberSelector />
            </div>
            <RoleDice />
            <Rules />
        </div>
    )
}

export default GamePlay
