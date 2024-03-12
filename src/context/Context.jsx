import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext( {} );

const AuthProvider = ( props ) => {
    const [role, setRole] = useState( '' )
    const [leaveData, setLeaveData] = useState( [] )

    useEffect( () => {
        var check = localStorage.getItem( 'role' )
        var leave = JSON.parse( localStorage.getItem( 'leave' ) )
        if ( check ) {
            setRole( check )
        }
        if ( leave ) {
            setLeaveData( leave )
        }
    }, [] )

    const handleLogout = () => {
        localStorage.removeItem( 'role' )
        setRole( '' )
    }

    const authContextValue = {
        role,
        setRole,
        leaveData,
        setLeaveData,
        handleLogout,
    };
    return <AuthContext.Provider value={ authContextValue } { ...props } />;
};

const useAuth = () => React.useContext( AuthContext );

export { AuthProvider, useAuth };