import React, {useState , useEffect} from 'react'
import style from './Style';

function Increment() {
    const [ counter1, setConter1 ] = useState (0);
    const [ counter2, setConter2 ] = useState (0);
    
    useEffect(() => {
        console.log("counter 1")
        return () => {
    
        }
    }, [counter1])
    useEffect(() => {
        console.log("counter 2")
        return () => {
    
        }
    }, [counter2])
    useEffect(() => {
        console.log("[]")
        return () => {
        }
    }, [])
    return (
        <div style={style.component}>
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>
            <button style={style.button} onClick={() => setConter1(counter1+1)}>
                Increment c1
            </button>
            <button style={style.button} onClick={() => setConter2(counter2+1)}>
                Increment c2
            </button>
            <button style={style.button} onClick={() => {
                setConter1(counter1 + 1);
                setConter2(counter2 + 1);
             }}>
            Increment All
            </button>
        </div>
    )};

export default Increment;
