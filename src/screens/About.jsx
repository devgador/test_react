import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const About = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.productr.initialValue);
    const [nameComponent, setNameComponent] = useState('About')

    return (
        <>
            <p>Component About</p>
            <p>{count}</p>
            <p>component name {nameComponent}</p>

            <button onClick={() => { setNameComponent('Curso de React!!') }}>Press</button>

        </>
    )
}
export default About;