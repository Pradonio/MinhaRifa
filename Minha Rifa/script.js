import { signUpWithEmail, loginWithEmail, loginWithGoogle } from './firebase.js';

// Mostrar formulário de cadastro
document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('initial-buttons').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

// Mostrar formulário de login
document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('initial-buttons').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Voltar ao menu inicial a partir do formulário de cadastro
document.getElementById('back-to-menu-1').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('initial-buttons').classList.remove('hidden');
});

// Voltar ao menu inicial a partir do formulário de login
document.getElementById('back-to-menu-2').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('initial-buttons').classList.remove('hidden');
});

// Cadastro de novo usuário
document.getElementById('signup-button').addEventListener('click', function() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUpWithEmail(email, password);
});

// Login de usuário existente
document.getElementById('login-button').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    loginWithEmail(email, password);
});

// Login com Google
document.getElementById('google-signup-button').addEventListener('click', function() {
    loginWithGoogle();
});

document.getElementById('google-login-button').addEventListener('click', function() {
    loginWithGoogle();
});
