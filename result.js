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

const selectedAnalysisText = {
    EN: {
        'swot': 'SWOT analysis results',
        'tows': 'TOWS analysis results',
        'swot-tows': 'SWOT-TOWS analysis results'
    },
    PL: {
        'swot': 'Wyniki analizy SWOT',
        'tows': 'Wyniki analizy TOWS',
        'swot-tows': 'Wyniki analizy SWOT-TOWS'
    },
    RU: {
        'swot': 'Результаты анализа SWOT',
        'tows': 'Результаты анализа TOWS',
        'swot-tows': 'Результаты анализа SWOT-TOWS'
    }
};

const generalCriteriaMap = {
    'swot': ['S/O', 'S/T', 'W/O', 'W/T'],
    'tows': ['O/S', 'O/W', 'T/S', 'T/W'],
    'swot-tows': ['S/O', 'S/T', 'W/O', 'W/T', 'O/S', 'O/W', 'T/S', 'T/W']
};

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

const strategylogo = {
    EN: {
        'aggressive': 'Aggressive strategy',
        'conservative': 'Conservative strategy',
        'competitive': 'Competitive strategy',
        'defensive': 'Defensive strategy'
    },
    PL: {
        'aggressive': 'Strategia agresywna',
        'conservative': 'Strategia konserwatywna',
        'competitive': 'Strategia konkurencyjna',
        'defensive': 'Strategia defensywna'
    },
    RU: {
        'aggressive': 'Агрессивная стратегия',
        'conservative': 'Консервативная стратегия',
        'competitive': 'Конкурентная стратегия',
        'defensive': 'Оборонительная стратегия'
    }
}

const strategy = {
    aggressive: ['S/O', 'O/S'],
    conservative: ['S/T', 'T/S'],
    competitive: ['W/O', 'O/W'],
    defensive: ['W/T', 'T/W']
}

const strategyText = {
    EN: {
        aggressive: 'The company should strive to develop and invest to strengthen its position in the market',
        conservative: 'Businesses should use assets to minimize major environmental hazards',
        competitive: 'Use a favourable external environment to minimise negative factors within the company',
        defensive: 'The company must fight for survival'
    },
    PL: {
        aggressive: 'Przedsiębiorstwo powinno dążyć do rozwoju i inwestować, aby umacniać pozycję na rynku',
        conservative: 'Przedsiębiorstwo powinno wykorzystywać atuty aby minimalizować duże zagrożenia obecne w otoczeniu',
        competitive: 'Należy wykorzystywać sprzyjające otoczenie zewnętrzne aby zminimalizować negatywne czynniki wewnątrz przedsiębiorstwa',
        defensive: 'Przedsiębiorstwo musi walczyć o przetrwanie'
    },
    RU: {
        aggressive: 'Предприятие должно стремиться к развитию и инвестировать, чтобы укрепить свои позиции на рынке',
        conservative: 'Предприятие должно использовать преимущества, чтобы минимизировать большие угрозы, присутствующие в окружающей среде',
        competitive: 'Следует использовать благоприятную внешнюю среду для минимизации негативных факторов внутри предприятия',
        defensive: 'Предприятие должно бороться за выживание'
    }
}



const languageSelector = document.querySelector('.language-selector');
const currentUserNameElement = document.querySelector('.username');
const analysisSelector = document.querySelector('.analysis-selector');
const analysisContent = document.getElementById('analysis-content');

