// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import AuthProvider, { useAuth } from './AuthContext'

function AuthenticatedRoute( {children} ) {
    const authContext = useAuth

    if (authContext.isAuthenticated) {
        return children
    }
    return <Navigate to='/login' />
}

export default function TodoApp() {

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent />
                    <Routes>
                        <Route path='' element={ <LoginComponent /> }></Route>
                        <Route path='/login' element={ <LoginComponent /> }></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent /> 
                            </AuthenticatedRoute>
                             }></Route>
                        <Route path='/todos' element={ 
                        <AuthenticatedRoute>
                            <ListTodosComponent />
                        </AuthenticatedRoute>
                        }></Route>
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                             } />

                        <Route path='*' element={ <ErrorComponent/> }></Route>

                    </Routes>
                <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>

        </div>
    )
}