import { createContext, useContext, useEffect } from "react";
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
GoogleAuthProvider,
signInWithPopup
} from "firebase/auth"
import { auth } from "../firebase";
import { useState } from "react";
export const userAuthContext=createContext()

export const UserAuthContextProvider=({children})=>{
    const [user,setUser]=useState("")
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logOut(){
        return signOut(auth)
    }
    function googleSignIn(){
        const GoogleAuthProvider1=new GoogleAuthProvider()
        return signInWithPopup(auth,GoogleAuthProvider1)
    }

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser);
       })
       return ()=>{
        unsubscribe()
       }
    },[])
  return (
    <userAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
        {children}
    </userAuthContext.Provider>
  )
}

export function UseUserAuth(){
    return useContext(userAuthContext)
}