
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { PruebaPage } from "../Prueba/pages/PruebaPage"

export const AppRouter = () => {

 
    const authStatus = 'not-authenticated';

  return (
   
        <Routes>
            {
                ( authStatus === 'not-authenticated' )
                ? (
                    <>
                        <Route path="/auth/login" element ={ <LoginPage/> }/>
                        <Route path="/*" element ={ <Navigate to="/auth/login"/> }/>
                    </>
                )
                :  (
                    <>
                        <Route path="/" element ={ <PruebaPage/> }/>
                        <Route path="/*" element ={ <PruebaPage/> }/>
                    </>
                )
            }
            
            
        </Routes>

  )
}