const translations = {
    EN: {
        logo: 'SWOT Analysis',
        swotResultsTitle: 'SWOT Analysis Results',
        dominates: 'Dominates',
        businessScope: 'Business Scope',
        education: 'Education',
        numberOfInteractions: 'Number of interactions (N)',
        sumOfWeightedInteractions: 'Sum of weighted interactions (S)',
        resultsTable: 'Results Table',
        indicators: 'Indicators',
        numberOfInteractionsShort: 'Number of interactions',
        sumOfWeightedInteractionsShort: 'Sum of weighted interactions',
        'S/O': 'Strengths / Opportunities (S/O)',
        'S/T': 'Strengths / Threats (S/T)',
        'W/O': 'Weaknesses / Opportunities (W/O)',
        'W/T': 'Weaknesses / Threats (W/T)',
        'O/S': 'Opportunities / Strengths (O/S)',
        'O/W': 'Opportunities / Weaknesses (O/W)',
        'T/S': 'Threats / Strengths (T/S)',
        'T/W': 'Threats / Weaknesses (T/W)',
        selectedIndicators: 'Selected Indicators',
        selectAnalysisPlaceholder: 'Select analysis:',
        selectedCombinations: 'Selected combinations',
        backToMenu: 'Back to menu',
        weight: 'Weight',
        rank: 'Rank',
        analysisLabel: 'Analysis',
        questionLabel: 'Question',
        'S': 'Strengths (S)',
        'W': 'Weaknesses (W)',
        'O': 'Opportunities (O)',
        'T': 'Threats (T)',
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
        ]
    },
    PL: {
        logo: 'Analiza SWOT',
        swotResultsTitle: 'Wyniki analizy SWOT',
        dominates: 'Dominuje',
        businessScope: 'Zakres działalności',
        education: 'Edukacja',
        numberOfInteractions: 'Liczba interakcji (N)',
        sumOfWeightedInteractions: 'Suma iloczynów wag i interakcji (S)',
        resultsTable: 'Tabela wyników',
        indicators: 'Wskaźniki',
        numberOfInteractionsShort: 'Liczba interakcji',
        sumOfWeightedInteractionsShort: 'Suma iloczynów wag i interakcji',
        'S/O': 'Mocne strony / Szanse (S/O)',
        'S/T': 'Mocne strony / Zagrożenia (S/T)',
        'W/O': 'Słabe strony / Szanse (W/O)',
        'W/T': 'Słabe strony / Zagrożenia (W/T)',
        'O/S': 'Szanse / Mocne strony (O/S)',
        'O/W': 'Szanse / Słabe strony (O/W)',
        'T/S': 'Zagrożenia / Mocne strony (T/S)',
        'T/W': 'Zagrożenia / Słabe strony (T/W)',
        selectedIndicators: 'Wybrane wskaźniki',
        selectAnalysisPlaceholder: 'Wybierz analizę:',
        selectedCombinations: 'Wybrane kombinacje',
        backToMenu: 'Powrót do menu',
        weight: 'Waga',
        rank: 'Rang',
        analysisLabel: 'Analiza',
        questionLabel: 'Pytanie',
        'S': 'Mocne strony (S)',
        'W': 'Słabe strony (W)',
        'O': 'Szanse (O)',
        'T': 'Zagrożenia (T)',
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
        ]
    },
    RU: {
        logo: 'SWOT Анализ',
        swotResultsTitle: 'Результаты SWOT анализа',
        dominates: 'Доминирует',
        businessScope: 'Сфера деятельности',
        education: 'Образование',
        numberOfInteractions: 'Количество взаимодействий (N)',
        sumOfWeightedInteractions: 'Сумма произведений весов и взаимодействий (S)',
        resultsTable: 'Таблица результатов',
        indicators: 'Показатели',
        numberOfInteractionsShort: 'Количество взаимодействий',
        sumOfWeightedInteractionsShort: 'Сумма произведений весов и взаимодействий',
        'S/O': 'Сильные стороны / Возможности (S/O)',
        'S/T': 'Сильные стороны / Угрозы (S/T)',
        'W/O': 'Слабые стороны / Возможности (W/O)',
        'W/T': 'Слабые стороны / Угрозы (W/T)',
        'O/S': 'Возможности / Сильные стороны (O/S)',
        'O/W': 'Возможности / Слабые стороны (O/W)',
        'T/S': 'Угрозы / Сильные стороны (T/S)',
        'T/W': 'Угрозы / Слабые стороны (T/W)',
        selectedIndicators: 'Выбранные показатели',
        selectAnalysisPlaceholder: 'Выберите анализ:',
        selectedCombinations: 'Выбранные комбинации',
        backToMenu: 'Вернуться в меню',
        weight: 'Вес',
        rank: 'Ранг',
        analysisLabel: 'Анализ',
        questionLabel: 'Вопрос',
        'S': 'Сильные стороны (S)',
        'W': 'Слабые стороны (W)',
        'O': 'Возможности (O)',
        'T': 'Угрозы (T)',
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
        ]
    }
};

let availableCriteria = [];
let selectedCriteria = '';

let currentLanguage = 'EN';

let currentUser = null;

document.addEventListener('DOMContentLoaded', function () {
    loadCurrentUser();
    initializeEventListeners();
    initializeNavigation();
    updateLanguage();
});

function loadCurrentUser() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        if (currentUser.currentLanguage) {
            currentLanguage = currentUser.currentLanguage;
        }
        if (languageSelector) {
            languageSelector.value = currentLanguage;
        }
        updateUserNameInNavbar();

        initializeCriteria();

        checkAndShowStrategySection();
    } else {
        location.href = 'main.html';
    }
}

function initializeCriteria() {
    console.log('Current user:', currentUser);
    if (currentUser && currentUser.result && currentUser.result.selectedAnalysis) {
        console.log('Selected analysis:', currentUser.result.selectedAnalysis);
        const analysisType = currentUser.result.selectedAnalysis;
        availableCriteria = generalCriteriaMap[analysisType] || [];
        console.log('Available criteria:', availableCriteria);
        selectedCriteria = '';
    } else {
        console.log('No result data found in currentUser');
    }
}

function updateUserNameInNavbar() {
    if (currentUser && currentUserNameElement) {
        currentUserNameElement.textContent = currentUser.firstName + ' ' + currentUser.lastName;
    }
}

function initializeEventListeners() {
    if (languageSelector) {
        languageSelector.addEventListener('change', handleLanguageChange);
    }
    const analysisSelector = document.getElementById('analysis-selector');
    if (analysisSelector) {
        analysisSelector.addEventListener('change', function () {
            selectedCriteria = this.value;
            if (selectedCriteria) {
                showAnalysisContent();
            } else {
                hideAnalysisContent();
            }
        });
    }
}

async function handleLanguageChange(event) {
    currentLanguage = event.target.value;

    if (currentUser) {
        currentUser.currentLanguage = currentLanguage;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        try {
            const response = await fetch('user_api.php?action=updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: currentUser.id,
                    firstName: currentUser.firstName,
                    lastName: currentUser.lastName,
                    email: currentUser.email,
                    username: currentUser.username,
                    password: currentUser.password,
                    photo: currentUser.photo,
                    currentLanguage: currentLanguage,
                    result: currentUser.result,
                    getAnalyzed: currentUser.getAnalyzed
                })
            });

            const data = await response.json();
            if (!data.success) {
                console.error('Failed to update language in database:', data.error);
            }
        } catch (error) {
            console.error('Error updating language:', error);
        }
    }

    updateLanguage();
}

