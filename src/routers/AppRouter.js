/**mi archivo principal de los rout */
import React from 'react'
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouters } from './DashboardRouters';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    //tengo q envolver todo en un browserRouter segun la doc
    //y solo se pone una vez, y en las hijas como en dashboard no necesita el browserRoouter
    <BrowserRouter>

      <Routes>

        {/* <Route exact path='/login' element={<LoginScreen />}></Route> */}

        <Route path='/login' element={
          
          /* El componente PublicRoute ahora recibe el return de su hijo 
          dicho return es el renderizado */
          <PublicRoute>
            <LoginScreen />
          </PublicRoute>
        }>
        </Route>

        <Route path='/*' element={
          <PrivateRoute>
            <DashboardRouters />
          </PrivateRoute>
        }></Route>

        {/* <Route path='/*' element={<DashboardRouters />}></Route> */}

      </Routes>

    </BrowserRouter>
  )
}
