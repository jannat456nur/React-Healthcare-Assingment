import { useEffect, useState } from "react"
// import { initializeAuth } from "../Firebase/firebase.init";
import initializeAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

initializeAuth()

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        })
            .catch((error) => {

            });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;