function updateLanguage() {
    const lang = translations[currentLanguage];

    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.textContent = lang.logo;
    }

    const mainTitle = document.querySelector('.content-area h2');
    if (mainTitle && currentUser && currentUser.result && currentUser.result.selectedAnalysis) {
        const analysisKey = currentUser.result.selectedAnalysis;
        mainTitle.textContent = selectedAnalysisText[currentLanguage][analysisKey];
    }

    const dominanceInfo = document.querySelector('.dominance-info p');
    if (dominanceInfo && currentUser && currentUser.result) {
        const dominatingCriteria = findDominatingCriteria();
        const dominatingText = dominatingCriteria.map(criteria => lang[criteria]).join(', ');
        dominanceInfo.innerHTML = `<strong>${lang.dominates}:</strong> ${dominatingText}`;
    }

    const specialtyInfo = document.querySelector('.specialty-info p');
    if (specialtyInfo && currentUser && currentUser.result && currentUser.result.typeOfActivity) {
        const currentActivityIndex = getActivityIndex(currentUser.result.typeOfActivity);
        let displayActivity = currentUser.result.typeOfActivity;

        if (currentActivityIndex !== -1) {
            displayActivity = lang.activities[currentActivityIndex];
        }

        specialtyInfo.innerHTML = `<strong>${lang.businessScope}:</strong> ${displayActivity}`;
    }

    updateCharts(lang);
    const chartTitles = document.querySelectorAll('.chart-container h3');
    if (chartTitles.length >= 2) {
        chartTitles[0].textContent = lang.numberOfInteractions;
        chartTitles[1].textContent = lang.sumOfWeightedInteractions;
    }

    const tableHeaders = document.querySelectorAll('.summary-table th');
    if (tableHeaders.length >= 3) {
        tableHeaders[0].textContent = lang.indicators;
        tableHeaders[1].textContent = lang.numberOfInteractionsShort;
        tableHeaders[2].textContent = lang.sumOfWeightedInteractionsShort;
    }

    updateSummaryTable(lang);

    const resultsTableTitle = document.querySelector('.summary-table-section h3');
    if (resultsTableTitle) {
        resultsTableTitle.textContent = lang.resultsTable;
    }

    const detailedAnalysisTitle = document.querySelector('.detailed-analysis h3');
    if (detailedAnalysisTitle) {
        detailedAnalysisTitle.textContent = lang.selectedIndicators;
    }
    updateAnalysisSelectorOptions(lang);

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.textContent = lang.backToMenu;
    }
    updateUserNameInNavbar();

    if (analysisContent && !analysisContent.classList.contains('hidden')) {
        updateAnalysisContent();
    }
    checkAndShowStrategySection();
}

function findDominatingCriteria() {
    if (!currentUser || !currentUser.result) return [];

    const result = currentUser.result;
    const criteriaValues = [];

    availableCriteria.forEach(criteria => {
        const savedInteractions = result.criteria[criteria] || [];
        const criteriaParts = criteria.split('/');
        const firstPart = criteriaParts[0];
        const secondPart = criteriaParts[1];

        const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);
        criteriaValues.push({
            criteria: criteria,
            value: totals.totalS
        });
    });

    const maxValue = Math.max(...criteriaValues.map(item => item.value));

    return criteriaValues
        .filter(item => item.value === maxValue)
        .map(item => item.criteria);
}

function updateCharts(lang) {
    if (!availableCriteria || availableCriteria.length === 0) {
        initializeCriteria();
    }

    updateHistogramChart(lang);
    updateRadarChart(lang);
}

function updateHistogramChart(lang) {
    const histogramChart = document.querySelector('.histogram-chart');
    if (!histogramChart || !currentUser || !currentUser.result) return;

    const result = currentUser.result;
    const chartData = [];
    let maxValue = 0;

    availableCriteria.forEach(criteria => {
        const savedInteractions = result.criteria[criteria] || [];
        const criteriaParts = criteria.split('/');
        const firstPart = criteriaParts[0];
        const secondPart = criteriaParts[1];

        const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);
        chartData.push({
            label: criteria,
            value: totals.totalN
        });

        if (totals.totalN > maxValue) {
            maxValue = totals.totalN;
        }
    });

    function calculateOptimalScale(maxValue, steps = 5) {
        if (maxValue === 0) return { stepValue: 1, adjustedMaxValue: steps };

        const magnitude = Math.pow(10, Math.floor(Math.log10(maxValue)));
        const normalizedMax = maxValue / magnitude;

        let stepValue;
        if (normalizedMax <= 1) stepValue = 0.2 * magnitude;
        else if (normalizedMax <= 2) stepValue = 0.5 * magnitude;
        else if (normalizedMax <= 5) stepValue = 1 * magnitude;
        else stepValue = 2 * magnitude;

        const adjustedMaxValue = Math.ceil(maxValue / stepValue) * stepValue;
        return { stepValue, adjustedMaxValue };
    }

    const { stepValue, adjustedMaxValue } = calculateOptimalScale(Math.max(maxValue, 1));
    const steps = Math.round(adjustedMaxValue / stepValue);

    histogramChart.innerHTML = '';

    const yAxisLabels = document.createElement('div');
    yAxisLabels.className = 'y-axis-labels';
    let yAxisHTML = '';
    for (let i = steps; i >= 0; i--) {
        const value = stepValue * i;
        yAxisHTML += `<div class="y-axis-label">${value}</div>`;
    }
    yAxisLabels.innerHTML = yAxisHTML;
    histogramChart.appendChild(yAxisLabels);

    chartData.forEach((data, index) => {
        const height = adjustedMaxValue > 0 ? (data.value / adjustedMaxValue) * 100 : 0;

        const chartBar = document.createElement('div');
        chartBar.className = 'chart-bar';
        chartBar.style.height = `${height}%`;
        chartBar.setAttribute('data-value', data.value);

        const barValue = document.createElement('div');
        barValue.className = 'bar-value';
        barValue.textContent = data.value;
        chartBar.appendChild(barValue);

        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = data.label;
        chartBar.appendChild(barLabel);

        histogramChart.appendChild(chartBar);
    });
}

