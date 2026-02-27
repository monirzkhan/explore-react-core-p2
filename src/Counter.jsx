import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);


    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
     const decreaseCount = () => {
        if(count==0){
            return;
        }
        const newCount = count - 1;
        setCount(newCount);
    }
    const divStyle = {
        border: '2px solid gold',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={divStyle}>
            <h2>Count: {count} </h2>
            <button onClick={handleCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
        </div>
    )
}