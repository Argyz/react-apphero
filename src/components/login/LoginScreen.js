import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


export const LoginScreen = () => {

  //me permite navegar a cualquier lado...para mas leer doc de "react-router-dom"
  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);


  const handleLogin=()=>{
    
    const last = localStorage.getItem('lastPath') || '/marvel';
   
    const newLogin={
      user:"martin"
    }
    
    const action={
      type:types.login,
      payload:newLogin
    }
    
    dispatch(action)
    
    //el segundo parametro evita que pueda volver al login con el back
    navigate(last,{
      replace: true,
    });

    
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      
      <button 
        className='btn btn-primary'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
