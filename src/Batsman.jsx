import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns]=useState(0);
    const [sixes, setSixes]=useState(0);

    const handleSingle=()=>{
        const updatedRun=runs+1;
        setRuns(updatedRun);
    }

    const handleSix=()=>{
        const updatedRun=runs+6;
        const updatedSixes=sixes+1;
        setSixes(updatedSixes);
        setRuns(updatedRun);
    }
    const handleFour=()=>{
        const updatedRun=runs+4;
        setRuns(updatedRun);
    }
    return(
        <div className="batsman">
            <h3>Bangla Batsman</h3>
            <p><small>Total Six: {sixes}</small></p>
            {
                runs>=50 ? <p>Congratulations!! Your Score: {runs}</p>: <p></p>
            }
            <h4>Your Score: {runs} </h4>
            <button className="btn" onClick={handleSingle}>Single Run</button>
            <button className='btn' onClick={handleSix}>Six Run</button>
            <button className='btn' onClick={handleFour}>Four Run</button>

            
        </div>
    )
}