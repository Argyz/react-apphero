import React, { useContext } from 'react'
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

/**Por aqui pasan todas las rutas privadas
 * el "children" es por que PrivateRoute va a ser un high order component
 * ya que sus etiquetas contiene otras cosas y recibe una prop de sus hijos(el return de sus hijos)
 * a esa prop la llamamos children
  */
export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const {pathname,search} = useLocation();
    
    localStorage.setItem('lastPath',pathname+search);
    

    return user.logged ? children : <Navigate to="/login" />;
}
