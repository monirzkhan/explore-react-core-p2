import './App.css'
export default function User({user}){
    console.log(user)
    return(
        <div className="card">
            <h3>Name: {user.name}</h3>
            <h4>Username: {user.username}</h4>
            <p><small>email: {user.email}</small></p>
            <p><small>Website: {user.website}</small></p>
        </div>
    )
}