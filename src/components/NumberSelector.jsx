import React from 'react';

const NumberSelector = ({ selectedNum, setSelectedNum, error }) => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <div className="flex flex-col">
                <div className='my-5 ml-[30vw] text-red-700 font-bold respons'>{error}</div>
                <div className="flex space-x-4">
                    {arr.map((val, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedNum(val)}
                            className={`respon inline-block text-2xl border-2 border-black p-5 px-8 cursor-pointer transition-all rounded-3xl ${selectedNum === val ? 'bg-black text-white' : 'bg-white text-black'
                                }`}
                        >
                            {val}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NumberSelector;
