import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    // register new user method
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // setUser(result.user)
            setAuthError("");
            const newUser = {email, displayName: name};
            setUser(newUser);

            // save user to the database
            saveUser(email, name, "POST");

            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(result => {})
            .catch(() => {})
            navigate("/");
        })
        .catch(error => {
            // setUser({});
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    // login user method
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(resutl => {
            // setUser(resutl.user);
            const destination = location?.state?.from || "/";
            navigate(destination);
            setAuthError("");

        })
        .catch(error =>{
            // setUser({});
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    // google login method
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setAuthError("");
            saveUser(user.email, user.displayName, "PUT");

            const destination = location?.state?.from || "/";
            navigate(destination);
        })
        .catch(error => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribe;
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin));
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(result => {
            setUser({});
        })
        .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {})
    };

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
};

export default useFirebase;