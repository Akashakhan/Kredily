import React, { useState } from 'react';
import { useAuth } from '../context/Context';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const { setRole } = useAuth()
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [errorValid, setErrorValid] = useState( false )

    const handleLogin = ( e ) => {
        e.preventDefault();
        var user = username.toLowerCase()
        if ( password ) {
            if ( user === 'employee' || user === 'manager' || user === 'hresource' ) {
                setErrorValid( false )
                localStorage.setItem( 'role', user )
                if ( user === 'employee' ) {
                    <Navigate to="/employee" />
                }
                else if ( user === 'manager' || user === 'hresource' ) {
                    <Navigate to="/leave-management" />
                }
                setRole( user )
            }
            else {
                setErrorValid( true )
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={ handleLogin } className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 xs:w-2/3">
                <h2 className='text-center text-lg font-semibold'>
                    HRM Software
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username <span className='font-normal text-xs ms-2'>(use name 'Employee','Manager' or 'Hresource')</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={ username }
                        onChange={ ( e ) => setUsername( e.target.value ) }
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password<span className='font-normal text-xs ms-2'>(could be anything)</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={ password }
                        onChange={ ( e ) => setPassword( e.target.value ) }
                        required
                    />
                    {
                        errorValid &&
                        <div className='text-sm text-red-400'>
                            Invalid Credentials
                        </div>
                    }
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;