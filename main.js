const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mainContent = document.getElementById('mainContent');
const languageSelector = document.getElementById('languageSelector');
const currentUserNameElement = document.getElementById('currentUserName');
const photoInput = document.getElementById('photoInput');

const API_BASE_URL = 'user_api.php';

async function apiRequest(action, data = null, method = 'GET') {
    const url = method === 'GET' && data ?
        `${API_BASE_URL}?action=${action}&${new URLSearchParams(data)}` :
        `${API_BASE_URL}?action=${action}`;

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    if (method === 'POST' && data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    return await response.json();
}

const translations = {
    EN: {
        logo: 'SWOT Analysis',
        profile: 'Profile',
        swotAnalysis: 'SWOT Analysis',
        settings: 'Settings',
        logout: 'Log out',
        welcome: 'Welcome to SWOT Analysis',
        selectOption: 'Select an option from the sidebar to begin.',
        profileContent: 'Profile',
        profileDescription: 'User profile information will be displayed here.',
        swotContent: 'SWOT Analysis',
        swotDescription: 'Create and manage your SWOT analysis here.',
        settingsContent: 'Settings',
        settingsDescription: 'Application settings and preferences.',
        addPhoto: 'Add Photo',
        changeData: 'Change Data',
        saveData: 'Save',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        logoutButton: 'Logout',
        logoutMessage: 'Click the button below to logout',
        fillAllFields: 'Please fill in all fields',
        dataUpdated: 'Data updated successfully!',
        passwordSettings: 'Change the password',
        oldPassword: 'Old Password',
        newPassword: 'New Password',
        confirmNewPassword: 'Confirm Password',
        changePassword: 'Change',
        startAnalysis: 'Start the analysis',
        viewResults: 'View Results',
        deleteAccount: 'Delete Account',
        confirmDeleteAccount: 'Are you sure you want to delete your account? This action cannot be undone.',
        accountDeleted: 'Account has been deleted successfully.',
        passwordsDoNotMatch: 'Passwords do not match',
        incorrectOldPassword: 'Incorrect old password',
        passwordChanged: 'Password changed successfully!'
    },
    PL: {
        logo: 'Analiza SWOT',
        profile: 'Profil',
        swotAnalysis: 'Analiza SWOT',
        settings: 'Ustawienia',
        logout: 'Wyloguj',
        welcome: 'Witamy w Analizie SWOT',
        selectOption: 'Wybierz opcję z paska bocznego, aby rozpocząć.',
        profileContent: 'Profil',
        profileDescription: 'Informacje o profilu użytkownika będą wyświetlane tutaj.',
        swotContent: 'Analiza SWOT',
        swotDescription: 'Twórz i zarządzaj swoją analizą SWOT tutaj.',
        settingsContent: 'Ustawienia',
        settingsDescription: 'Ustawienia aplikacji i preferencje.',
        addPhoto: 'Dodaj zdjęcie',
        changeData: 'Zmień dane',
        saveData: 'Zapisz',
        firstName: 'Imię',
        lastName: 'Nazwisko',
        email: 'Email',
        logoutButton: 'Wyloguj',
        logoutMessage: 'Kliknij przycisk poniżej, aby się wylogować',
        fillAllFields: 'Proszę wypełnić wszystkie pola',
        dataUpdated: 'Dane zostały pomyślnie zaktualizowane!',
        passwordSettings: 'Zmień hasło',
        oldPassword: 'Stare hasło',
        newPassword: 'Nowe hasło',
        confirmNewPassword: 'Potwierdź hasło',
        changePassword: 'Zmień',
        startAnalysis: 'Rozpocznij analizę',
        viewResults: 'Zobacz wyniki',
        deleteAccount: 'Usuń konto',
        confirmDeleteAccount: 'Czy na pewno chcesz usunąć swoje konto? Ta akcja nie może zostać cofnięta.',
        accountDeleted: 'Konto zostało pomyślnie usunięte.',
        passwordsDoNotMatch: 'Hasła nie są zgodne',
        incorrectOldPassword: 'Nieprawidłowe stare hasło',
        passwordChanged: 'Hasło zostało pomyślnie zmienione!'
    },
    RU: {
        logo: 'SWOT Анализ',
        profile: 'Профиль',
        swotAnalysis: 'SWOT Анализ',
        settings: 'Настройки',
        logout: 'Выйти',
        welcome: 'Добро пожаловать в SWOT Анализ',
        selectOption: 'Выберите опцию из боковой панели, чтобы начать.',
        profileContent: 'Профиль',
        profileDescription: 'Информация о профиле пользователя будет отображена здесь.',
        swotContent: 'SWOT Анализ',
        swotDescription: 'Создавайте и управляйте своим SWOT анализом здесь.',
        settingsContent: 'Настройки',
        settingsDescription: 'Настройки приложения и предпочтения.',
        addPhoto: 'Добавить фото',
        changeData: 'Изменить данные',
        saveData: 'Сохранить',
        firstName: 'Имя',
        lastName: 'Фамилия',
        email: 'Email',
        logoutButton: 'Выйти',
        logoutMessage: 'Нажмите кнопку ниже, чтобы выйти',
        fillAllFields: 'Пожалуйста, заполните все поля',
        dataUpdated: 'Данные успешно обновлены!',
        passwordSettings: 'Изменить пароль',
        oldPassword: 'Старый пароль',
        newPassword: 'Новый пароль',
        confirmNewPassword: 'Подтвердить пароль',
        changePassword: 'Изменить',
        startAnalysis: 'Начать анализ',
        viewResults: 'Посмотреть результаты',
        deleteAccount: 'Удалить аккаунт',
        confirmDeleteAccount: 'Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.',
        accountDeleted: 'Аккаунт успешно удален.',
        passwordsDoNotMatch: 'Пароли не совпадают',
        incorrectOldPassword: 'Неправильный старый пароль',
        passwordChanged: 'Пароль успешно изменен!'
    }
};

let currentLanguage = 'EN';

let sidebarExpanded = false;

let currentUser = null;

let isEditMode = false;
document.addEventListener('DOMContentLoaded', function () {
    loadCurrentUser();
    initializeEventListeners();
    updateAllInterface();
});

function loadCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        if (currentUser.currentLanguage) {
            currentLanguage = currentUser.currentLanguage;
            if (languageSelector) {
                languageSelector.value = currentLanguage;
            }
        }
    }
}