function updateRadarChart(lang) {
    const radarChart = document.querySelector('.radar-chart svg');
    if (!radarChart || !currentUser || !currentUser.result) return;

    const result = currentUser.result;
    const chartData = [];
    let maxValue = 0;

    availableCriteria.forEach(criteria => {
        const savedInteractions = result.criteria[criteria] || [];
        const criteriaParts = criteria.split('/');
        const firstPart = criteriaParts[0];
        const secondPart = criteriaParts[1];

        const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);
        chartData.push({
            label: criteria,
            value: totals.totalS
        });

        if (totals.totalS > maxValue) {
            maxValue = totals.totalS;
        }
    });

    const centerX = 150, centerY = 125;
    const maxRadius = 75;
    const points = [];

    const angleStep = (2 * Math.PI) / availableCriteria.length;

    const existingLabels = radarChart.querySelectorAll('text.radar-label');
    const existingLines = radarChart.querySelectorAll('line.radar-axis');
    existingLabels.forEach(label => label.remove());
    existingLines.forEach(line => line.remove());

    chartData.forEach((data, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const radius = maxValue > 0 ? (data.value / maxValue) * maxRadius : 0;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        points.push(`${x},${y}`);

        const labelRadius = maxRadius + 20;
        const labelX = centerX + labelRadius * Math.cos(angle);
        const labelY = centerY + labelRadius * Math.sin(angle);
        const axisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        axisLine.setAttribute('x1', centerX);
        axisLine.setAttribute('y1', centerY);
        axisLine.setAttribute('x2', centerX + maxRadius * Math.cos(angle));
        axisLine.setAttribute('y2', centerY + maxRadius * Math.sin(angle));
        axisLine.setAttribute('stroke', '#ddd');
        axisLine.setAttribute('stroke-width', '1');
        axisLine.classList.add('radar-axis');
        radarChart.appendChild(axisLine);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', labelX);
        label.setAttribute('y', labelY);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('dominant-baseline', 'middle');
        label.setAttribute('font-size', '12');
        label.setAttribute('fill', '#333');
        label.classList.add('radar-label');

        const tspanName = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tspanName.textContent = data.label;
        tspanName.setAttribute('x', labelX);
        tspanName.setAttribute('dy', '0');
        label.appendChild(tspanName);

        const tspanValue = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        tspanValue.textContent = `(${data.value.toFixed(2)})`;
        tspanValue.setAttribute('x', labelX);
        tspanValue.setAttribute('dy', '12');
        tspanValue.setAttribute('font-size', '10');
        tspanValue.setAttribute('fill', '#666');
        tspanValue.classList.add('radar-value');
        label.appendChild(tspanValue);

        radarChart.appendChild(label);
    });

    const polygon = radarChart.querySelector('polygon[fill*="rgba"]');
    if (polygon && points.length > 0) {
        polygon.setAttribute('points', points.join(' '));
    }
}

