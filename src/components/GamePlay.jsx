import React, { useState, useEffect } from 'react';
import Score from './Score';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';


const GamePlay = () => {
    const [random, setRandom] = useState(1);
    const [selectedNum, setSelectedNum] = useState(null);
    const [score, setScore] = useState(0);
    const [hasSelectedNumber, setHasSelectedNumber] = useState(false);
    const [error, setError] = useState('')

    useEffect(() => {
        if (hasSelectedNumber) {
            if (random === selectedNum) {
                setScore((prev) => prev + (random*1.5));
            } else {
                setScore((prev) => prev - 1);
            }
        }
    }, [random]);

    const handleNumberSelect = (num) => {
        setSelectedNum(num);
        setError('')
        if (!hasSelectedNumber) {
            setHasSelectedNumber(true);
        }
    };

    return (
        <div>
            <div className='respo flex items-center justify-around'>
                <Score score={score} />
                <NumberSelector selectedNum={selectedNum} setSelectedNum={handleNumberSelect} error={error} />
            </div>
            <RoleDice random={random} setRandom={setRandom} selectedNum={selectedNum} setError={setError} setScore={setScore} />

        </div>
    );
};

export default GamePlay;