function updateAllInterface() {
    if (currentUser) {
        updateUserNameInNavbar();
        updateLogo();
        updateWelcomeText();
        updateSidebarLanguage();
        checkAnalysisRedirect();
    }
}

function updateUserNameInNavbar() {
    if (currentUser && currentUserNameElement) {
        currentUserNameElement.textContent = currentUser.firstName + ' ' + currentUser.lastName;
    }
}

function updateLogo() {
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        const lang = translations[currentLanguage];
        logoElement.textContent = lang.logo;
    }
}

function updateWelcomeText() {
    const contentArea = document.querySelector('.content-area');
    const lang = translations[currentLanguage];

    if (contentArea) {
        const heading = contentArea.querySelector('h2');
        const paragraph = contentArea.querySelector('p');

        const activeMenuItem = document.querySelector('.menu-item.active, .icon-item.active');
        if (!activeMenuItem && heading && paragraph) {
            heading.textContent = lang.welcome;
            paragraph.textContent = lang.selectOption;
        }
    }
}

function updateSidebarLanguage() {
    const lang = translations[currentLanguage];

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const page = item.getAttribute('data-page');
        const textElement = item.querySelector('.menu-text');

        if (textElement) {
            switch (page) {
                case 'profile':
                    textElement.textContent = lang.profile;
                    break;
                case 'swot':
                    textElement.textContent = lang.swotAnalysis;
                    break;
                case 'settings':
                    textElement.textContent = lang.settings;
                    break;
                case 'logout':
                    textElement.textContent = lang.logout;
                    break;
            }
        }
    });
}