function updateSummaryTable(lang) {
    const tableBody = document.querySelector('.summary-table tbody');
    if (!tableBody || !currentUser || !currentUser.result) return;

    const result = currentUser.result;
    let tableHTML = '';

    availableCriteria.forEach(criteria => {
        const savedInteractions = result.criteria[criteria] || [];
        const criteriaParts = criteria.split('/');
        const firstPart = criteriaParts[0];
        const secondPart = criteriaParts[1];

        const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);

        tableHTML += `
            <tr>
                <td>${lang[criteria]}</td>
                <td>${totals.totalN}</td>
                <td>${totals.totalS.toFixed(2)}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = tableHTML;
}

function updateAnalysisSelectorOptions(lang) {
    const analysisSelector = document.getElementById('analysis-selector');
    const label = document.querySelector('.analysis-dropdown label');

    if (analysisSelector && availableCriteria.length > 0) {
        let optionsHTML = `<option value=""></option>`;
        availableCriteria.forEach(criteria => {
            optionsHTML += `<option value="${criteria}">${lang[criteria]}</option>`;
        });
        analysisSelector.innerHTML = optionsHTML;
        analysisSelector.value = "";
    }

    if (label) {
        label.textContent = lang.selectAnalysisPlaceholder;
    }
}

function handleAnalysisChange(event) {
    selectedCriteria = event.target.value;
    if (selectedCriteria) {
        showAnalysisContent();
    } else {
        hideAnalysisContent();
    }
}

function showAnalysisContent() {
    if (analysisContent && selectedCriteria) {
        analysisContent.style.display = 'block';
        analysisContent.classList.remove('hidden');
        updateAnalysisContent();
        generateAnalysisTable();
    }
}

function generateAnalysisTable() {
    if (!currentUser || !currentUser.result || !selectedCriteria) return;

    const lang = translations[currentLanguage];
    const result = currentUser.result;

    const criteriaParts = selectedCriteria.split('/');
    const firstPart = criteriaParts[0];
    const secondPart = criteriaParts[1];
    const savedInteractions = result.criteria[selectedCriteria] || [];
    const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);

    const tableHTML = `
        <div class="analysis-table-container">
            <table class="analysis-table">
                <tr>
                    <th colspan="10" class="analysis-header">${lang.analysisLabel}: ${lang[selectedCriteria]}</th>
                </tr>
                <tr>
                    <th colspan="10" class="question-header">${lang.questionLabel}: ${generalQuestions[currentLanguage][selectedCriteria]}</th>
                </tr>
                <tr class="header-row">
                    <th>${selectedCriteria}</th>
                    ${generateColumnHeaders(secondPart)}
                    <th>${lang.weight}</th>
                    <th>N</th>
                    <th>S</th>
                    <th>R</th>
                </tr>
                ${generateTableRows(firstPart, secondPart, savedInteractions, result)}
            </table>
        </div>
        
        <div class="analysis-summary">
            <p><strong>${lang.numberOfInteractions}:</strong> ${totals.totalN}</p>
            <p><strong>${lang.sumOfWeightedInteractions}:</strong> ${totals.totalS.toFixed(2)}</p>
        </div>
        
        <div class="selected-combinations">
            <h4>${lang.selectedCombinations}:</h4>
            <ul>
                ${generateSelectedCombinations(savedInteractions, firstPart, secondPart)}
            </ul>
        </div>
    `;

    const existingTable = analysisContent.querySelector('.analysis-table-container');
    if (existingTable) {
        existingTable.remove();
    }
    const existingSummary = analysisContent.querySelector('.analysis-summary');
    if (existingSummary) {
        existingSummary.remove();
    }
    const existingCombinations = analysisContent.querySelector('.selected-combinations');
    if (existingCombinations) {
        existingCombinations.remove();
    }

    analysisContent.insertAdjacentHTML('beforeend', tableHTML);
}

function calculateTotals(savedInteractions, firstPart, secondPart, result) {
    if (!Array.isArray(savedInteractions)) {
        savedInteractions = [];
    }

    let totalN = 0;
    let totalS = 0;

    for (let i = 1; i <= 5; i++) {
        const rowKey = `${firstPart}${i}`;
        const weight = result[firstPart][rowKey] || 0;
        let rowN = 0;

        for (let j = 1; j <= 5; j++) {
            const colKey = `${secondPart}${j}`;
            const interaction = `${rowKey}/${colKey}`;
            if (savedInteractions.includes(interaction)) {
                rowN++;
            }
        }

        totalN += rowN;
        totalS += weight * rowN;
    }

    for (let j = 1; j <= 5; j++) {
        const colKey = `${secondPart}${j}`;
        const weight = result[secondPart][colKey] || 0;
        let colN = 0;

        for (let i = 1; i <= 5; i++) {
            const rowKey = `${firstPart}${i}`;
            const interaction = `${rowKey}/${colKey}`;
            if (savedInteractions.includes(interaction)) {
                colN++;
            }
        }

        totalN += colN;
        totalS += weight * colN;
    }

    return { totalN, totalS };
}

function generateSelectedCombinations(savedInteractions, firstPart, secondPart) {
    const lang = weight[currentLanguage];
    let combinationsHTML = '';

    const sortedInteractions = [...savedInteractions].sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/g)?.join('') || '0');
        const bNum = parseInt(b.match(/\d+/g)?.join('') || '0');
        return aNum - bNum;
    });

    sortedInteractions.forEach(interaction => {
        const [rowKey, colKey] = interaction.split('/');
        const rowName = lang[rowKey] || rowKey;
        const colName = lang[colKey] || colKey;

        combinationsHTML += `<li>${interaction} - ${rowName} / ${colName}</li>`;
    });

    return combinationsHTML;
}

function generateColumnHeaders(secondPart) {
    let headers = '';
    for (let i = 1; i <= 5; i++) {
        const key = `${secondPart}${i}`;
        headers += `<th>${key}</th>`;
    }
    return headers;
}

function generateTableRows(firstPart, secondPart, savedInteractions, result) {
    const tableTotals = calculateTotals(savedInteractions, firstPart, secondPart, result);

    const rowTotals = [];

    for (let i = 1; i <= 5; i++) {
        const rowKey = `${firstPart}${i}`;
        const weight = result[firstPart][rowKey] || 0;

        let rowHTML = `<tr><td class="first-column-bold">${rowKey}</td>`;
        let rowN = 0;

        for (let j = 1; j <= 5; j++) {
            const colKey = `${secondPart}${j}`;
            const interaction = `${rowKey}/${colKey}`;
            const hasInteraction = savedInteractions.includes(interaction);

            if (hasInteraction) {
                rowN++;
                rowHTML += `<td class="interaction-cell">1</td>`;
            } else {
                rowHTML += `<td>0</td>`;
            }
        }

        const rowS = weight * rowN;
        rowTotals.push({ index: i, value: rowS });

        rowHTML += `<td>${weight}</td>`;
        rowHTML += `<td>${rowN}</td>`;
        rowHTML += `<td>${rowS.toFixed(2)}</td>`;
        rowHTML += `<td class="rank-cell" data-rank="${rowS}">-</td>`;
        rowHTML += '</tr>';

        rows += rowHTML;
    }

    rows += `<tr>
        <td class="first-column-bold">${lang.weight}</td>
        ${generateWeightCells(secondPart, result)}
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;

    rows += `<tr>
        <td class="first-column-bold">N</td>
        ${generateNCells(secondPart, savedInteractions)}
        <td></td>
        <td><strong>${tableTotals.totalN}</strong></td>
        <td></td>
        <td></td>
    </tr>`;

    rows += `<tr>
        <td class="first-column-bold">S</td>
        ${generateSCells(secondPart, savedInteractions, result)}
        <td></td>
        <td></td>
        <td><strong>${tableTotals.totalS.toFixed(2)}</strong></td>
        <td></td>
    </tr>`;

    rows += `<tr>
        <td class="first-column-bold">R</td>
        ${generateRankCells(secondPart, savedInteractions, result)}
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`;

    return rows;
}

function generateNCells(secondPart, savedInteractions) {
    let cells = '';
    for (let j = 1; j <= 5; j++) {
        const colKey = `${secondPart}${j}`;
        let colN = 0;

        savedInteractions.forEach(interaction => {
            if (interaction.includes(`/${colKey}`)) {
                colN++;
            }
        });

        cells += `<td>${colN}</td>`;
    }
    return cells;
}

function generateSCells(secondPart, savedInteractions, result) {
    let cells = '';
    for (let j = 1; j <= 5; j++) {
        const colKey = `${secondPart}${j}`;
        const weight = result[secondPart][colKey] || 0;

        let colN = 0;
        savedInteractions.forEach(interaction => {
            if (interaction.includes(`/${colKey}`)) {
                colN++;
            }
        });

        const colS = weight * colN;
        cells += `<td>${colS.toFixed(2)}</td>`;
    }
    return cells;
}

function generateRankCells(secondPart, savedInteractions, result) {
    let cells = '';
    for (let j = 1; j <= 5; j++) {
        const colKey = `${secondPart}${j}`;
        const weight = result[secondPart][colKey] || 0;

        let colN = 0;
        savedInteractions.forEach(interaction => {
            if (interaction.includes(`/${colKey}`)) {
                colN++;
            }
        });

        const colS = weight * colN;
        cells += `<td class="rank-cell-vertical" data-rank="${colS}">-</td>`;
    }
    return cells;
}

function generateWeightCells(secondPart, result) {
    let cells = '';
    for (let j = 1; j <= 5; j++) {
        const colKey = `${secondPart}${j}`;
        const weight = result[secondPart][colKey] || 0;
        cells += `<td>${weight}</td>`;
    }
    return cells;
}

function calculateRanks() {
    setTimeout(() => {
        const rankCells = document.querySelectorAll('.rank-cell');
        const values = Array.from(rankCells).map(cell => parseFloat(cell.dataset.rank));
        const sortedValues = [...values].sort((a, b) => b - a);

        rankCells.forEach(cell => {
            const value = parseFloat(cell.dataset.rank);
            const rank = sortedValues.indexOf(value) + 1;
            cell.textContent = rank;

            cell.classList.remove('rank-1', 'rank-2', 'rank-3', 'rank-4', 'rank-5');
            cell.classList.add(`rank-${rank}`);
        });
        const rankCellsVertical = document.querySelectorAll('.rank-cell-vertical');
        if (rankCellsVertical.length > 0) {
            const verticalValues = Array.from(rankCellsVertical).map(cell => parseFloat(cell.dataset.rank));
            const sortedVerticalValues = [...verticalValues].sort((a, b) => b - a);

            rankCellsVertical.forEach(cell => {
                const value = parseFloat(cell.dataset.rank);
                const rank = sortedVerticalValues.indexOf(value) + 1;
                cell.textContent = rank;
                cell.classList.remove('rank-1', 'rank-2', 'rank-3', 'rank-4', 'rank-5');
                cell.classList.add(`rank-${rank}`);
            });
        }
    }, 100);
}


function hideAnalysisContent() {
    if (analysisContent) {
        analysisContent.style.display = 'none';
        analysisContent.classList.add('hidden');
    }
}

function updateAnalysisContent() {
    const lang = translations[currentLanguage];

    const analysisSummary = document.querySelector('.analysis-summary');
    if (analysisSummary && selectedCriteria) {
        analysisSummary.innerHTML = `
            <p><strong>${lang.analysisLabel}:</strong> ${lang[selectedCriteria]}</p>
            <p><strong>${lang.questionLabel}:</strong> ${generalQuestions[currentLanguage][selectedCriteria]}</p>
        `;
    }

    generateAnalysisTable();

    calculateRanks();
}

function initializeNavigation() {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            if (currentUser) {
                currentUser.getAnalyzed = true;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                try {
                    const response = await fetch('user_api.php?action=updateUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: currentUser.id,
                            firstName: currentUser.firstName,
                            lastName: currentUser.lastName,
                            email: currentUser.email,
                            username: currentUser.username,
                            password: currentUser.password,
                            photo: currentUser.photo,
                            currentLanguage: currentUser.currentLanguage,
                            result: currentUser.result,
                            getAnalyzed: true
                        })
                    });

                    const data = await response.json();
                    if (!data.success) {
                        console.error('Failed to update getAnalyzed status in database:', data.error);
                    }
                } catch (error) {
                    console.error('Error updating getAnalyzed status:', error);
                }
            }

            location.href = 'main.html';
        });
    }

    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        logoElement.style.cursor = 'pointer';
        logoElement.addEventListener('click', function () {
            location.href = 'main.html';
        });
    }
}

