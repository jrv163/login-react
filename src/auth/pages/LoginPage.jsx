
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';

const loginFormField = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { starLogin, errorMessage } = useAuthStore();

  const { email, password, onInputChange } = useForm( loginFormField );



    const onSubmit = (event) => {
        event.preventDefault();
        starLogin({ email: email, password: password })
    }

    useEffect(() => {
      if ( errorMessage !== undefined ){
        Swal.fire(
            'Error!',
            'Credendiales Incorrectas',
            'error'
          )
      }
    }, [errorMessage])
    

  return (
            <div className="container login-container ">
                <div className="row">
                  
                    <div className="col-md-6 login-form-1">
                        <h3>Salud Moderna</h3>
                        <form onSubmit={ onSubmit }>
                            <div className="form-group mb-2">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name='email'
                                    value={ email}
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name='password'
                                    value={ password }
                                    onChange={ onInputChange }
                                />
                                <a href="https://ospinternational.com/">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="form-group mb-2">
                                <button
                                    type="submit"
                                    className="btnSubmit"
                                    onClick
                                    ={ onSubmit }    
                                >
                                    Iniciar Sesión
                                </button> 

                            </div>
                        </form>
                    </div>

                    
                </div>
            </div>
        )
}



