import { useForm } from "../hooks/useForm"

interface FormData {
    email: string,
    nombre: string,
    edad: number
}

const Formulario = () => {

    const { email, nombre, edad , handleChange, formulario } = useForm<FormData>({
        email:'Jp@.com',
        nombre:'juanmpi',
        edad: 33
    });

    // const { email, nombre, edad } = formulario;

    // const [formulario, setformulario] = useState({
    //     email:'',
    //     nombre:''
    // });

    // const handleChange = ({ target }: ChangeEvent<HTMLInputElement> ) => {
    //     const {name, value} = target;

    //     setformulario({
    //         ...formulario,
    //         [ name ]: value
    //     })
    // }

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label" >Email:</label>
            <input  type="email" 
                    name="email" 
                    className="form-control"
                    value={email} 
                    onChange={handleChange}
            />
            <label className="form-label" >Nombre:</label>
            <input  type="text" 
                    name="nombre" 
                    className="form-control" 
                    value={nombre} 
                    onChange={handleChange}
            />
            <label className="form-label" >Edad:</label>
            <input  type="number" 
                    name="edad" 
                    className="form-control" 
                    value={edad} 
                    onChange={handleChange}
            />
        </div>
        

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}

export default Formulario