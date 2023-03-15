import { useDispatch, useSelector } from "react-redux"
import { pruebaApi } from "../api";
import { clearErrorMessage, onAuthenticated, onLogin, onLogout } from "../store/login/loginSlice";


export const  useAuthStore = () => {

    const { isAuthenticated, user, errorMessage } = useSelector( state => state.login  );
    const dispatch = useDispatch();

    const starLogin = async({ email, password }) => {
        console.log( {email, password});
       dispatch( onAuthenticated() )

        try {
            const {data} = await pruebaApi.post('auth/login', { email, password });
            console.log( data );
           //localStorage.setItem('token', data.token);
            dispatch( onLogin({ email: data.email, password: data.password }) )
            
        } catch (error) {
           dispatch( onLogout(' Credenciales Incorrectas') );
           setTimeout( () => {
                dispatch( clearErrorMessage() );
           }, 10 )
        }
    }



    return {

        // propiedades
        errorMessage,
        isAuthenticated,
        user,

        //metodos
        starLogin,

    }
}