async function checkAnalysisRedirect() {
    const userData = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(userData);
    if (currentUser.getAnalyzed === true) {
        currentUser.getAnalyzed = false;

        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        try {
            await apiRequest('updateUser', currentUser, 'POST');
        } catch (error) {
            console.error('Error updating user after analysis redirect:', error);
        }

        setTimeout(() => {
            document.querySelectorAll('.menu-item, .icon-item').forEach(item => {
                item.classList.remove('active');
            });

            const swotMenuItem = document.querySelector('.menu-item[data-page="swot"], .icon-item[data-page="swot"]');
            if (swotMenuItem) {
                swotMenuItem.classList.add('active');
            }
            updateMainContent('swot');
        }, 100);
    }
}

function initializeEventListeners() {
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    if (languageSelector) {
        languageSelector.addEventListener('change', handleLanguageChange);
    }

    if (photoInput) {
        photoInput.addEventListener('change', handlePhotoUpload);
    }

    const menuItems = document.querySelectorAll('.menu-item, .icon-item');
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
    });

    document.addEventListener('click', function (event) {
        if (sidebar && sidebarToggle && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            if (sidebarExpanded) {
                collapseSidebar();
            }
        }
    });
}


function toggleSidebar() {
    if (sidebarExpanded) {
        collapseSidebar();
    } else {
        expandSidebar();
    }
}

function expandSidebar() {
    sidebar.classList.add('expanded');
    sidebarExpanded = true;
}
function collapseSidebar() {
    sidebar.classList.remove('expanded');
    sidebarExpanded = false;
}
async function handleLanguageChange(event) {
    currentLanguage = event.target.value;

    if (currentUser) {
        currentUser.currentLanguage = currentLanguage;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        try {
            await apiRequest('updateUser', currentUser, 'POST');
        } catch (error) {
            console.error('Error updating language:', error);
        }
    }

    updateLanguage();
}

function updateLanguage() {
    const lang = translations[currentLanguage];
    updateLogo();

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const page = item.getAttribute('data-page');
        const textElement = item.querySelector('.menu-text');

        if (textElement) {
            switch (page) {
                case 'profile':
                    textElement.textContent = lang.profile;
                    break;
                case 'swot':
                    textElement.textContent = lang.swotAnalysis;
                    break;
                case 'settings':
                    textElement.textContent = lang.settings;
                    break;
                case 'logout':
                    textElement.textContent = lang.logout;
                    break;
            }
        }
    });

    const activeMenuItem = document.querySelector('.menu-item.active, .icon-item.active');
    if (activeMenuItem) {
        const activePage = activeMenuItem.getAttribute('data-page');
        updateMainContent(activePage);
    } else {
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            const heading = contentArea.querySelector('h2');
            const paragraph = contentArea.querySelector('p');

            if (heading && paragraph) {
                heading.textContent = lang.welcome;
                paragraph.textContent = lang.selectOption;
            }
        }
    }
}