function checkAndShowStrategySection() {
    const swotTowsSection = document.getElementById('swot-tows-section');

    if (swotTowsSection && currentUser && currentUser.result && currentUser.result.selectedAnalysis) {
        if (currentUser.result.selectedAnalysis === 'swot-tows') {
            swotTowsSection.classList.remove('hidden');
            updateStrategySection();
        } else {
            swotTowsSection.classList.add('hidden');
        }
    }
}

function updateStrategySection() {
    const lang = translations[currentLanguage];

    const strategyTitle = document.querySelector('#swot-tows-section h3');
    const strategyDescription = document.querySelector('#swot-tows-section .strategy-description');

    if (strategyTitle && strategyDescription) {
        const dominatingStrategy = findDominatingStrategy();
        strategyTitle.textContent = strategylogo[currentLanguage][dominatingStrategy] || 'Агрессивная стратегия';
        strategyDescription.textContent = strategyText[currentLanguage][dominatingStrategy] || 'Предприятие должно стремиться к развитию и инвестировать, чтобы укрепить свои позиции на рынке';
    }

    const strategyChartTitles = document.querySelectorAll('#swot-tows-section .charts-container .chart-container h3');
    if (strategyChartTitles.length >= 2) {
        strategyChartTitles[0].textContent = lang.numberOfInteractions || 'Количество взаимодействий стратегий';
        strategyChartTitles[1].textContent = lang.sumOfWeightedInteractions || 'Сумма произведений весов стратегий';
    }

    updateStrategyTableHeaders();
    updateStrategyCharts();
}

