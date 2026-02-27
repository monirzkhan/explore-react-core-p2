export default function Politician ({politician}){
    return(
        <div className="politician">
            <h3>Candidate Name:{politician.name}</h3>
            <p>Age: {politician.age}</p>
            <p>Ashon: {politician.Ashon}</p>

        </div>
    )
}