function handleMenuClick(event) {
    const page = event.currentTarget.getAttribute('data-page');

    document.querySelectorAll('.menu-item, .icon-item').forEach(item => {
        item.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    updateMainContent(page);

    if (window.innerWidth <= 768) {
        collapseSidebar();
    }
}
function updateMainContent(page) {
    const contentArea = document.querySelector('.content-area');
    const lang = translations[currentLanguage];

    contentArea.classList.remove('fade-in');

    setTimeout(() => {
        switch (page) {
            case 'profile':
                contentArea.innerHTML = createProfileContent(lang);
                setupProfileEventListeners();
                break;
            case 'swot':
                contentArea.innerHTML = createSwotContent(lang);
                break;
            case 'settings':
                contentArea.innerHTML = createSettingsContent(lang);
                setupSettingsEventListeners();
                break;
            case 'logout':
                contentArea.innerHTML = createLogoutContent(lang);
                break;
            default:
                contentArea.innerHTML = `
                    <h2>${lang.welcome}</h2>
                    <p>${lang.selectOption}</p>
                `;
        }

        contentArea.classList.add('fade-in');
    }, 100);
}

function createSwotContent(lang) {
    const hasResults = currentUser && currentUser.result;
    const resultsButtonClass = hasResults ? '' : 'disabled';
    const resultsButtonDisabled = hasResults ? '' : 'disabled';

    return `
        <h2>${lang.swotContent}</h2>
        <button type="button" class="photo-btn" onclick="startAnalysis()">${lang.startAnalysis}</button>
        <button type="button" class="photo-btn ${resultsButtonClass}" onclick="viewResults()" ${resultsButtonDisabled}>${lang.viewResults}</button>
    `;
}

function createLogoutContent(lang) {
    return `
        <h2>${lang.logout}</h2>
        <p>${lang.logoutMessage}</p>
        <button type="button" class="logout-btn" onclick="handleLogout()">${lang.logoutButton}</button>
        <div class="delete-account-link">
            <a href="#" onclick="handleDeleteAccount()" class="link-style">${lang.deleteAccount}</a>
        </div>
    `;
}

function viewResults() {
    if (currentUser && currentUser.result) {
        location.href = "result.html";
    }
}

async function handleDeleteAccount() {
    const lang = translations[currentLanguage];

    if (confirm(lang.confirmDeleteAccount)) {
        try {
            const response = await apiRequest('deleteUser', { id: currentUser.id }, 'POST');

            if (response.success) {
                localStorage.removeItem('currentUser');
                alert(lang.accountDeleted);
                location.href = 'index.html';
            } else {
                alert('Ошибка при удалении аккаунта: ' + (response.error || 'Неизвестная ошибка'));
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            alert('Ошибка при удалении аккаунта');
        }
    }
}

function createSettingsContent(lang) {
    return `
        <h2>${lang.settingsContent}</h2>
        
        <div class="settings-section">
            <h3>${lang.passwordSettings}</h3>
            <div class="password-form">
                <div class="form-group">
                    <div class="password-input-container">
                        <input type="password" id="oldPassword" placeholder="${lang.oldPassword}">
                        <button type="button" class="eye-button" onclick="togglePasswordVisibility('oldPassword')">
                            <span class="eye-icon">👁️</span>
                        </button>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="password-input-container">
                        <input type="password" id="newPassword" placeholder="${lang.newPassword}">
                        <button type="button" class="eye-button" onclick="togglePasswordVisibility('newPassword')">
                            <span class="eye-icon">👁️</span>
                        </button>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="password-input-container">
                        <input type="password" id="confirmNewPassword" placeholder="${lang.confirmNewPassword}">
                        <button type="button" class="eye-button" onclick="togglePasswordVisibility('confirmNewPassword')">
                            <span class="eye-icon">👁️</span>
                        </button>
                    </div>
                </div>
                
                <button type="button" class="change-password-btn disabled" id="changePasswordBtn" disabled onclick="changePassword()">${lang.changePassword}</button>
                <div class="password-message" id="passwordMessage"></div>
            </div>
        </div>
    `;
}

function setupSettingsEventListeners() {
    const oldPasswordInput = document.getElementById('oldPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
    [oldPasswordInput, newPasswordInput, confirmNewPasswordInput].forEach(input => {
        if (input) {
            input.addEventListener('input', validatePasswordForm);
        }
    });
}

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const eyeIcon = input.nextElementSibling.querySelector('.eye-icon');

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.textContent = '🙈';
    } else {
        input.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}

function validatePasswordForm() {
    const lang = translations[currentLanguage];
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const passwordMessage = document.getElementById('passwordMessage');

    const allFieldsFilled = oldPassword && newPassword && confirmNewPassword;
    const passwordsMatch = newPassword === confirmNewPassword;

    if (allFieldsFilled && passwordsMatch) {
        changePasswordBtn.disabled = false;
        changePasswordBtn.classList.remove('disabled');
        passwordMessage.textContent = '';
        passwordMessage.classList.remove('error');
    } else {
        changePasswordBtn.disabled = true;
        changePasswordBtn.classList.add('disabled');

        if (allFieldsFilled && !passwordsMatch) {
            passwordMessage.textContent = lang.passwordsDoNotMatch;
            passwordMessage.classList.add('error');
        } else {
            passwordMessage.textContent = '';
            passwordMessage.classList.remove('error');
        }
    }
}

async function changePassword() {
    const lang = translations[currentLanguage];
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    const passwordMessage = document.getElementById('passwordMessage');

    if (currentUser.password !== simpleHash(oldPassword)) {
        passwordMessage.textContent = lang.incorrectOldPassword;
        passwordMessage.classList.add('error');
        passwordMessage.classList.remove('success');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        passwordMessage.textContent = lang.passwordsDoNotMatch;
        passwordMessage.classList.add('error');
        passwordMessage.classList.remove('success');
        return;
    }

    try {
        currentUser.password = simpleHash(newPassword);

        const response = await apiRequest('updateUser', currentUser, 'POST');

        if (response.success) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            passwordMessage.textContent = lang.passwordChanged;
            passwordMessage.classList.remove('error');
            passwordMessage.classList.add('success');

            document.getElementById('oldPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmNewPassword').value = '';

            document.getElementById('changePasswordBtn').disabled = true;
            document.getElementById('changePasswordBtn').classList.add('disabled');

            setTimeout(() => {
                passwordMessage.textContent = '';
                passwordMessage.classList.remove('success');
            }, 3000);
        } else {
            passwordMessage.textContent = 'Ошибка при изменении пароля: ' + (response.error || 'Неизвестная ошибка');
            passwordMessage.classList.add('error');
            passwordMessage.classList.remove('success');
        }
    } catch (error) {
        console.error('Error changing password:', error);
        passwordMessage.textContent = 'Ошибка при изменении пароля';
        passwordMessage.classList.add('error');
        passwordMessage.classList.remove('success');
    }
}

function createProfileContent(lang) {
    const userPhoto = currentUser && currentUser.photo ? currentUser.photo : '';
    const photoStyle = userPhoto ? `background-image: url(${userPhoto})` : '';

    return `
        <h2>${lang.profileContent}</h2>
        <div class="profile-container">
            <div class="profile-left">
                <div class="photo-container">
                    <div class="photo-placeholder" id="photoPlaceholder" style="${photoStyle}">
                        ${userPhoto ? '' : '📷'}
                    </div>
                    <button type="button" class="photo-btn" onclick="selectPhoto()">${lang.addPhoto}</button>
                </div>
            </div>
            <div class="profile-right">
                <div class="form-group">
                    <label>${lang.firstName}</label>
                    <input type="text" id="profileFirstName" value="${currentUser ? currentUser.firstName : ''}" disabled>
                </div>
                <div class="form-group">
                    <label>${lang.lastName}</label>
                    <input type="text" id="profileLastName" value="${currentUser ? currentUser.lastName : ''}" disabled>
                </div>
                <div class="form-group">
                    <label>${lang.email}</label>
                    <input type="email" id="profileEmail" value="${currentUser ? currentUser.email : ''}" disabled>
                </div>
                <button type="button" class="edit-btn" id="editBtn" onclick="toggleEditMode()">${lang.changeData}</button>
            </div>
        </div>
    `;
}

function setupProfileEventListeners() {
    const firstNameInput = document.getElementById('profileFirstName');
    const lastNameInput = document.getElementById('profileLastName');
    const emailInput = document.getElementById('profileEmail');
    const editBtn = document.getElementById('editBtn');

    [firstNameInput, lastNameInput, emailInput].forEach(input => {
        if (input) {
            input.addEventListener('input', validateProfileForm);
        }
    });
}

function selectPhoto() {
    photoInput.click();
}
async function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const compressedImage = await compressImage(file, 0.7, 800, 600);

        if (currentUser) {
            currentUser.photo = compressedImage;

            try {
                const response = await apiRequest('updateUser', currentUser, 'POST');

                if (response.success) {
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));

                    const photoPlaceholder = document.getElementById('photoPlaceholder');
                    if (photoPlaceholder) {
                        photoPlaceholder.style.backgroundImage = `url(${compressedImage})`;
                        photoPlaceholder.textContent = '';
                    }
                } else {
                    console.error('Error updating user photo:', response.error);
                    alert('Ошибка при сохранении фото');
                }
            } catch (error) {
                console.error('Error uploading photo:', error);
                alert('Ошибка при загрузке фото');
            }
        }
    }
}

