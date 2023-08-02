import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const HeaderWordChange = () => {
    const words = ['joy', 'good vibes', 'creativity', 'good music', 'a lot of coffee'];
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Words>
            coding with <span>{words[wordIndex]}</span>
        </Words>
    )
};

const Words = styled.p`
    color: white;
    font-family: 'Borel', cursive;
    font-size: 5vw;
    padding-left: 18.5vw;

    & span {
        color: #fd9301;
    }

`

export default HeaderWordChange;