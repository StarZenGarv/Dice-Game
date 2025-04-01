import React from 'react';

const RoleDice = ({ random, setRandom, selectedNum, setError ,setScore}) => {
    const genRandomNumber = () => {
        if (!selectedNum) {
            setError('You have not selected any number')
            return;
        }
        else {
            let randNo = Math.floor(Math.random() * 6) + 1;
            setRandom(randNo);
            setError('')
        }

    };

    return (
        <div className='flex flex-col resp'>
            <img
                onClick={genRandomNumber}
                src={`../../dice_${random}.png`}
                alt="dice"
                className='mx-auto mt-10 mb-5'
            />
            <div className='flex flex-col mt-full'>
                <button onClick={()=>setScore(0)}
                    className='border-[2px] border-black w-fit mx-auto p-2 rounded-xl font-bold hover:text-white hover:bg-black transition-all'
                >
                    Reset Score
                </button>

            </div>
        </div>
    );
};

export default RoleDice;