function updateStrategyTableHeaders() {
    const lang = translations[currentLanguage];

    const tableHeaders = document.querySelectorAll('.strategy-table thead th');
    if (tableHeaders.length >= 5) {
        tableHeaders[0].textContent = 'SWOT-TOWS';
        tableHeaders[1].textContent = lang['opportunities'] || 'Возможности (O)';
        tableHeaders[2].textContent = lang['threats'] || 'Угрозы (T)';
    }

    const verticalHeaders = document.querySelectorAll('.vertical-header');
    if (verticalHeaders.length >= 2) {
        verticalHeaders[0].textContent = lang['strengths'] || 'Сильные стороны (S)';
        verticalHeaders[1].textContent = lang['weaknesses'] || 'Слабые стороны (W)';
    }

    const strategyNames = document.querySelectorAll('.strategy-name');
    if (strategyNames.length >= 4) {
        strategyNames[0].textContent = strategylogo[currentLanguage]['aggressive'] || 'Агрессивная стратегия';
        strategyNames[1].textContent = strategylogo[currentLanguage]['conservative'] || 'Консервативная стратегия';
        strategyNames[2].textContent = strategylogo[currentLanguage]['competitive'] || 'Конкурентная стратегия';
        strategyNames[3].textContent = strategylogo[currentLanguage]['defensive'] || 'Оборонительная стратегия';
    }

    const allMetricLabels = document.querySelectorAll('.strategy-table .metric-label');
    allMetricLabels.forEach((label, index) => {
        if (index % 2 === 0) {
            label.textContent = lang.numberOfInteractionsShort || 'Количество взаимодействий';
        } else {
            label.textContent = lang.sumOfWeightedInteractionsShort || 'Сумма произведений весов и взаимодействий';
        }
    });
}

function findDominatingStrategy() {
    if (!currentUser || !currentUser.result) return 'aggressive';

    const strategiesData = calculateStrategyData();

    let maxStrategy = 'aggressive';
    let maxValue = strategiesData.aggressive?.totalS || 0;

    Object.keys(strategiesData).forEach(strategy => {
        const value = strategiesData[strategy]?.totalS || 0;
        if (value > maxValue) {
            maxValue = value;
            maxStrategy = strategy;
        }
    });

    return maxStrategy;
}

function updateStrategyCharts() {
    if (!currentUser || !currentUser.result) return;

    const result = currentUser.result;
    const strategiesData = calculateStrategyData();

    function calculateOptimalScale(maxValue, steps = 5) {
        if (maxValue === 0) return { stepValue: 1, adjustedMaxValue: steps };
        const magnitude = Math.pow(10, Math.floor(Math.log10(maxValue)));
        const normalizedMax = maxValue / magnitude;

        let stepValue;
        if (normalizedMax <= 1) stepValue = 0.2 * magnitude;
        else if (normalizedMax <= 2) stepValue = 0.5 * magnitude;
        else if (normalizedMax <= 5) stepValue = 1 * magnitude;
        else stepValue = 2 * magnitude;

        const adjustedMaxValue = Math.ceil(maxValue / stepValue) * stepValue;
        return { stepValue, adjustedMaxValue };
    }

    const firstChart = document.querySelector('#swot-tows-section .charts-container .chart-container:first-child .histogram-chart');
    if (firstChart) {
        const chartData = [
            strategiesData.aggressive.totalN,
            strategiesData.conservative.totalN,
            strategiesData.competitive.totalN,
            strategiesData.defensive.totalN
        ];
        const maxValue = Math.max(...chartData, 1);

        const { stepValue, adjustedMaxValue } = calculateOptimalScale(maxValue);
        const steps = Math.round(adjustedMaxValue / stepValue);
        let yAxisLabelsHTML = '<div class="y-axis-labels">';
        for (let i = steps; i >= 0; i--) {
            const value = stepValue * i;
            yAxisLabelsHTML += `<div class="y-axis-label">${value}</div>`;
        }
        yAxisLabelsHTML += '</div>';

        let chartHTML = yAxisLabelsHTML;
        const strategyKeys = ['aggressive', 'conservative', 'competitive', 'defensive'];
        const strategyClasses = ['chart-bar--aggressive', 'chart-bar--conservative', 'chart-bar--competitive', 'chart-bar--defensive'];

        chartData.forEach((value, index) => {
            const heightPercent = adjustedMaxValue > 0 ? (value / adjustedMaxValue) * 100 : 0;
            const strategyName = strategylogo[currentLanguage][strategyKeys[index]];

            chartHTML += `
                <div class="chart-bar ${strategyClasses[index]}" style="height: ${heightPercent}%" data-value="${value}">
                    <span class="bar-label">${strategyName}</span>
                </div>
            `;
        });

        firstChart.innerHTML = chartHTML;
    }

    const secondChart = document.querySelector('#swot-tows-section .charts-container .chart-container:last-child .histogram-chart');
    if (secondChart) {
        const chartData = [
            strategiesData.aggressive.totalS,
            strategiesData.conservative.totalS,
            strategiesData.competitive.totalS,
            strategiesData.defensive.totalS
        ];
        const maxValue = Math.max(...chartData, 1);

        const { stepValue, adjustedMaxValue } = calculateOptimalScale(maxValue);
        const steps = Math.round(adjustedMaxValue / stepValue);
        let yAxisLabelsHTML = '<div class="y-axis-labels">';
        for (let i = steps; i >= 0; i--) {
            const value = (stepValue * i).toFixed(stepValue < 1 ? 1 : 0);
            yAxisLabelsHTML += `<div class="y-axis-label">${value}</div>`;
        }
        yAxisLabelsHTML += '</div>';

        let chartHTML = yAxisLabelsHTML;
        const strategyKeys = ['aggressive', 'conservative', 'competitive', 'defensive'];
        const strategyClasses = ['chart-bar--aggressive', 'chart-bar--conservative', 'chart-bar--competitive', 'chart-bar--defensive'];

        chartData.forEach((value, index) => {
            const heightPercent = adjustedMaxValue > 0 ? (value / adjustedMaxValue) * 100 : 0;
            const strategyName = strategylogo[currentLanguage][strategyKeys[index]];

            chartHTML += `
                <div class="chart-bar ${strategyClasses[index]}" style="height: ${heightPercent}%" data-value="${value.toFixed(2)}">
                    <span class="bar-label">${strategyName}</span>
                </div>
            `;
        });

        secondChart.innerHTML = chartHTML;
    }

    updateStrategyTableData(strategiesData);
}

