class User {
    constructor(firstName, lastName, email, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = simpleHash(password);
        this.photo = null;
        this.id = Date.now().toString();
        this.createdAt = formatDateForMySQL(new Date());
        this.currentLanguage = 'EN';
        this.result = null;
        this.getAnalyzed = false;
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
            photo: this.photo,
            createdAt: this.createdAt,
            currentLanguage: this.currentLanguage,
            result: this.result,
            getAnalyzed: this.getAnalyzed
        };
    }
}

let verificationEmail = null;
let verificationCode = null;
let verificationCodeExpiry = null;
function formatDateForMySQL(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

async function getUsers() {
    try {
        const response = await fetch('user_api.php?action=getUsers');
        const data = await response.json();
        if (data.error) {
            console.error('Error getting users:', data.error);
            return [];
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function createUserInDB(userData) {
    try {
        const response = await fetch('user_api.php?action=createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { error: 'Network error' };
    }
}

async function checkUserInDB(loginInput, password) {
    try {
        const response = await fetch('user_api.php?action=checkUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginInput: loginInput,
                password: simpleHash(password)
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Network error' };
    }
}

async function findUserByEmailInDB(email) {
    try {
        const response = await fetch(`user_api.php?action=findUserByEmail&email=${encodeURIComponent(email)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: 'Network error' };
    }
}

function showPanel(panelId) {
    const panels = document.querySelectorAll('.auth-form');
    panels.forEach(panel => panel.classList.add('hidden'));
    document.getElementById(panelId).classList.remove('hidden');
    clearErrors();
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.color = '';
    });
}

function validateRegistrationForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const allFieldsFilled = firstName && lastName && email && username && password && confirmPassword;
    const passwordsMatch = password === confirmPassword;

    const createBtn = document.getElementById('createAccountBtn');
    const errorDiv = document.getElementById('registrationError');

    if (allFieldsFilled && passwordsMatch) {
        createBtn.disabled = false;
        createBtn.classList.remove('disabled');
        errorDiv.textContent = '';
    } else {
        createBtn.disabled = true;
        createBtn.classList.add('disabled');

        if (!allFieldsFilled) {
            errorDiv.textContent = 'Please fill in all fields';
        } else if (!passwordsMatch) {
            errorDiv.textContent = 'Passwords do not match';
        }
    }
}

function validatePasswordMatch() {
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('registrationError');

    if (confirmPassword && password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match';
    } else if (password === confirmPassword) {
        errorDiv.textContent = '';
    }
}

async function handleLogin(e) {
    e.preventDefault();

    const loginInput = document.getElementById('loginInput').value.trim();
    const password = document.getElementById('passwordInput').value;
    const errorDiv = document.getElementById('loginError');

    if (!loginInput || !password) {
        errorDiv.textContent = 'Please fill in all fields';
        return;
    }

    const result = await checkUserInDB(loginInput, password);

    if (result.success && result.user) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        location.href = 'main.html';
    } else {
        errorDiv.textContent = result.error || 'Invalid login credentials';
    }
}

async function handleRegistration(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('newPassword').value;
    const errorDiv = document.getElementById('registrationError');

    const newUser = new User(firstName, lastName, email, username, password);
    const result = await createUserInDB(newUser.toJSON());

    if (result.success) {
        errorDiv.style.color = 'green';
        errorDiv.textContent = 'Account created successfully! Please login.';

        setTimeout(() => {
            showPanel('loginPanel');
            document.getElementById('registrationForm').reset();
        }, 2000);
    } else {
        errorDiv.textContent = result.error || 'Failed to create account';
    }
}

async function handleForgotPassword(e) {
    e.preventDefault();

    const email = document.getElementById('resetEmail').value.trim();
    const errorDiv = document.getElementById('forgotPasswordError');

    if (!email) {
        errorDiv.textContent = 'Please enter your email';
        return;
    }

    const result = await findUserByEmailInDB(email);

    if (!result.success) {
        errorDiv.textContent = result.error || 'Email not found';
        return;
    }

    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    verificationEmail = email;
    verificationCodeExpiry = Date.now() + 10 * 60 * 1000;

    try {
        const emailResult = await fetch('send_verification.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                code: verificationCode
            })
        });

        const emailData = await emailResult.json();

        if (emailData.success) {
            showPanel('verificationPanel');
            errorDiv.style.color = 'green';
            errorDiv.textContent = `Verification code sent to ${email}`;
        } else {
            errorDiv.textContent = emailData.error || 'Failed to send verification code';
        }
    } catch (error) {
        console.error('Email sending error:', error);
        console.log(`Verification code for ${email}: ${verificationCode}`);
        showPanel('verificationPanel');
        errorDiv.style.color = 'orange';
        errorDiv.textContent = `Email service unavailable. Code: ${verificationCode}`;
    }
}

async function handleVerification(e) {
    e.preventDefault();

    const code = document.getElementById('verificationCode').value.trim();
    const errorDiv = document.getElementById('verificationError');

    if (!code) {
        errorDiv.textContent = 'Please enter the verification code';
        return;
    }

    if (Date.now() > verificationCodeExpiry) {
        errorDiv.textContent = 'Verification code has expired. Please request a new one.';
        return;
    }

    if (code === verificationCode) {
        const result = await findUserByEmailInDB(verificationEmail);

        if (result.success && result.user) {
            localStorage.setItem('currentUser', JSON.stringify(result.user));
            window.location.href = 'main.html';
        }
    } else {
        errorDiv.textContent = 'Invalid verification code';
    }
}

async function resendVerificationCode() {
    if (!verificationEmail) {
        return;
    }

    const errorDiv = document.getElementById('verificationError');

    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    verificationCodeExpiry = Date.now() + 10 * 60 * 1000;

    try {
        const emailResult = await fetch('send_verification.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: verificationEmail,
                code: verificationCode
            })
        });

        const emailData = await emailResult.json();

        if (emailData.success) {
            errorDiv.style.color = 'green';
            errorDiv.textContent = 'New verification code sent';
        } else {
            errorDiv.style.color = 'orange';
            errorDiv.textContent = `Email service unavailable. Code: ${verificationCode}`;
        }
    } catch (error) {
        console.log(`New verification code for ${verificationEmail}: ${verificationCode}`);
        errorDiv.style.color = 'orange';
        errorDiv.textContent = `Email service unavailable. Code: ${verificationCode}`;
    }
}

function setupEventListeners() {
    const createAccountLink = document.getElementById('createAccountLink');
    const backToLoginLink = document.getElementById('backToLoginLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
    const backToLoginFromVerification = document.getElementById('backToLoginFromVerification');

    if (createAccountLink) {
        createAccountLink.addEventListener('click', () => showPanel('registrationPanel'));
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', () => showPanel('loginPanel'));
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', () => showPanel('forgotPasswordPanel'));
    }

    if (backToLoginFromForgot) {
        backToLoginFromForgot.addEventListener('click', () => showPanel('loginPanel'));
    }

    if (backToLoginFromVerification) {
        backToLoginFromVerification.addEventListener('click', () => showPanel('loginPanel'));
    }

    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const verificationForm = document.getElementById('verificationForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    if (verificationForm) {
        verificationForm.addEventListener('submit', handleVerification);
    }

    const inputs = ['firstName', 'lastName', 'email', 'username', 'newPassword', 'confirmPassword'];
    const confirmPasswordInput = document.getElementById('confirmPassword');

    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', validateRegistrationForm);
        }
    });

    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', validatePasswordMatch);
    }
}

function migrateExistingUsers() {
    if (localStorage.getItem('users')) {
        console.log('Removing old localStorage users data...');
        localStorage.removeItem('users');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    migrateExistingUsers();
});

function simpleHash(str) {
    let hash = 0;
    if (str.length === 0) return hash.toString();
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString();
}