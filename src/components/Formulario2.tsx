import { useForm } from "../hooks/useForm"

interface FormData {
  codigoPostal: string;
  ciudad: string;
}

export const Formulario2 = () => {

    const {codigoPostal, ciudad ,formulario , handleChange}  = useForm<FormData>({
    codigoPostal: "ABC",
    ciudad:"buenos aires"
    });

    // const {codigoPostal, ciudad} = formulario;

    return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Codigo postal:</label>
            <input  
                type="text" 
                name="codigoPostal"
                className="form-control"
                onChange={handleChange}  
                value={codigoPostal}
            />
            <label className="form-label">Ciudad:</label>
            <input  
                type="text" 
                name="ciudad"
                className="form-control"
                onChange={handleChange}
                value={ciudad} 
            />

            <pre>{JSON.stringify(formulario)}</pre>

        </div>
    </form>
  )
}

export default Formulario2