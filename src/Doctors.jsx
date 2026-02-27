import './App.css'


export default function Doctors({doctor}){
    return(
        <div className="doctors">
        <p>Name: Dr. {doctor}</p>
        </div>
    )
}