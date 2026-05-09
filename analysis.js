const translations = {
    EN: {
        logo: "SWOT Analysis",
        chooseAnalysis: "Choose an analysis",
        chooseActivity: "Choose your field of activity",
        back: "Back",
        next: "Next",
        activities: [
            "Sales, Procurement",
            "Finance, Accounting, Banks",
            "Production",
            "Logistics",
            "Marketing, Advertising, PR",
            "Construction",
            "Education",
            "Medicine",
            "Transport"
        ],
        finish: "Finish",
        placeCells: "Place 1 in appropriate cells",
        showCriteria: "Show criteria descriptions",
        backToAnalysis: "Back to analysis selection"
    },
    PL: {
        logo: "Analiza SWOT",
        chooseAnalysis: "Wybierz analizę",
        chooseActivity: "Wybierz swoją dziedzinę działalności",
        back: "Wstecz",
        next: "Dalej",
        activities: [
            "Sprzedaż, Zakupy",
            "Finanse, Księgowość, Banki",
            "Produkcja",
            "Logistyka",
            "Marketing, Reklama, PR",
            "Budownictwo",
            "Edukacja",
            "Medycyna",
            "Transport"
        ],
        finish: "Zakończ",
        placeCells: "Umieść 1 w odpowiednich komórkach",
        showCriteria: "Pokaż opisy kryteriów",
        backToAnalysis: "Powrót do wyboru analizy"
    },
    RU: {
        logo: "SWOT Анализ",
        chooseAnalysis: "Выберите анализ",
        chooseActivity: "Выберите сферу деятельности",
        back: "Назад",
        next: "Далее",
        activities: [
            "Продажи, Закупки",
            "Финансы, Бухгалтерия, Банки",
            "Производство",
            "Логистика",
            "Маркетинг, Реклама, PR",
            "Строительство",
            "Образование",
            "Медицина",
            "Транспорт"
        ],
        finish: "Завершить",
        placeCells: "Поместите 1 в соответствующие ячейки",
        showCriteria: "Показать описание критериев",
        backToAnalysis: "Вернуться к выбору анализа"
    }
};

const questionTranslations = {
    EN: {
        back: "Back",
        next: "Next",
        finish: "Finish",
        backToActivity: "Back to activity selection"
    },
    PL: {
        back: "Wstecz",
        next: "Dalej",
        finish: "Zakończ",
        backToActivity: "Powrót do wyboru działalności"
    },
    RU: {
        back: "Назад",
        next: "Далее",
        finish: "Завершить",
        backToActivity: "Вернуться к выбору деятельности"
    }
};

class Result {
    constructor() {
        this.selectedAnalysis = '';
        this.typeOfActivity = '';
        this.S = { S1: null, S2: null, S3: null, S4: null, S5: null };
        this.W = { W1: null, W2: null, W3: null, W4: null, W5: null };
        this.O = { O1: null, O2: null, O3: null, O4: null, O5: null };
        this.T = { T1: null, T2: null, T3: null, T4: null, T5: null };
        this.criteria = {
            'S/O': [], 'S/T': [], 'W/O': [], 'W/T': [],
            'O/S': [], "O/W": [], 'T/S': [], 'T/W': []
        }
    }
};

let result = new Result();
let currentLanguage = getCurrentLanguageFromStorage();
let selectedActivity = null;
let checkingTheAnalysisProgress = false;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let questionsData = [];
let userAnswers = {};
let currentSlide = 1;

function getCurrentLanguageFromStorage() {
    try {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            const currentUser = JSON.parse(userData);
            return currentUser.currentLanguage || 'EN';
        }
        return 'EN';
    } catch (error) {
        console.error('Error loading language from currentUser:', error);
        return 'EN';
    }
}

async function saveLanguageToCurrentUser(language) {
    try {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            const currentUser = JSON.parse(userData);
            currentUser.currentLanguage = language;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            const response = await fetch('user_api.php?action=updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            });

            const result = await response.json();
            if (!result.success) {
                console.error('Error updating user in database:', result.error);
            }
        }
    } catch (error) {
        console.error('Error saving language to currentUser:', error);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Current language on load:', currentLanguage);

    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }

    loadCurrentUserName();

    if (languageSelector) {
        languageSelector.addEventListener('change', function () {
            const oldLanguage = currentLanguage;
            currentLanguage = this.value;

            saveLanguageToCurrentUser(currentLanguage);

            if (currentSlide === 3 && questionsData.length > 0) {
                updateQuestionLanguageWithProgress();
            } else {
                updateLanguage();
            }
        });
    }

    updateLanguage();
});

