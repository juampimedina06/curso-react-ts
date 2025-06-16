import { useState } from "react"

interface User {
    uid: string;
    name:string;
}

const Usuario = () => {

    const [user, setUSer] = useState<User>();

    const login = () =>{
        setUSer({
            uid: "ABC123",
            name: "Fernando Herrera"
        });
    }

  return (
    <div className="mt-5">
        <h3>Usuario: useState</h3>

        <button 
            onClick={ login }
            className="btn btn-outline-primary">
            login
        </button>
        {
            (!user)
            ? <pre>No hay usuario</pre>
            : <pre> {JSON.stringify( user )} </pre>
        }
    </div>
  )
}

export default Usuario