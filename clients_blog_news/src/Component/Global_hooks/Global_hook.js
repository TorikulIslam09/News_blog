import React, { createContext, useEffect, useState } from 'react';

import { getAuth,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebass/Firebass'

const auth = getAuth(app);
export const authContext = createContext()

const Global_hook = ({children}) => {

    const [user, setUser] = useState([])
// -----------google signin ---------------
const provider = new GoogleAuthProvider()
const userCreate = () => {
   return signInWithPopup(auth, provider)
}


// ----------- Github signin ---------------
const gitprovider = new GithubAuthProvider();

const GithubSignin = () => {
    return signInWithPopup(auth, gitprovider)
}


const ReagisterNow = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
const LogNow = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const Logout = () => {
    return signOut(auth)
}



useEffect(() => {
    const chnagUser = onAuthStateChanged(auth, (userCurent) => {
        setUser(userCurent)
    })
    return () => {
        chnagUser()
    }
}, [])

const authInfo = {userCreate, GithubSignin, ReagisterNow,LogNow, user,Logout}

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>


        </div>
    );
};

export default Global_hook;