function loadCurrentUserName() {
    const currentUserNameElement = document.getElementById('currentUserName');
    if (currentUserNameElement) {
        try {
            const userData = localStorage.getItem('currentUser');
            if (userData) {
                const currentUser = JSON.parse(userData);
                currentUserNameElement.textContent = currentUser.firstName + ' ' + currentUser.lastName;
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    }
}

function updateLanguage() {
    const lang = translations[currentLanguage];

    if (!lang) {
        console.error('Translation not found for language:', currentLanguage);
        currentLanguage = 'EN';
        const lang = translations[currentLanguage];
    }

    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.textContent = lang.logo;
    }

    const chooseAnalysisTitle = document.getElementById('chooseAnalysisTitle');
    if (chooseAnalysisTitle) {
        chooseAnalysisTitle.textContent = lang.chooseAnalysis;
    }

    const chooseActivityTitle = document.getElementById('chooseActivityTitle');
    if (chooseActivityTitle) {
        chooseActivityTitle.textContent = lang.chooseActivity;
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.textContent = lang.back;
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.textContent = lang.next;
    }

    const placeCellsElement = document.getElementById('towsText');
    if (placeCellsElement) {
        placeCellsElement.textContent = lang.placeCells;
    }

    const showCriteriaElement = document.getElementById('criteriaToggle');
    if (showCriteriaElement) {
        showCriteriaElement.textContent = lang.showCriteria;
    }

    const backToAnalysisBtn = document.getElementById('backToAnalysisBtn');
    if (backToAnalysisBtn) {
        backToAnalysisBtn.textContent = lang.backToAnalysis;
    }

    const backToActivityBtn = document.getElementById('backToActivityBtn');
    if (backToActivityBtn) {
        backToActivityBtn.textContent = questionTranslations[currentLanguage].backToActivity;
    }

    if (currentSlide === 4 && dynamicTowsQuestions.length > 0) {
        generateTowsQuestions();
        loadTowsQuestion();
    }

    updateActivities();
}

function updateActivities() {
    const activityGrid = document.getElementById('activityGrid');
    if (!activityGrid) return;

    const activities = translations[currentLanguage].activities;

    const currentSelectedActivity = selectedActivity;

    activityGrid.innerHTML = '';

    activities.forEach((activity, index) => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.dataset.activity = activity;
        activityItem.onclick = () => selectActivity(activityItem, activity);

        activityItem.innerHTML = `
            <div class="checkbox" id="checkbox-${index}"></div>
            <span>${activity}</span>
        `;

        if (currentSelectedActivity &&
            ((currentLanguage === 'EN' && index === getActivityIndex(currentSelectedActivity)) ||
                (currentLanguage === 'PL' && index === getActivityIndex(currentSelectedActivity)) ||
                (currentLanguage === 'RU' && index === getActivityIndex(currentSelectedActivity)))) {
            activityItem.classList.add('selected');
            activityItem.querySelector('.checkbox').classList.add('checked');
        }

        activityGrid.appendChild(activityItem);
    });
}

function getActivityIndex(activity) {
    const allActivities = [
        ["Sales, Procurement", "Sprzedaż, Zakupy", "Продажи, Закупки"],
        ["Finance, Accounting, Banks", "Finanse, Księgowość, Banki", "Финансы, Бухгалтерия, Банки"],
        ["Production", "Produkcja", "Производство"],
        ["Logistics", "Logistyka", "Логистика"],
        ["Marketing, Advertising, PR", "Marketing, Reklama, PR", "Маркетинг, Реклама, PR"],
        ["Construction", "Budownictwo", "Строительство"],
        ["Education", "Edukacja", "Образование"],
        ["Medicine", "Medycyna", "Медицина"],
        ["Transport", "Transport", "Транспорт"]
    ];

    for (let i = 0; i < allActivities.length; i++) {
        if (allActivities[i].includes(activity)) {
            return i;
        }
    }
    return -1;
}