function compressImage(file, quality = 0.7, maxWidth = 800, maxHeight = 600) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            let { width, height } = img;

            if (width > height) {
                if (width > maxWidth) {
                    height = height * (maxWidth / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = width * (maxHeight / height);
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            const compressedBase64 = canvas.toDataURL('image/jpeg', quality);
            resolve(compressedBase64);
        };

        img.src = URL.createObjectURL(file);
    });
}

function toggleEditMode() {
    const lang = translations[currentLanguage];
    const firstNameInput = document.getElementById('profileFirstName');
    const lastNameInput = document.getElementById('profileLastName');
    const emailInput = document.getElementById('profileEmail');
    const editBtn = document.getElementById('editBtn');

    if (!isEditMode) {
        firstNameInput.disabled = false;
        lastNameInput.disabled = false;
        emailInput.disabled = false;
        editBtn.textContent = lang.saveData;
        editBtn.classList.add('save-mode');
        isEditMode = true;
    } else {
        if (validateProfileForm()) {
            saveProfileData();
            firstNameInput.disabled = true;
            lastNameInput.disabled = true;
            emailInput.disabled = true;
            editBtn.textContent = lang.changeData;
            editBtn.classList.remove('save-mode');
            isEditMode = false;
        }
    }
}

function validateProfileForm() {
    const lang = translations[currentLanguage];
    const firstNameInput = document.getElementById('profileFirstName');
    const lastNameInput = document.getElementById('profileLastName');
    const emailInput = document.getElementById('profileEmail');
    const editBtn = document.getElementById('editBtn');

    if (!firstNameInput || !lastNameInput || !emailInput || !editBtn) {
        return false;
    }

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    const isValid = firstName && lastName && email;

    if (isEditMode) {
        if (isValid) {
            editBtn.classList.remove('disabled');
        } else {
            editBtn.classList.add('disabled');
        }
    }

    return isValid;
}

async function saveProfileData() {
    const lang = translations[currentLanguage];
    const firstNameInput = document.getElementById('profileFirstName');
    const lastNameInput = document.getElementById('profileLastName');
    const emailInput = document.getElementById('profileEmail');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    if (!firstName || !lastName || !email) {
        alert(lang.fillAllFields);
        return false;
    }

    try {
        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
        currentUser.email = email;
        const response = await apiRequest('updateUser', currentUser, 'POST');

        if (response.success) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUserNameInNavbar();

            alert(lang.dataUpdated);

            return true;
        } else {
            alert('Ошибка при сохранении данных: ' + (response.error || 'Неизвестная ошибка'));
            return false;
        }
    } catch (error) {
        console.error('Error saving profile data:', error);
        alert('Ошибка при сохранении данных');
        return false;
    }
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    location.href = 'index.html';
}

function startAnalysis() {
    location.href = "analysis.html";
}

window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && sidebarExpanded) {
    } else if (window.innerWidth <= 768 && sidebarExpanded) {
        collapseSidebar();
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('menu-item') || event.target.classList.contains('icon-item')) {
        isEditMode = false;
    }
});

