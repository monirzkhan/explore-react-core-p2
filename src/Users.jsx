import { use } from "react"
import User from "./User";


export default function Users({fetchPromise}){
    const users=use(fetchPromise);
    console.log(users);
    return(

        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    )
}