function selectAnalysis(analysisType) {
    result.selectedAnalysis = analysisType;
    goToSlide(2);
}

function selectActivity(element, activity) {
    document.querySelectorAll('.activity-item').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.classList.remove('checked');
    });

    element.classList.add('selected');
    element.querySelector('.checkbox').classList.add('checked');

    selectedActivity = activity;
    result.typeOfActivity = activity;

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;

    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });

    const targetSlide = document.getElementById(`slide${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
    }

    setTimeout(() => {
        updateLanguage();
    }, 100);

    if (slideNumber === 1) {
        result.selectedAnalysis = '';
        selectedActivity = null;
        result.typeOfActivity = '';
    }
}

function goBackToActivitySelection() {
    currentQuestionIndex = 0;
    totalQuestions = 0;
    questionsData = [];
    userAnswers = {};

    goToSlide(2);
}

function logResult() {
    console.log('Current result:', result);
    console.log('Selected activity:', selectedActivity);
    console.log('Current language:', currentLanguage);
}

function proceedToQuestions() {
    if (selectedActivity && result.selectedAnalysis) {
        startQuestionnaire();
    }
}

function getQuestionsDataByActivity(activity) {
    const activityMap = {
        'Education': education,
        'Sales, Procurement': salesProcurement,
        'Finance, Accounting, Banks': financeAccountingBanks,
        'Production': production,
        'Logistics': logistics,
        'Marketing, Advertising, PR': marketingAdvertisingPR,
        'Construction': construction,
        'Medicine': medicine,
        'Transport': transport,
        'Edukacja': education,
        'Sprzedaż, Zakupy': salesProcurement,
        'Finanse, Księgowość, Banki': financeAccountingBanks,
        'Produkcja': production,
        'Logistyka': logistics,
        'Marketing, Reklama, PR': marketingAdvertisingPR,
        'Budownictwo': construction,
        'Medycyna': medicine,
        'Transport': transport,
        'Образование': education,
        'Продажи, Закупки': salesProcurement,
        'Финансы, Бухгалтерия, Банки': financeAccountingBanks,
        'Производство': production,
        'Логистика': logistics,
        'Маркетинг, Реклама, PR': marketingAdvertisingPR,
        'Строительство': construction,
        'Медицина': medicine,
        'Транспорт': transport
    };

    return activityMap[activity] || education;
}

function getSubcriteria(analysisType) {
    return ['S1', 'S2', 'S3', 'S4', 'S5', 'W1', 'W2', 'W3', 'W4', 'W5',
        'O1', 'O2', 'O3', 'O4', 'O5', 'T1', 'T2', 'T3', 'T4', 'T5'];
}

function prepareQuestionsData() {
    questionsData = [];
    userAnswers = {};

    const subcriteria = getSubcriteria(result.selectedAnalysis);
    const activityData = getQuestionsDataByActivity(result.typeOfActivity);

    subcriteria.forEach(subcriterion => {
        const criterionName = weight[currentLanguage][subcriterion];
        const criterionQuestions = activityData[criterionName];

        if (criterionQuestions) {
            for (let i = 1; i <= 3; i++) {
                const questionKey = `question${i}`;
                const answerKey = `answer${i}`;

                if (criterionQuestions[questionKey] && criterionQuestions[answerKey]) {
                    questionsData.push({
                        subcriterion: subcriterion,
                        criterionName: criterionName,
                        question: criterionQuestions[questionKey],
                        answers: criterionQuestions[answerKey],
                        questionNumber: i
                    });
                }
            }
        }
    });

    totalQuestions = questionsData.length;
    currentQuestionIndex = 0;
}

function displayCurrentQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        finishQuestionnaire();
        return;
    }

    const questionData = questionsData[currentQuestionIndex];
    const questionTextElement = document.getElementById('questionTitle');
    const answersContainerElement = document.getElementById('answersContainer');
    const progressElement = document.getElementById('questionProgress');

    if (questionTextElement) {
        questionTextElement.textContent = questionData.question;
    }

    if (progressElement) {
        progressElement.textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;
    }

    if (answersContainerElement) {
        answersContainerElement.innerHTML = '';

        questionData.answers.forEach((answer, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = 'answer-item';
            answerItem.onclick = () => selectAnswer(index);

            answerItem.innerHTML = `
                <div class="answer-radio" id="radio-${index}"></div>
                <span class="answer-text">${answer}</span>
            `;

            answersContainerElement.appendChild(answerItem);
        });
    }

    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true;
    }

    const prevQuestionBtn = document.getElementById('prevQuestionBtn');
    if (prevQuestionBtn) {
        prevQuestionBtn.disabled = currentQuestionIndex === 0;
    }

    updateProgressBar();
    updateQuestionButtons();
}

function selectAnswer(answerIndex) {
    document.querySelectorAll('.answer-item').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelectorAll('.answer-radio').forEach(radio => {
        radio.classList.remove('selected');
    });

    const selectedAnswerItem = document.querySelectorAll('.answer-item')[answerIndex];
    const selectedRadio = document.getElementById(`radio-${answerIndex}`);

    if (selectedAnswerItem) {
        selectedAnswerItem.classList.add('selected');
    }
    if (selectedRadio) {
        selectedRadio.classList.add('selected');
    }

    const questionData = questionsData[currentQuestionIndex];
    const answerKey = `${questionData.subcriterion}_Q${questionData.questionNumber}`;
    userAnswers[answerKey] = {
        answerIndex: answerIndex,
        answerText: questionData.answers[answerIndex],
        value: answerIndex + 1
    };

    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = false;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayCurrentQuestion();
    updateProgressBar();
    updateQuestionButtons();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayCurrentQuestion();

        const questionData = questionsData[currentQuestionIndex];
        const answerKey = `${questionData.subcriterion}_Q${questionData.questionNumber}`;
        const savedAnswer = userAnswers[answerKey];

        if (savedAnswer) {
            selectAnswer(savedAnswer.answerIndex);
        }
    }
}

function finishQuestionnaire() {
    calculateResults();

    console.log('Анкетирование завершено');
    console.log('Ответы пользователя:', userAnswers);
    console.log('Итоговые результаты:', result);

    goToSlide(4);
    initTowsSlide();
}
function calculateResults() {
    const subcriteria = getSubcriteria(result.selectedAnalysis);
    subcriteria.forEach(subcriterion => {
        let totalScore = 0;
        let questionCount = 0;

        for (let i = 1; i <= 3; i++) {
            const answerKey = `${subcriterion}_Q${i}`;
            const answer = userAnswers[answerKey];

            if (answer) {
                totalScore += answer.value;
                questionCount++;
            }
        }

        const category = subcriterion.charAt(0);

        if (category === 'S') {
            result.S[subcriterion] = totalScore;
        } else if (category === 'W') {
            result.W[subcriterion] = totalScore;
        } else if (category === 'O') {
            result.O[subcriterion] = totalScore;
        } else if (category === 'T') {
            result.T[subcriterion] = totalScore;
        }
    });
    convertToPercentages();
}
function convertToPercentages() {
    const categories = ['S', 'W', 'O', 'T'];

    categories.forEach(category => {
        const categoryData = result[category];
        if (!categoryData) return;

        const totalSum = Object.values(categoryData).reduce((sum, value) => sum + (value || 0), 0);

        if (totalSum > 0) {
            const percentages = {};
            Object.keys(categoryData).forEach(key => {
                percentages[key] = (categoryData[key] || 0) / totalSum;
            });

            const correctedPercentages = correctRoundingErrors(percentages);

            Object.keys(correctedPercentages).forEach(key => {
                result[category][key] = correctedPercentages[key];
            });
        }
    });
}

function correctRoundingErrors(percentages) {
    const keys = Object.keys(percentages);
    const rounded = {};
    keys.forEach(key => {
        rounded[key] = Math.round(percentages[key] * 100) / 100;
    });

    const sum = Object.values(rounded).reduce((acc, val) => acc + val, 0);
    const roundedSum = Math.round(sum * 100) / 100;
    if (Math.abs(roundedSum - 1) > 0.005) {
        const difference = 1 - roundedSum;

        let maxKey = keys[0];
        for (let i = 1; i < keys.length; i++) {
            if (rounded[keys[i]] > rounded[maxKey]) {
                maxKey = keys[i];
            }
        }

        rounded[maxKey] = Math.round((rounded[maxKey] + difference) * 100) / 100;
    }

    return rounded;
}

function startQuestionnaire() {
    prepareQuestionsData();
    displayCurrentQuestion();
    goToSlide(3);
}
function updateQuestionLanguageWithProgress() {
    if (questionsData.length > 0) {
        const currentQuestionData = questionsData[currentQuestionIndex];
        const answerKey = `${currentQuestionData.subcriterion}_Q${currentQuestionData.questionNumber}`;
        const currentAnswer = userAnswers[answerKey];

        const subcriteria = getSubcriteria(result.selectedAnalysis);
        const activityData = getQuestionsDataByActivity(result.typeOfActivity);

        questionsData = [];

        subcriteria.forEach(subcriterion => {
            const criterionName = weight[currentLanguage][subcriterion];
            const criterionQuestions = activityData[criterionName];

            if (criterionQuestions) {
                for (let i = 1; i <= 3; i++) {
                    const questionKey = `question${i}`;
                    const answerKey = `answer${i}`;

                    if (criterionQuestions[questionKey] && criterionQuestions[answerKey]) {
                        questionsData.push({
                            subcriterion: subcriterion,
                            criterionName: criterionName,
                            question: criterionQuestions[questionKey],
                            answers: criterionQuestions[answerKey],
                            questionNumber: i
                        });
                    }
                }
            }
        });

        displayCurrentQuestion();
        if (currentAnswer) {
            selectAnswer(currentAnswer.answerIndex);
        }
        updateQuestionButtons();
    }
    if (currentSlide === 4 && dynamicTowsQuestions.length > 0) {
        const savedCellStates = { ...towsCellStates };
        generateTowsQuestions();
        towsCellStates = savedCellStates;
        loadTowsQuestion();
    }

    if (currentSlide === 4) {
        const placeCellsElement = document.getElementById('towsText');
        if (placeCellsElement) {
            placeCellsElement.textContent = translations[currentLanguage].placeCells;
        }

        const showCriteriaElement = document.getElementById('criteriaToggle');
        if (showCriteriaElement) {
            showCriteriaElement.textContent = translations[currentLanguage].showCriteria;
        }

        const backToAnalysisBtn = document.getElementById('backToAnalysisBtn');
        if (backToAnalysisBtn) {
            backToAnalysisBtn.textContent = translations[currentLanguage].backToAnalysis;
        }
    }

    if (currentSlide === 3) {
        const backToActivityBtn = document.getElementById('backToActivityBtn');
        if (backToActivityBtn) {
            backToActivityBtn.textContent = questionTranslations[currentLanguage].backToActivity;
        }
    }
}

function getProgressPercentage() {
    return totalQuestions > 0 ? Math.round((currentQuestionIndex / totalQuestions) * 100) : 0;
}

function updateQuestionButtons() {
    const prevBtn = document.querySelector('.prev-text');
    const nextBtn = document.querySelector('.next-text');

    if (prevBtn) {
        prevBtn.textContent = questionTranslations[currentLanguage].back;
    }

    if (nextBtn) {
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.textContent = questionTranslations[currentLanguage].finish;
        } else {
            nextBtn.textContent = questionTranslations[currentLanguage].next;
        }
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percentage = getProgressPercentage();
        progressBar.style.width = percentage + '%';
    }
}

let currentTowsQuestion = 0;
let dynamicTowsQuestions = [];
let towsCellStates = {};

const generalCriteriaMap = {
    'swot': ['S/O', 'S/T', 'W/O', 'W/T'],
    'tows': ['O/S', 'O/W', 'T/S', 'T/W'],
    'swot-tows': ['S/O', 'S/T', 'W/O', 'W/T', 'O/S', 'O/W', 'T/S', 'T/W']
};

const titles = {
    EN: {
        S: 'Strengths (S)',
        W: 'Weaknesses (W)',
        O: 'Opportunities (O)',
        T: 'Threats (T)'
    },
    PL: {
        S: 'Mocne strony (S)',
        W: 'Słabe strony (W)',
        O: 'Szanse (O)',
        T: 'Zagrożenia (T)'
    },
    RU: {
        S: 'Сильные стороны (S)',
        W: 'Слабые стороны (W)',
        O: 'Возможности (O)',
        T: 'Угрозы (T)'
    }
};

const generalQuestions = {
    EN: {
        'S/O': 'Does a certain strength allow you to take advantage of a given opportunity?',
        'S/T': 'Does a particular strength limit a given threat?',
        'W/O': 'Does a particular weakness limit the ability to take advantage of a given opportunity?',
        'W/T': 'Does a specific vulnerability increase the threat?',
        'O/S': 'Does a given opportunity increase a given strength?',
        'O/W': 'Does a certain opportunity allow you to weaken a given weak side?',
        'T/S': 'Does a specific threat limit a given strength?',
        'T/W': 'Does a specific threat reinforce a given vulnerability?'
    },
    PL: {
        'S/O': 'Czy określona mocna strona pozwala wykorzystać daną szansę?',
        'S/T': 'Czy określona mocna strona pozwala ograniczyć dane zagrożenie?',
        'W/O': 'Czy określona słaba strona ogranicza możliwość wykorzystania danej szansy?',
        'W/T': 'Czy określona słaba strona potęguje dane zagrożenie?',
        'O/S': 'Czy określona szansa potęguje daną mocną stronę?',
        'O/W': 'Czy określona szansa pozwala osłabić daną słabą stronę?',
        'T/S': 'Czy określone zagrożenie ogranicza daną mocną stronę?',
        'T/W': 'Czy określone zagrożenie wzmacnia daną słabą stronę?'
    },
    RU: {
        'S/O': 'Позволяет ли определенная сильная сторона использовать данную возможность?',
        'S/T': 'Позволяет ли определенная сильная сторона ограничить данную угрозу?',
        'W/O': 'Ограничивает ли определенная слабая сторона возможность использовать данную возможность?',
        'W/T': 'Усугубляет ли определенная слабая сторона данную угрозу?',
        'O/S': 'Может ли определенный шанс усилить данную сильную сторону?',
        'O/W': 'Позволяет ли определенный шанс ослабить данную слабую сторону?',
        'T/S': 'Ограничивает ли конкретная угроза данную сильную сторону?',
        'T/W': 'Усиливает ли конкретная угроза данную слабую сторону?'
    }
};


function initTowsSlide() {
    console.log('Initializing TOWS slide...');

    if (!result || !result.selectedAnalysis) {
        console.error('Cannot initialize TOWS slide: missing result data');
        return;
    }
    generateTowsQuestions();

    if (!dynamicTowsQuestions || dynamicTowsQuestions.length === 0) {
        console.error('Failed to generate TOWS questions');
        return;
    }

    const existingHandler = document.querySelector('[data-tows-handler]');
    if (!existingHandler) {
        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('cell-clickable')) {
                toggleCell(e.target);
            }
        });
        document.body.dataset.towsHandler = 'true';
    }
    const criteriaToggle = document.getElementById('criteriaToggle');
    const criteriaContent = document.getElementById('criteriaContent');

    if (criteriaToggle && criteriaContent) {
        criteriaToggle.replaceWith(criteriaToggle.cloneNode(true));
        const newCriteriaToggle = document.getElementById('criteriaToggle');

        newCriteriaToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            criteriaContent.classList.toggle('active');
        });
    }
    currentTowsQuestion = 0;
    loadTowsQuestion();
}
function generateTowsQuestions() {
    dynamicTowsQuestions = [];
    towsCellStates = {};

    if (!result || !result.selectedAnalysis) {
        console.error('result.selectedAnalysis is not defined');
        return;
    }

    const criteriaTypes = generalCriteriaMap[result.selectedAnalysis] || [];

    if (criteriaTypes.length === 0) {
        console.error('No criteria types found for analysis:', result.selectedAnalysis);
        return;
    }

    if (!generalQuestions[currentLanguage]) {
        console.error('General questions not found for language:', currentLanguage);
        return;
    }

    criteriaTypes.forEach(type => {
        const parts = type.split('/');

        if (parts.length !== 2) {
            console.error('Invalid criteria type format:', type);
            return;
        }

        const rowType = parts[0];
        const colType = parts[1];

        const questionTitle = generalQuestions[currentLanguage][type];

        if (!questionTitle) {
            console.error('Question title not found for type:', type, 'in language:', currentLanguage);
            return;
        }

        dynamicTowsQuestions.push({
            type: type,
            title: questionTitle,
            rowType: rowType,
            colType: colType
        });
    });

    console.log('Generated TOWS questions:', dynamicTowsQuestions);
}

function toggleCell(cell) {
    const questionType = dynamicTowsQuestions[currentTowsQuestion].type;
    const rowIndex = cell.parentElement.rowIndex;
    const colIndex = cell.cellIndex;
    const cellId = `${rowIndex}-${colIndex}`;

    if (!cell.dataset.cellId) {
        cell.dataset.cellId = cellId;
    }

    const stateKey = `${questionType}_${cellId}`;

    if (cell.classList.contains('filled')) {
        cell.classList.remove('filled');
        cell.textContent = '';
        delete towsCellStates[stateKey];
    } else {
        cell.classList.add('filled');
        cell.textContent = '1';
        towsCellStates[stateKey] = true;
    }
}

function loadTowsQuestion() {
    if (!dynamicTowsQuestions || dynamicTowsQuestions.length === 0) {
        console.error('dynamicTowsQuestions is empty or undefined');
        generateTowsQuestions();

        if (!dynamicTowsQuestions || dynamicTowsQuestions.length === 0) {
            console.error('Failed to generate TOWS questions');
            return;
        }
    }

    if (currentTowsQuestion >= dynamicTowsQuestions.length || currentTowsQuestion < 0) {
        console.error('Invalid currentTowsQuestion index:', currentTowsQuestion);
        currentTowsQuestion = 0;
    }

    const question = dynamicTowsQuestions[currentTowsQuestion];

    if (!question || !question.title) {
        console.error('Question is undefined or missing title:', question);
        return;
    }

    const progressElement = document.getElementById('towsProgress');
    const titleElement = document.getElementById('towsTitle');
    const progressBar = document.getElementById('towsProgressBar');

    if (progressElement) {
        progressElement.textContent = `${currentTowsQuestion + 1} / ${dynamicTowsQuestions.length}`;
    }

    if (titleElement) {
        titleElement.textContent = question.title;
    }

    if (progressBar) {
        progressBar.style.width = `${((currentTowsQuestion + 1) / dynamicTowsQuestions.length) * 100}%`;
    }
    updateTowsTable(question);
    updateCriteriaDescriptions(question);

    const prevBtn = document.getElementById('prevTowsBtn');
    const nextBtn = document.getElementById('nextTowsBtn');

    if (prevBtn) {
        prevBtn.disabled = currentTowsQuestion === 0;
        const prevBtnText = prevBtn.querySelector('.prev-text') || prevBtn;
        if (questionTranslations[currentLanguage]) {
            prevBtnText.textContent = questionTranslations[currentLanguage].back;
        }
    }

    if (nextBtn) {
        nextBtn.disabled = false;
        const nextBtnText = nextBtn.querySelector('.next-text') || nextBtn;
        if (questionTranslations[currentLanguage]) {
            if (currentTowsQuestion === dynamicTowsQuestions.length - 1) {
                nextBtnText.textContent = questionTranslations[currentLanguage].finish;
            } else {
                nextBtnText.textContent = questionTranslations[currentLanguage].next;
            }
        }
    }
    const placeCellsElement = document.getElementById('placeCellsText');

    if (placeCellsElement && translations[currentLanguage]) {
        placeCellsElement.textContent = translations[currentLanguage].placeCells;
    }

    const showCriteriaElement = document.getElementById('showCriteriaText');
    if (showCriteriaElement && translations[currentLanguage]) {
        showCriteriaElement.textContent = translations[currentLanguage].showCriteria;
    }
}

function updateTowsTable(question) {
    const table = document.getElementById('towsTable');

    const cornerCell = table.querySelector('.corner-cell');
    cornerCell.textContent = question.type;

    const colHeaders = table.querySelectorAll('th:not(.corner-cell)');
    colHeaders.forEach((header, index) => {
        header.textContent = `${question.colType}${index + 1}`;
    });
    const rowHeaders = table.querySelectorAll('.row-header');
    rowHeaders.forEach((header, index) => {
        header.textContent = `${question.rowType}${index + 1}`;
    });
    const cells = table.querySelectorAll('.cell-clickable');
    cells.forEach(cell => {
        const cellId = cell.dataset.cellId || `${cell.parentElement.rowIndex}-${cell.cellIndex}`;

        if (!cell.dataset.cellId) {
            cell.dataset.cellId = cellId;
        }

        const stateKey = `${question.type}_${cellId}`;

        if (towsCellStates[stateKey]) {
            cell.classList.add('filled');
            cell.textContent = '1';
        } else {
            cell.classList.remove('filled');
            cell.textContent = '';
        }
    });
}

function updateCriteriaDescriptions(question) {
    const criteriaColumns = document.querySelectorAll('.criteria-column');

    if (criteriaColumns.length < 2) return;
    const firstColumn = criteriaColumns[0];
    const firstTitle = firstColumn.querySelector('h4');
    const firstItems = firstColumn.querySelectorAll('.criteria-item');

    if (firstTitle) {
        firstTitle.textContent = getTypeTitle(question.rowType);
    }

    firstItems.forEach((item, index) => {
        const subcriterion = `${question.rowType}${index + 1}`;
        const criterionName = weight[currentLanguage][subcriterion];
        if (criterionName) {
            item.textContent = `${subcriterion}: ${criterionName}`;
        }
    });
    const secondColumn = criteriaColumns[1];
    const secondTitle = secondColumn.querySelector('h4');
    const secondItems = secondColumn.querySelectorAll('.criteria-item');

    if (secondTitle) {
        secondTitle.textContent = getTypeTitle(question.colType);
    }

    secondItems.forEach((item, index) => {
        const subcriterion = `${question.colType}${index + 1}`;
        const criterionName = weight[currentLanguage][subcriterion];
        if (criterionName) {
            item.textContent = `${subcriterion}: ${criterionName}`;
        }
    });
}

function getTypeTitle(type) {
    const currentTitles = titles[currentLanguage] || titles['EN'];
    return currentTitles[type] || type;
}

function nextTowsQuestion() {
    if (currentTowsQuestion < dynamicTowsQuestions.length - 1) {
        currentTowsQuestion++;
        loadTowsQuestion();
    } else {
        finishTowsAnalysis();
    }
}

function previousTowsQuestion() {
    if (currentTowsQuestion > 0) {
        currentTowsQuestion--;
        loadTowsQuestion();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Current language on load:', currentLanguage);

    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }

    loadCurrentUserName();

    if (languageSelector) {
        languageSelector.addEventListener('change', function () {
            const oldLanguage = currentLanguage;
            currentLanguage = this.value;

            if (currentSlide === 3 && questionsData.length > 0) {
                updateQuestionLanguageWithProgress();
            } else {
                updateLanguage();
            }
        });
    }

    updateLanguage();
});

async function saveAnalysisResults() {
    try {
        console.log('Starting to save analysis results...');
        console.log('Current result object:', result);

        const userData = localStorage.getItem('currentUser');
        if (userData) {
            const currentUser = JSON.parse(userData);
            console.log('Current user before update:', currentUser);

            currentUser.result = result;
            currentUser.getAnalyzed = true;

            console.log('User data being sent to API:', currentUser);

            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            const response = await fetch('user_api.php?action=updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser)
            });

            console.log('API response status:', response.status);
            const apiResult = await response.json();
            console.log('API response:', apiResult);

            if (apiResult.success) {
                console.log('Analysis results saved successfully');
            } else {
                console.error('Error saving analysis results to database:', apiResult.error);
            }
        } else {
            console.error('No current user data found in localStorage');
        }
    } catch (error) {
        console.error('Error saving analysis results:', error);
    }
}

function finishTowsAnalysis() {
    console.log('Finishing TOWS analysis...');

    result.criteria = formatTowsResults();

    console.log('Final result object:', result);
    console.log('TOWS Analysis Results:', result.criteria);

    saveAnalysisResults();

    location.href = 'main.html';
}

function formatTowsResults() {
    const formattedResults = {};

    dynamicTowsQuestions.forEach(question => {
        const questionType = question.type;
        const selectedCells = [];

        Object.keys(towsCellStates).forEach(stateKey => {
            if (stateKey.startsWith(`${questionType}_`) && towsCellStates[stateKey]) {
                const cellId = stateKey.replace(`${questionType}_`, '');
                const [rowIndex, colIndex] = cellId.split('-').map(Number);
                const formattedCell = `${question.rowType}${rowIndex}/${question.colType}${colIndex}`;
                selectedCells.push(formattedCell);
            }
        });

        if (selectedCells.length > 0) {
            formattedResults[questionType] = selectedCells;
        }
    });

    return formattedResults;
}