function calculateStrategyData() {
    if (!currentUser || !currentUser.result) return {};

    const result = currentUser.result;
    const strategiesData = {};

    const strategyMapping = {
        aggressive: ['S/O', 'O/S'],
        conservative: ['S/T', 'T/S'],
        competitive: ['W/O', 'O/W'],
        defensive: ['W/T', 'T/W']
    };

    Object.keys(strategyMapping).forEach(strategyKey => {
        let totalN = 0;
        let totalS = 0;

        strategyMapping[strategyKey].forEach(criteria => {
            if (result.criteria[criteria]) {
                const savedInteractions = result.criteria[criteria] || [];
                const criteriaParts = criteria.split('/');
                const firstPart = criteriaParts[0];
                const secondPart = criteriaParts[1];

                const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);
                totalN += totals.totalN;
                totalS += totals.totalS;
            }
        });

        strategiesData[strategyKey] = {
            totalN: totalN,
            totalS: totalS
        };
    });

    return strategiesData;
}

function updateStrategyTableData(strategiesData) {
    const aggressiveN = document.querySelector('.strategy-aggressive-n');
    const aggressiveS = document.querySelector('.strategy-aggressive-s');
    const conservativeN = document.querySelector('.strategy-conservative-n');
    const conservativeS = document.querySelector('.strategy-conservative-s');
    const competitiveN = document.querySelector('.strategy-competitive-n');
    const competitiveS = document.querySelector('.strategy-competitive-s');
    const defensiveN = document.querySelector('.strategy-defensive-n');
    const defensiveS = document.querySelector('.strategy-defensive-s');

    if (aggressiveN) aggressiveN.textContent = strategiesData.aggressive?.totalN || 0;
    if (aggressiveS) aggressiveS.textContent = (strategiesData.aggressive?.totalS || 0).toFixed(2);
    if (conservativeN) conservativeN.textContent = strategiesData.conservative?.totalN || 0;
    if (conservativeS) conservativeS.textContent = (strategiesData.conservative?.totalS || 0).toFixed(2);
    if (competitiveN) competitiveN.textContent = strategiesData.competitive?.totalN || 0;
    if (competitiveS) competitiveS.textContent = (strategiesData.competitive?.totalS || 0).toFixed(2);
    if (defensiveN) defensiveN.textContent = strategiesData.defensive?.totalN || 0;
    if (defensiveS) defensiveS.textContent = (strategiesData.defensive?.totalS || 0).toFixed(2);
}


function updateStrategyTable() {
    if (!currentUser || !currentUser.result) return;

    const result = currentUser.result;
    const strategies = ['S/O', 'S/T', 'W/O', 'W/T'];
    const strategyCells = [
        '.strategy-aggressive-cell',
        '.strategy-conservative-cell',
        '.strategy-competitive-cell',
        '.strategy-defensive-cell'
    ];

    strategies.forEach((strategy, index) => {
        const savedInteractions = result.criteria[strategy] || [];
        const criteriaParts = strategy.split('/');
        const firstPart = criteriaParts[0];
        const secondPart = criteriaParts[1];

        const totals = calculateTotals(savedInteractions, firstPart, secondPart, result);

        const nCells = document.querySelectorAll(strategyCells[index]);
        if (nCells.length >= 1) {
            nCells[0].textContent = totals.totalN;
        }
        if (nCells.length >= 2) {
            nCells[1].textContent = totals.totalS.toFixed(2);
        }
    });
}