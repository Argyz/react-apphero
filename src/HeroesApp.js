import React,{useEffect, useReducer} from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer';


const init=()=>{
  
  /**la primera vez q se ejecute la primera sentencia va a ser nula
   * por lo tanto se ejecuta el logged:false y va a pasar a ser nuestro "user"
   * por lo tanto cuando se ejecute el useEffect(por el cambio en el user)
   * y se guarda con un user:{logged:false}
  */
  return JSON.parse(localStorage.getItem('user')) || {logged:false};
}

export const HeroesApp = () => {
  const [user,dispatch] = useReducer(authReducer,{}, init);

  useEffect(() => {
    if(!user) return;

    localStorage.setItem('user',JSON.stringify(user));
  }, [user]);
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch,
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
