import React from 'react'

const NumberSelector = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            {arr.map((val, i) => {
                return (
                    <div className='inline mx-10 text-2xl border-[2px] border-black p-5 px-8 hover:bg-black hover:text-white cursor-pointer transition-all rounded-3xl'>{val}</div>
                )
            })}
        </div>
    )
}

export default NumberSelector
