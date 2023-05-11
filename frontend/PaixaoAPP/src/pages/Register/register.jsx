import { Link } from "react-router-dom"
import { RegisterComponent } from "../../components/Register/register"


export function Register(){
    return(
        <div>
            <RegisterComponent/>
            <Link to={"/"}>Voltar</Link>
        </div>
    )
}