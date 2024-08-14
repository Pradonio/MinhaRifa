import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUiVlhzfVFfUi3PxcAVIzKS8qqxezNMB4",
    authDomain: "minharifa-3b911.firebaseapp.com",
    projectId: "minharifa-3b911",
    storageBucket: "minharifa-3b911.appspot.com",
    messagingSenderId: "941537946041",
    appId: "1:941537946041:web:8183f031d5dd631087ae68",
    measurementId: "G-MC744TBPPD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpWithEmail = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Usuário cadastrado:", userCredential.user);
        alert("Usuário cadastrado com sucesso!");
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar: " + error.message);
    }
};

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Usuário logado:", userCredential.user);
        alert("Usuário logado com sucesso!");
    } catch (error) {
        console.error("Erro ao logar:", error);
        alert("Erro ao logar: " + error.message);
    }
};

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Usuário logado com Google:", result.user);
        alert("Usuário logado com Google com sucesso!");
    } catch (error) {
        console.error("Erro ao logar com Google:", error);
        alert("Erro ao logar com Google: " + error.message);
    }
};
