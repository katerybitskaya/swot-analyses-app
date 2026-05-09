const salesProcurement = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the sales/procurement department in the company',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from partners and clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with industry standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the market',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular customers',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of sales/procurement operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of sales/procurement tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Logistics and warehouse support',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of product/service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of market analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in decision-making',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with service',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of order processing',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new products/services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern sales/procurement technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of export/import operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified sales/procurement staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional sales',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for e-commerce growth',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of product/service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own online sales channels',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors\' advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors\' product update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors\' marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new trade regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu sprzedaży/zakupów w firmie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania partnerów i klientów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branżowymi',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności na rynku',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność sprzedaży/zakupów',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność narzędzi sprzedaży/zakupów',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie logistyczne i magazynowe',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach rynku',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty produktowej/usługowej',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branżowych',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań rynkowych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z obsługi',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji zamówień',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych produktów/usług',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii sprzedaży/zakupów',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji eksport/import',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w projektach międzynarodowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na rozwiązania indywidualne',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu sprzedaży/zakupów',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjną sprzedaż',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na rozwój e-commerce',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji oferty',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform internetowych',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych kanałów sprzedaży online',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji handlowych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание отдела продаж/закупок в компании',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия партнеров и клиентов',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие отраслевым стандартам',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы на рынке',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность операций продаж/закупок',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность инструментов продаж/закупок',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Логистическая и складская поддержка',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых сегментах рынка',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность продуктового/сервисного предложения',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в отраслевых рейтингах',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень рыночных исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов обслуживанием',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость обработки заказов',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых продуктов/услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных технологий продаж/закупок',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля экспортно-импортных операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного персонала продаж/закупок',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционные продажи',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к развитию электронной коммерции',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания продукта/услуги',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн-платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных онлайн-каналов продаж',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых торговых нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Финансы, Бухгалтерия, Банки
const financeAccountingBanks = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the finance/accounting/banking department in the organization',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from clients and partners',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with financial industry standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the financial market',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular clients',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of financial operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of financial/accounting tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for remote and online services',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key financial segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts or clients',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of financial products/services',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in financial industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of financial analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in decision-making',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in financial processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of financial offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with financial services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of service delivery',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new financial products/services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern financial technologies (FinTech)',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of international operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international financial projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized financial solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified finance/accounting staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional financial services',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for digital banking/fintech growth',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of product/service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online financial platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own online services',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors\' advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors\' product update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors\' marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new financial regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu finansów/księgowości/bankowości w organizacji',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania klientów i partnerów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branży finansowej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności na rynku finansowym',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji finansowych',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność narzędzi finansowych/księgowych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie dla usług zdalnych i online',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach finansowych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów lub klientów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność produktów/usług finansowych',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branży finansowej',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań finansowych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach finansowych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty finansowej wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z usług finansowych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji usług',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych produktów/usług finansowych',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii finansowych (FinTech)',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji międzynarodowych',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w międzynarodowych projektach finansowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania finansowe',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu finansowego/księgowego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjne usługi finansowe',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na rozwój bankowości cyfrowej/fintech',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji oferty',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform finansowych online',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych usług online',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji finansowych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание отдела финансов/бухгалтерии/банков в организации',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия клиентов и партнеров',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие стандартам финансовой отрасли',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы на финансовом рынке',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность финансовых операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность финансовых/бухгалтерских инструментов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Поддержка удалённых и онлайн-услуг',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых финансовых сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов или клиентов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность финансовых продуктов/услуг',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в рейтингах финансовой отрасли',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень финансовых исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в финансовых процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о финансовых предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов финансовыми услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость предоставления услуг',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых финансовых продуктов/услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных финансовых технологий (FinTech)',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля международных операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных финансовых проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные финансовые решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного финансового/бухгалтерского персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционные финансовые услуги',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к развитию цифрового банкинга/финтеха',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания продукта/услуги',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн-финансовых платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных онлайн-услуг',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых финансовых нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Производство
const production = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the production department in the company',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from partners and clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with industry production standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the production sector',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular customers',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of production operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of production equipment and tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions in production',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for logistics and warehousing',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key production segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of product/service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of production analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in production decisions',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in production processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of production offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with production services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of order fulfillment',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new products/services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern production technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of export/import operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified production staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional production',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for automation and digitalization',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of product/service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online and automated production platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own automated production lines',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors’ advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors’ product update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors’ marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new production regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu produkcji w firmie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania partnerów i klientów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branży produkcyjnej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności w sektorze produkcji',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji produkcyjnych',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność sprzętu i narzędzi produkcyjnych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych w produkcji',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie logistyczne i magazynowe',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach produkcyjnych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty produktowej/usługowej',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branżowych',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań produkcyjnych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach produkcyjnych',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach produkcyjnych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty produkcyjnej wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z usług produkcyjnych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji zamówień',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych produktów/usług',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii produkcyjnych',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji eksport/import',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w projektach międzynarodowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu produkcyjnego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjną produkcję',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na automatyзацию и цифровизацию',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji oferty',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform online i automatyzacji produkcji',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych zautomatyzowanych linii produkcyjnych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji produkcyjnych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание производственного отдела в компании',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия партнеров и клиентов',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие отраслевым стандартам производства',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы в производственном секторе',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность производственных операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность производственного оборудования и инструментов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений в производстве',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Логистическая и складская поддержка',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых производственных сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность продуктового/сервисного предложения',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в отраслевых рейтингах',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень производственных исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в производственных решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в производственных процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о производственных предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов производственными услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость выполнения заказов',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых продуктов/услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных производственных технологий',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля экспортно-импортных операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного производственного персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционное производство',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к автоматизации и цифровизации',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания продукта/услуги',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн- и автоматизированных производственных платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных автоматизированных производственных линий',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых производственных нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Логистика
const logistics = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the logistics department in the company',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from partners and clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with industry logistics standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the logistics sector',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular customers',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of logistics operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of logistics equipment and tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions in logistics',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for warehousing and transport',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key logistics segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of logistics service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of logistics analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in logistics decisions',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in logistics processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of logistics offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with logistics services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of order fulfillment',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new logistics services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern logistics technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of international logistics operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international logistics projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized logistics solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified logistics staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional logistics',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for automation and digitalization',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online and automated logistics platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own automated logistics lines',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors’ advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors’ service update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors’ marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new logistics regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu logistyki w firmie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania partnerów i klientów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branży logistycznej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności w sektorze logistyki',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji logistycznych',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność sprzętu i narzędzi logistycznych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych w logistyce',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie magazynowe i transportowe',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach logistycznych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty usług logistycznych',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branżowych',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań logistycznych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach logistycznych',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach logistycznych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty logistycznej wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z usług logistycznych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji zamówień',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych usług logistycznych',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii logistycznych',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji logistycznych międzynarodowych',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w międzynarodowych projektach logistycznych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania logistyczne',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu logistycznego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjną logistykę',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na automatyзацию и цифровизацию',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji usług',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform online i automatyzacji logistyki',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych zautomatyzowanych linii logistycznych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji logistycznych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание отдела логистики в компании',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия партнеров и клиентов',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие отраслевым стандартам логистики',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы в секторе логистики',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность логистических операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность логистического оборудования и инструментов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений в логистике',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Складская и транспортная поддержка',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых логистических сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность логистических услуг',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в отраслевых рейтингах',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень логистических исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в логистических решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в логистических процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о логистических предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов логистическими услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость выполнения заказов',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых логистических услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных логистических технологий',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля международных логистических операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных логистических проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные логистические решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного логистического персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционную логистику',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к автоматизации и цифровизации',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания услуг',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн- и автоматизированных логистических платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных автоматизированных логистических линий',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых логистических нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Маркетинг, Реклама, PR
const marketingAdvertisingPR = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the marketing/PR department in the company',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from partners and clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with industry marketing standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the marketing/PR sector',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular customers',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of marketing/PR operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of marketing equipment and tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions in marketing',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for advertising and PR campaigns',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key marketing segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of marketing service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of marketing analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in marketing decisions',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in marketing processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of marketing offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with marketing services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of campaign execution',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new marketing services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern marketing technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of international marketing operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international marketing projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized marketing solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified marketing staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional marketing',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for automation and digitalization',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online and automated marketing platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own automated marketing lines',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors’ advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors’ service update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors’ marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new marketing regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu marketingu/PR w firmie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania partnerów i klientów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branży marketingowej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności w sektorze marketingu/PR',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji marketingowych/PR',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność sprzętu i narzędzi marketingowych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych w marketingu',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie dla kampanii reklamowych i PR',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach marketingowych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty usług marketingowych',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branżowych',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań marketingowych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach marketingowych',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach marketingowych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty marketingowej wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z usług marketingowych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji kampanii',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych usług marketingowych',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii marketingowych',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji marketingowych międzynarodowych',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w międzynarodowych projektach marketingowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania marketingowe',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu marketingowego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjny marketing',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na automatyzację i cyfryzację',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji usług',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform online i automatyzacji marketingu',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych zautomatyzowanych linii marketingowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji marketingowych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание отдела маркетинга/PR в компании',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия партнеров и клиентов',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие отраслевым стандартам маркетинга',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы в секторе маркетинга/PR',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность маркетинговых/PR-операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность маркетингового оборудования и инструментов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений в маркетинге',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Поддержка рекламных и PR-кампаний',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых маркетинговых сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность маркетинговых услуг',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в отраслевых рейтингах',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень маркетинговых исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в маркетинговых решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в маркетинговых процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о маркетинговых предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов маркетинговыми услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость выполнения кампаний',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых маркетинговых услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных маркетинговых технологий',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля международных маркетинговых операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных маркетинговых проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные маркетинговые решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного маркетингового персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционный маркетинг',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к автоматизации и цифровизации',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания услуг',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн- и автоматизированных маркетинговых платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных автоматизированных маркетинговых линий',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых маркетинговых нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Строительство
const construction = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the construction department in the company',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from partners and clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with industry construction standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the construction sector',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among clients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular customers',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of construction operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of construction equipment and tools',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions in construction',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for construction projects',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key construction segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of construction service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the department',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing clients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in industry rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of construction analysis and research',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in construction decisions',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in construction processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of construction offers among clients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Client satisfaction with construction services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of project completion',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting client needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new construction services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from clients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern construction technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of international construction operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international construction projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new customer groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for customized construction solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international clients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified construction staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional construction',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for automation and digitalization',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online and automated construction platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own automated construction lines',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors’ advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors’ service update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors’ marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new construction regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność działu budowlanego w firmie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania partnerów i klientów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami branży budowlanej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności w sektorze budowlanym',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych klientów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji budowlanych',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność sprzętu i narzędzi budowlanych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych w budownictwie',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie dla projektów budowlanych',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach budowlanych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty usług budowlanych',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o dziale',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty klientów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach branżowych',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom analiz i badań budowlanych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach budowlanych',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach budowlanych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty budowlanej wśród klientów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja klientów z usług budowlanych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji projektów',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb klienta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych usług budowlanych',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony klientów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii budowlanych',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji budowlanych międzynarodowych',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w międzynarodowych projektach budowlanych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup klientów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania budowlane',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla klientów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu budowlanego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjne budownictwo',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na automatyzację i cyfryzację',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji usług',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform online i automatyzacji budownictwa',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych zautomatyzowanych linii budowlanych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji budowlanych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание строительного отдела в компании',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия партнеров и клиентов',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие отраслевым стандартам строительства',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы в строительном секторе',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди клиентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных клиентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность строительных операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность строительного оборудования и инструментов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений в строительстве',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Поддержка строительных проектов',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых строительных сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность строительных услуг',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов об отделе',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери клиентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в отраслевых рейтингах',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень строительных исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в строительных решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в строительных процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность клиентов о строительных предложениях',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность клиентов строительными услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость выполнения проектов',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей клиента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых строительных услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от клиентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных строительных технологий',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля международных строительных операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных строительных проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп клиентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные строительные решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных клиентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного строительного персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционное строительство',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к автоматизации и цифровизации',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания услуг',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн- и автоматизированных строительных платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных автоматизированных строительных линий',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых строительных нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
}

//Образование
const education = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Institution\'s recognition among applicants and employers',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Graduates\' and partners\' satisfaction with education quality',
        answer2: ['Very negative', 'Rather negative', 'Neutral', 'Rather positive', 'Very high'],
        question3: 'Level of accreditations and awards',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Brand and tradition': {
        question1: 'Years operating in education market',
        answer1: ['Less than 5 years', '5-10 years', '10-20 years', '20-30 years', 'More than 30 years'],
        question2: 'Uniqueness of traditions/values',
        answer2: ['None', 'Minimal', 'Some distinctions', 'Notable', 'Strongly unique'],
        question3: 'Alumni loyalty',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Level of self-funding for development',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'External funding sources (grants, donations)',
        answer2: ['None', 'Few', 'Some', 'Significant', 'Very substantial'],
        question3: 'Budget allocated for innovations',
        answer3: ['Less than 2%', '2-5%', '5-10%', '10-15%', 'More than 15%']
    },
    'Developed infrastructure': {
        question1: 'Modernity of facilities',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Fully compliant', 'State-of-the-art'],
        question2: 'Availability of digital resources',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Cutting-edge'],
        question3: 'Additional facilities (dorms, sports etc.)',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Dominance in niche markets',
        answer1: ['None', 'Weak', 'Moderate', 'Strong', 'Leadership'],
        question2: 'Share of applicants choosing specialized programs',
        answer2: ['Less than 10%', '10-25%', '25-40%', '40-60%', 'More than 60%'],
        question3: 'Uniqueness of programs',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes',
        answer1: ['Very strong', 'Strong', 'Neutral', 'Few', 'Virtually none'],
        question2: 'Frequency of applicants choosing competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Rating in rankings and media',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Faculty research productivity',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Research project funding',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Student involvement in research',
        answer3: ['Minimal', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Decision-making speed',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Inter-departmental conflicts',
        answer3: ['Frequent', 'Occasional', 'Moderate', 'Rare', 'Virtually none']
    },
    "Poorly developed marketing": {
        question1: 'Digital promotion activity',
        answer1: ['None', 'Weak', 'Moderate', 'Strong', 'Very strong'],
        question2: 'Applicant awareness of programs',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Promotional events frequency',
        answer3: ['Never', 'Rarely', 'Occasionally', 'Regularly', 'Very frequently']
    },
    'Quality of Service': {
        question1: 'Student satisfaction with organization',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Teaching methods relevance',
        answer2: ['Outdated', 'Partly outdated', 'Standard', 'Modern', 'Innovative'],
        question3: 'Program update frequency',
        answer3: ['Once every 5 years', 'Once every 3-5 years', 'Once every 2-3 years', 'Annually', 'Continuous']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new programs',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for micro-courses/continuing education',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to labor market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Potential for EdTech implementation',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Very significant'],
        question2: 'Availability of tech partners (VR/AI etc.)',
        answer2: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question3: 'Faculty readiness for tech innovations',
        answer3: ['Not ready', 'Low readiness', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of partner universities abroad',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Percentage of international students',
        answer2: ['Less than 1%', '1-3%', '3-5%', '5-10%', 'More than 10%'],
        question3: 'Participation in int\'l programs (Erasmus+ etc.)',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract adult learners',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for retraining programs',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international students',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified faculty',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Faculty development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining traditional education demand',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for online education growth',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of program obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from MOOC platforms (Coursera/edX)',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Institution\'s digitalization level',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own online courses',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors\' advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors\' program update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors\' marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign institution entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new licensing requirements',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for accreditation changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność instytucji wśród kandydatów i pracodawców',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Ocena jakości kształcenia przez absolwentów i partnerów',
        answer2: ['Bardzo negatywna', 'Raczej negatywna', 'Neutralna', 'Raczej pozytywna', 'Bardzo wysoka'],
        question3: 'Poziom akredytacji i nagród',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Marka i tradycja': {
        question1: 'Czas funkcjonowania na rynku edukacyjnym',
        answer1: ['Mniej niż 5 lat', '5-10 lat', '10-20 lat', '20-30 lat', 'Więcej niż 30 lat'],
        question2: 'Unikalność tradycji i wartości',
        answer2: ['Brak', 'Słabo wyrażone', 'Kilka wyróżników', 'Zauważalne', 'Silne różnice'],
        question3: 'Lojalność absolwentów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Poziom własnego finansowania rozwoju',
        answer1: ['Bardzo niski', 'Niski', 'Średni', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Źródła zewnętrznego finansowania',
        answer2: ['Brak', 'Nieliczne', 'Niewielkie', 'Znaczne', 'Bardzo duże'],
        question3: 'Budżet na innowacje',
        answer3: ['Mniej niż 2%', '2-5%', '5-10%', '10-15%', 'Więcej niż 15%']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność bazy materialnej',
        answer1: ['Przestarzała', 'Częściowo nieaktualna', 'Podstawowa', 'Pełna', 'Wzorcowa'],
        question2: 'Dostępność zasobów cyfrowych',
        answer2: ['Brak', 'Ograniczony', 'Podstawowy', 'Pełny', 'Nowoczesny'],
        question3: 'Obiekty dodatkowe',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Dominacja w niszach',
        answer1: ['Brak', 'Słaba', 'Średnia', 'Wysoka', 'Lider'],
        question2: 'Udział specjalistycznych kierunków',
        answer2: ['Mniej niż 10%', '10-25%', '10-25%', '40-60%', 'Więcej niż 60%'],
        question3: 'Unikalność programów',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów',
        answer1: ['Bardzo silne', 'Umiarkowane', 'Neutralne', 'Nieliczne', 'Praktycznie brak'],
        question2: 'Częstotliwość wyboru konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Praktycznie nigdy'],
        question3: 'Ocena w rankingach',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Produktywność naukowa pracowników',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Finansowanie projektów',
        answer2: ['Bardzo niskie', 'Niskie', 'Średnie', 'Wysokie', 'Bardzo wysokie'],
        question3: 'Zaangażowanie studentów',
        answer3: ['Minimalne', 'Niskie', 'Średnie', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Konflikty międzywydziałowe',
        answer3: ['Częste', 'Umiarkowane', 'Sporadyczne', 'Rzadkie', 'Praktycznie brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w mediach',
        answer1: ['Brak', 'Słaba', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty wśród kandydatów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Organizacja wydarzeń promocyjnych',
        answer3: ['Brak', 'Rzadko', 'Okazjonalnie', 'Regularnie', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Zadowolenie studentów',
        answer1: ['Bardzo niskie', 'Niskie', 'Średnie', 'Wysokie', 'Bardzo wysokie'],
        question2: 'Aktualność metod nauczania',
        answer2: ['Przestarzałe', 'Częściowo nieaktualne', 'Standardowe', 'Nowoczesne', 'Innowacyjne'],
        question3: 'Częstotliwość aktualizacji programów',
        answer3: ['Raz na 5 + lat', 'Raz na 3-5 lat', 'Raz na 2-3 lata', 'Rocznie', 'Ciągła']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych programów',
        answer1: ['Bardzo niski', 'Niski', 'Średni', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na kursy krótkoterminowe',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania programu',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Potencjał wdrożenia rozwiązań EdTech',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Duży', 'Bardzo duży'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10'],
        question3: 'Gotowość nauczycieli do innowacji',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerskich uczelni zagranicznych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'więcej niż 10'],
        question2: 'Odsetek studentów zagranicznych',
        answer2: ['<1%', '1-3%', '3-5%', '6-10%', 'Więcej niż 10%'],
        question3: 'Udział w programach międzynarodowych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania dorosłych słuchaczy',
        answer1: ['Brak', 'Niski', 'Średni', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na kursy przekwalifikowujące',
        answer2: ['Brak', 'Niski', 'Średni', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla obcokrajowców',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanych nauczycieli',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Rozwój programów szkoleniowych',
        answer2: ['Brak', 'Słaby', 'Umiarkowany', 'Dobry', 'Bardzo dobry'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku zainteresowania tradycyjną edukacją',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question2: 'Gotowość do edukacji online',
        answer2: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji programów',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform MOOC',
        answer1: ['Krytyczne', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji instytucji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Wzorcowy'],
        question3: 'Dostępność własnych kursów online',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewaga konkurentów',
        answer1: ['Dominująca', 'Znaczna', 'Porównywalna', 'Niewielka', 'Brak'],
        question2: 'Częstotliwość aktualizacji programów u konkurencji',
        answer2: ['Ciągła', 'Częsta', 'Regularna', 'Rzadka', 'Sporadyczna'],
        question3: 'Agresywność działań marketingowych konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Średnia', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Ryzyko pojawienia się silnych nowych podmiotów',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia uczelni zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do zmian',
        answer3: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych wymogów licencyjnych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do nowych standardów akredytacyjnych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Узнаваемость учреждения среди абитуриентов и работодателей',
        answer1: ['Крайне низка', 'Низка', 'Средня', 'Выше среднего', 'Очень высокая'],
        question2: 'Оценка качества образования выпускниками и партнёрами',
        answer2: ['Крайне негативная', 'Скорее негативная', 'Нейтральная', 'Скорее позитивная', 'Очень высокая'],
        question3: 'Уровень признания аккредитаций и наград',
        answer3: ['Нет аккредитаций/наград', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Бренд и традиции': {
        question1: 'Срок существования учреждения',
        answer1: ['Менее 5 лет', '5-10 лет', '10-20 лет', '20-30 лет', 'Более 30 лет'],
        question2: 'Уникальность традиций и ценностей',
        answer2: ['Нет уникальных традиций', 'Слабо выражены', 'Есть несколько отличий', 'Заметно выделяется', 'Сильно отличается от конкурентов'],
        question3: 'Лояльность выпускников',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Высокая', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Уровень собственного финансирования развития',
        answer1: ['Крайне недостаточный', 'Недостаточный', 'Удовлетворительный', 'Хороший', 'Отличный'],
        question2: 'Наличие стабильных внешних источников финансирования (гранты, пожертвования)',
        answer2: ['Практически отсутствуют', 'Единичные случаи', 'Регулярные, но небольшие', 'Значительные', 'Очень существенные'],
        question3: 'Доля бюджета на инновации и улучшение качества',
        answer3: ['Менее 2%', '2-5%', '5-10%', '10-15%', 'Более 15%']

    },
    'Развитая инфраструктура': {
        question1: 'Соответствие материальной базы современным стандартам',
        answer1: ['Полное несоответствие', 'Частичное несоответствие', 'Соответствует минимальным требованиям', 'Полное соответствие', 'Опережающее развитие'],
        question2: 'Доступность цифровых ресурсов для студентов',
        answer2: ['Отсутствует', 'Ограниченный доступ', 'Базовый уровень', 'Широкие возможности', 'Передовые решения'],
        question3: 'Развитость дополнительной инфраструктуры (общежития, спортзалы и т.д.)',
        answer3: ['Отсутствует', 'Минимальная', 'Средняя', 'Хорошая', 'Отличная']

    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Степень доминирования в ключевых нишах',
        answer1: ['Отсутствует', 'Слабая', 'Средняя', 'Высокая', 'Лидерство'],
        question2: 'Доля абитуриентов, выбирающих специализированные программы',
        answer2: ['Менее 10%', '10-25%', '25-40%', '40-60%', 'Более 60%'],
        question3: 'Уникальность образовательных программ',
        answer3: ['Нет уникальных программ', '1-2', '3-5', '6-10', 'Более 10']

    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов',
        answer1: ['Очень сильные', 'Заметные', 'Нейтральное восприятие', 'Минимальные', 'Практически нет негатива'],
        question2: 'Частота выбора конкурентов из-за репутации',
        answer2: ['Очень часто', 'Довольно часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Оценка в рейтингах и СМИ',
        answer3: ['Крайне низкая', 'Ниже среднего', 'Средняя', 'Выше среднего', 'Очень высокая']

    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Продуктивность научной деятельности преподавателей',
        answer1: ['Практически отсутствует', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Финансирование исследовательских проектов',
        answer2: ['Крайне недостаточное', 'Недостаточное', 'Удовлетворительное', 'Хорошее', 'Отличное'],
        question3: 'Вовлеченность студентов в научную работу',
        answer3: ['Единичные случаи', 'Редкое участие', 'Регулярное участие', 'Активное участие', 'Массовое участие']

    },
    'Сложная организация': {
        question1: 'Уровень бюрократизации процессов',
        answer1: ['Крайне высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия управленческих решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота межподразделенческих конфликтов',
        answer3: ['Постоянные', 'Частые', 'Периодические', 'Редкие', 'Практически отсутствуют']

    },
    'Недостаточно развитый маркетинг': {
        question1: 'Продвижение в цифровом пространстве',
        answer1: ['Отсутствует', 'Слабое', 'Умеренное', 'Активное', 'Очень активное'],
        question2: 'Информированность абитуриентов о программах',
        answer2: ['Крайне низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Проведение рекламных мероприятий (дни открытых дверей и т.д.)',
        answer3: ['Не проводятся', 'Редко', 'Периодически', 'Регулярно', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность студентов организацией процесса',
        answer1: ['Крайне низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Актуальность учебных методик',
        answer2: ['Сильно устарели', 'Частично устарели', 'Соответствуют стандартам', 'Современные', 'Инновационные'],
        question3: 'Частота обновления учебных программ',
        answer3: ['Раз в 5+ лет', 'Раз в 3-5 лет', 'Раз в 2-3 года', 'Ежегодно', 'Постоянно']

    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал для введения новых программ',
        answer1: ['Очень низкий', 'Низкий', 'Средний', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на микро-курсы и доп. образование',
        answer2: ['Практически отсутствует', 'Слабый', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации под рынок труда',
        answer3: ['Совсем не гибкие', 'Слабая гибкость', 'Средняя гибкость', 'Высокая гибкость', 'Очень высокая']

    },
    "Доступ к новым технологиям": {
        question1: 'Потенциал внедрения EdTech-решений',
        answer1: ['Отсутствует', 'Ограниченный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Наличие технологических партнерств (VR, AI и др.)',
        answer2: ['Нет партнеров', '1-2', '3-5', '6-10', 'Более 10'],
        question3: 'Готовность преподавателей к технологическим инновациям',
        answer3: ['Полная неготовность', 'Низкая', 'Частичная', 'Высокая', 'Полная']

    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество партнерских зарубежных вузов',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля иностранных студентов',
        answer2: ['Менее 1%', '1-3%', '3-5%', '5-10%', 'Более 10%'],
        question3: 'Участие в международных программах (Erasmus+ и др.)',
        answer3: ['Не участвуем', '1-2 программы', '3-5', '6-10', 'Более 10']

    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения взрослых учащихся',
        answer1: ['Отсутствует', 'Низкий', 'Средний', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на программы переквалификации',
        answer2: ['Очень низкий', 'Низкий', 'Средний', 'Высокий', 'Очень высокий'],
        question3: 'Перспективность новых демографических групп (иностранцы и др.)',
        answer3: ['Не перспективны', 'Мало перспективны', 'Умеренно перспективны', 'Перспективны', 'Очень перспективны']

    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированных преподавателей',
        answer1: ['Крайне низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Развитость программ повышения квалификации',
        answer2: ['Отсутствуют', 'Единичные программы', 'Несколько программ', 'Развитая система', 'Комплексная система'],
        question3: 'Конкурентоспособность зарплат преподавателей',
        answer3: ['Крайне низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']

    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционное образование',
        answer1: ['Критически высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Готовность к росту онлайн-обучения',
        answer2: ['Совсем не готовы', 'Слабо готовы', 'Частично готовы', 'В основном готовы', 'Полностью готовы'],
        question3: 'Риск устаревания образовательных программ',
        answer3: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный']

    },
    'Е-замещение': {
        question1: 'Угроза со стороны MOOCs (Coursera, edX и др.)',
        answer1: ['Критическая', 'Высокая', 'Средняя', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации образовательных процессов',
        answer2: ['Полное отсутствие', 'Начальный уровень', 'Базовый уровень', 'Продвинутый уровень', 'Лидерство'],
        question3: 'Наличие собственных онлайн-курсов',
        answer3: ['Нет', '1-2 курса', '3-5 курсов', '6-10 курсов', 'Более 10 курсов']

    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества ключевых конкурентов',
        answer1: ['Превосходят по всем параметрам', 'Значительно сильнее', 'Сопоставимы', 'Незначительно сильнее', 'Уступают нам'],
        question2: 'Частота обновления программ у конкурентов',
        answer2: ['Постоянно', 'Очень часто', 'Регулярно', 'Периодически', 'Редко'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Крайне агрессивный', 'Очень активный', 'Умеренный', 'Слабый', 'Пассивный']

    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Средняя', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных вузов',
        answer2: ['Критический', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новым конкурентам',
        answer3: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых лицензионных требований',
        answer1: ['Критическое', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения госфинансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к ужесточению аккредитационных норм',
        answer3: ['Совсем не готовы', 'Слабо готовы', 'Частично готовы', 'В основном готовы', 'Полностью готовы']

    }
};

//Медицина
const medicine = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the medical institution in the community',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Level of trust from patients and partners',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Compliance with healthcare standards',
        answer3: ['None', 'Basic', 'Moderate', 'High', 'Full']
    },
    'Brand and tradition': {
        question1: 'Years of operation in the medical sector',
        answer1: ['Less than 2 years', '2-5 years', '5-10 years', '10-20 years', 'More than 20 years'],
        question2: 'Brand recognition among patients',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Loyalty of regular patients',
        answer3: ['Very weak', 'Weak', 'Moderate', 'Strong', 'Very strong']
    },
    'Good financial condition': {
        question1: 'Profitability of medical operations',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Budget for innovations and improvements',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Access to external funding',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Extensive']
    },
    'Developed infrastructure': {
        question1: 'Modernity of medical equipment and facilities',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Cutting-edge'],
        question2: 'Availability of digital solutions in healthcare',
        answer2: ['None', 'Limited', 'Basic', 'Full', 'Advanced'],
        question3: 'Support for patient care and diagnostics',
        answer3: ['None', 'Minimal', 'Basic', 'Good', 'Excellent']
    },
    "Dominant share in some markets": {
        question1: 'Market share in key medical segments',
        answer1: ['None', 'Small', 'Moderate', 'Large', 'Dominant'],
        question2: 'Number of exclusive contracts',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Uniqueness of medical service offer',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Unique']
    },
    //W
    'Perception, image': {
        question1: 'Prevalence of negative stereotypes about the institution',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'None'],
        question2: 'Frequency of losing patients to competitors',
        answer2: ['Very often', 'Often', 'Sometimes', 'Rarely', 'Almost never'],
        question3: 'Reputation in healthcare rankings',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Poorly developed research base': {
        question1: 'Level of medical research and analysis',
        answer1: ['None', 'Minimal', 'Moderate', 'Good', 'Excellent'],
        question2: 'Use of data analytics in medical decisions',
        answer2: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
        question3: 'Investment in research and development',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Complex organization': {
        question1: 'Level of bureaucracy in medical processes',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Speed of decision-making',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Frequency of internal conflicts',
        answer3: ['Very frequent', 'Frequent', 'Occasional', 'Rare', 'None']
    },
    "Poorly developed marketing": {
        question1: 'Activity in digital promotion',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Awareness of medical services among patients',
        answer2: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Frequency of promotional events',
        answer3: ['Never', 'Rarely', 'Sometimes', 'Often', 'Very often']
    },
    'Quality of Service': {
        question1: 'Patient satisfaction with medical services',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Speed of service delivery',
        answer2: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast'],
        question3: 'Flexibility in meeting patient needs',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Full']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new medical services',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for new solutions from patients',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Flexibility to adapt to market needs',
        answer3: ['Very rigid', 'Rigid', 'Moderate', 'Flexible', 'Very flexible']
    },
    "Access to new technologies": {
        question1: 'Implementation of modern medical technologies',
        answer1: ['None', 'Minimal', 'Moderate', 'Significant', 'Full'],
        question2: 'Availability of technology partners',
        answer2: ['None', 'Few', 'Some', 'Many', 'Most'],
        question3: 'Staff readiness for tech innovations',
        answer3: ['Not ready', 'Low', 'Moderate', 'High', 'Fully ready']
    },
    "Possibility of development and cooperation in the international market": {
        question1: 'Number of international partners',
        answer1: ['None', '1-2', '3-5', '6-10', 'More than 10'],
        question2: 'Share of international medical operations',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Participation in international medical projects',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    "The emergence of new customers": {
        question1: 'Potential to attract new patient groups',
        answer1: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Demand for personalized medical solutions',
        answer2: ['None', 'Low', 'Moderate', 'High', 'Very high'],
        question3: 'Appeal to international patients',
        answer3: ['None', 'Low', 'Moderate', 'High', 'Very high']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of qualified medical staff',
        answer1: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
        question2: 'Staff development programs',
        answer2: ['None', 'Basic', 'Moderate', 'Comprehensive', 'Excellent'],
        question3: 'Salary competitiveness',
        answer3: ['Very low', 'Low', 'Moderate', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of declining demand for traditional medicine',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Readiness for automation and digitalization',
        answer2: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready'],
        question3: 'Risk of service obsolescence',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    'E-substitution': {
        question1: 'Threat from online and automated medical platforms',
        answer1: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Level of digitalization',
        answer2: ['None', 'Basic', 'Intermediate', 'Advanced', 'Cutting-edge'],
        question3: 'Availability of own automated medical lines',
        answer3: ['None', '1-2', '3-5', '6-10', 'More than 10']
    },
    'Development of current competition': {
        question1: 'Competitors’ advantages',
        answer1: ['Dominant', 'Significant', 'Comparable', 'Slight', 'None'],
        question2: 'Competitors’ service update frequency',
        answer2: ['Constant', 'Very frequent', 'Regular', 'Occasional', 'Rare'],
        question3: 'Competitors’ marketing aggressiveness',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'None']
    },
    "Opportunity for new competition": {
        question1: 'Likelihood of strong new entrants',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Risk of foreign company entry',
        answer2: ['Critical', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Adaptation speed to new competition',
        answer3: ['Very slow', 'Slow', 'Moderate', 'Fast', 'Very fast']
    },
    'Change of legislation': {
        question1: 'Impact of new medical regulations',
        answer1: ['Paralysing', 'Significant', 'Moderate', 'Minor', 'Minimal'],
        question2: 'Risk of funding cuts',
        answer2: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question3: 'Readiness for compliance changes',
        answer3: ['Not ready', 'Partly ready', 'Moderately ready', 'Mostly ready', 'Fully ready']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Rozpoznawalność placówki medycznej w społeczności',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Poziom zaufania pacjentów i partnerów',
        answer2: ['Bardzo niski', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Zgodność ze standardami opieki zdrowotnej',
        answer3: ['Brak', 'Podstawowa', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Marka i tradycja': {
        question1: 'Lata działalności w sektorze medycznym',
        answer1: ['Mniej niż 2 lata', '2-5 lat', '5-10 lat', '10-20 lat', 'Ponad 20 lat'],
        question2: 'Rozpoznawalność marki wśród pacjentów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Lojalność stałych pacjentów',
        answer3: ['Bardzo słaba', 'Słaba', 'Średnia', 'Wysoka', 'Bardzo silna']
    },
    'Dobra kondycja finansowa': {
        question1: 'Rentowność operacji medycznych',
        answer1: ['Bardzo niska', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Budżet na innowacje i usprawnienia',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Dostęp do zewnętrznego finansowania',
        answer3: ['Brak', 'Minimalny', 'Umiarkowany', 'Znaczny', 'Bardzo szeroki']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność sprzętu i obiektów medycznych',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowocześniejsze'],
        question2: 'Dostępność rozwiązań cyfrowych w opiece zdrowotnej',
        answer2: ['Brak', 'Ograniczona', 'Podstawowa', 'Pełna', 'Zaawansowana'],
        question3: 'Wsparcie dla opieki nad pacjentem i diagnostyki',
        answer3: ['Brak', 'Minimalne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Udział w kluczowych segmentach medycznych',
        answer1: ['Brak', 'Niewielki', 'Umiarkowany', 'Duży', 'Dominujący'],
        question2: 'Liczba kontraktów na wyłączność',
        answer2: ['Brak', 'Niewiele', 'Kilka', 'Wiele', 'Większość'],
        question3: 'Unikalność oferty usług medycznych',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Unikalna']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Rozpowszechnienie negatywnych stereotypów o placówce',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Brak'],
        question2: 'Częstotliwość utraty pacjentów na rzecz konkurencji',
        answer2: ['Bardzo często', 'Często', 'Czasami', 'Rzadko', 'Prawie nigdy'],
        question3: 'Reputacja w rankingach opieki zdrowotnej',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Poziom badań i analiz medycznych',
        answer1: ['Brak', 'Minimalny', 'Umiarkowany', 'Dobry', 'Znakomity'],
        question2: 'Wykorzystanie analityki danych w decyzjach medycznych',
        answer2: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Zawsze'],
        question3: 'Inwestycje w badania i rozwój',
        answer3: ['Brak', 'Niskie', 'Umiarkowane', 'Wysokie', 'Bardzo wysokie']
    },
    'Złożona organizacja': {
        question1: 'Poziom biurokracji w procesach medycznych',
        answer1: ['Bardzo wysoki', 'Wysoki', 'Średni', 'Niski', 'Minimalny'],
        question2: 'Szybkość podejmowania decyzji',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Częstotliwość konfliktów wewnętrznych',
        answer3: ['Bardzo częste', 'Częste', 'Okazjonalne', 'Rzadkie', 'Brak']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Aktywność w promocji cyfrowej',
        answer1: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Świadomość oferty medycznej wśród pacjentów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Częstotliwość wydarzeń promocyjnych',
        answer3: ['Nigdy', 'Rzadko', 'Czasami', 'Często', 'Bardzo często']
    },
    'Jakość usług': {
        question1: 'Satysfakcja pacjentów z usług medycznych',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Szybkość realizacji usług',
        answer2: ['Bardzo wolna', 'Wolna', 'Średnia', 'Szybka', 'Bardzo szybka'],
        question3: 'Elastyczność w realizacji potrzeb pacjenta',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych usług medycznych',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na nowe rozwiązania ze strony pacjentów',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Elastyczność dostosowania do potrzeb rynku',
        answer3: ['Bardzo sztywny', 'Sztywny', 'Umiarkowany', 'Elastyczny', 'Bardzo elastyczny']
    },
    'Dostęp do nowych technologii': {
        question1: 'Wdrożenie nowoczesnych technologii medycznych',
        answer1: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Pełne'],
        question2: 'Dostępność partnerów technologicznych',
        answer2: ['Brak', 'Niewielu', 'Kilku', 'Wielu', 'Większość'],
        question3: 'Gotowość personelu na innowacje',
        answer3: ['Brak', 'Niska', 'Umiarkowana', 'Wysoka', 'Pełna']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Liczba partnerów międzynarodowych',
        answer1: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10'],
        question2: 'Udział operacji medycznych międzynarodowych',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Udział w międzynarodowych projektach medycznych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Ponad 10']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania nowych grup pacjentów',
        answer1: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Popyt na indywidualne rozwiązania medyczne',
        answer2: ['Brak', 'Niski', 'Umiarkowany', 'Wysoki', 'Bardzo wysoki'],
        question3: 'Atrakcyjność dla pacjentów zagranicznych',
        answer3: ['Brak', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykwalifikowanego personelu medycznego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Programy rozwoju personelu',
        answer2: ['Brak', 'Podstawowe', 'Umiarkowane', 'Kompleksowe', 'Znakomite'],
        question3: 'Konkurencyjność wynagrodzeń',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko spadku popytu na tradycyjną medycynę',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Gotowość na automatyzację i cyfryzację',
        answer2: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna'],
        question3: 'Ryzyko dezaktualizacji usług',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    'E-substytucja': {
        question1: 'Zagrożenie ze strony platform online i automatyzacji medycyny',
        answer1: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Poziom cyfryzacji',
        answer2: ['Brak', 'Podstawowy', 'Średni', 'Zaawansowany', 'Najnowocześniejszy'],
        question3: 'Dostępność własnych zautomatyzowanych linii medycznych',
        answer3: ['Brak', '1-2', '3-5', '6-10', 'Więcej niż 10']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewagi konkurencji',
        answer1: ['Dominujące', 'Znaczne', 'Porównywalne', 'Niewielkie', 'Brak'],
        question2: 'Częstotliwość aktualizacji oferty konkurencji',
        answer2: ['Stała', 'Bardzo częsta', 'Regularna', 'Okazjonalna', 'Rzadka'],
        question3: 'Agresywność marketingu konkurencji',
        answer3: ['Bardzo wysoka', 'Wysoka', 'Umiarkowana', 'Niska', 'Brak']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Prawdopodobieństwo wejścia silnych nowych graczy',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Ryzyko wejścia firm zagranicznych',
        answer2: ['Krytyczne', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question3: 'Szybkość adaptacji do nowej konkurencji',
        answer3: ['Bardzo wolna', 'Wolna', 'Umiarkowana', 'Szybka', 'Bardzo szybka']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych regulacji medycznych',
        answer1: ['Paraliżujący', 'Znaczny', 'Umiarkowany', 'Niewielki', 'Minimalny'],
        question2: 'Ryzyko cięć budżetowych',
        answer2: ['Bardzo wysokie', 'Wysokie', 'Średnie', 'Niskie', 'Minimalne'],
        question3: 'Gotowość do zmian w przepisach',
        answer3: ['Brak', 'Częściowa', 'Umiarkowana', 'W większości', 'Pełna']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание медицинского учреждения в сообществе',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Уровень доверия пациентов и партнеров',
        answer2: ['Очень низкий', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Соответствие стандартам здравоохранения',
        answer3: ['Нет', 'Базовое', 'Умеренное', 'Высокое', 'Полное']
    },
    'Бренд и традиции': {
        question1: 'Годы работы в медицинском секторе',
        answer1: ['Менее 2 лет', '2-5 лет', '5-10 лет', '10-20 лет', 'Более 20 лет'],
        question2: 'Узнаваемость бренда среди пациентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Лояльность постоянных пациентов',
        answer3: ['Очень слабая', 'Слабая', 'Средняя', 'Сильная', 'Очень сильная']
    },
    'Хорошее финансовое состояние': {
        question1: 'Рентабельность медицинских операций',
        answer1: ['Очень низкая', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Бюджет на инновации и улучшения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Доступ к внешнему финансированию',
        answer3: ['Нет', 'Минимальный', 'Умеренный', 'Значительный', 'Очень широкий']
    },
    'Развитая инфраструктура': {
        question1: 'Современность медицинского оборудования и объектов',
        answer1: ['Устаревшие', 'Частично устаревшие', 'Базовые', 'Современные', 'Передовые'],
        question2: 'Доступность цифровых решений в здравоохранении',
        answer2: ['Нет', 'Ограниченная', 'Базовая', 'Полная', 'Продвинутая'],
        question3: 'Поддержка ухода за пациентами и диагностики',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Хорошая', 'Отличная']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Доля на ключевых медицинских сегментах',
        answer1: ['Нет', 'Малая', 'Умеренная', 'Большая', 'Доминирующая'],
        question2: 'Количество эксклюзивных контрактов',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Уникальность медицинских услуг',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Уникальная']
    },
    //W
    'Восприятие, образ': {
        question1: 'Распространённость негативных стереотипов о учреждении',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет'],
        question2: 'Частота потери пациентов в пользу конкурентов',
        answer2: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Почти никогда'],
        question3: 'Репутация в рейтингах здравоохранения',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Уровень медицинских исследований и анализа',
        answer1: ['Нет', 'Минимальный', 'Умеренный', 'Хороший', 'Отличный'],
        question2: 'Использование аналитики данных в медицинских решениях',
        answer2: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Всегда'],
        question3: 'Инвестиции в исследования и развитие',
        answer3: ['Нет', 'Низкие', 'Умеренные', 'Высокие', 'Очень высокие']
    },
    'Сложная организация': {
        question1: 'Уровень бюрократии в медицинских процессах',
        answer1: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question2: 'Скорость принятия решений',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Частота внутренних конфликтов',
        answer3: ['Очень часто', 'Часто', 'Иногда', 'Редко', 'Нет']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Активность в цифровом продвижении',
        answer1: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question2: 'Осведомленность пациентов о медицинских услугах',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Частота промо-мероприятий',
        answer3: ['Никогда', 'Редко', 'Иногда', 'Часто', 'Очень часто']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность пациентов медицинскими услугами',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Скорость оказания услуг',
        answer2: ['Очень медленная', 'Медленная', 'Средняя', 'Быстрая', 'Очень быстрая'],
        question3: 'Гибкость в удовлетворении потребностей пациента',
        answer3: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Полная']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал внедрения новых медицинских услуг',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на новые решения от пациентов',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Гибкость адаптации к рынку',
        answer3: ['Очень жесткая', 'Жесткая', 'Умеренная', 'Гибкая', 'Очень гибкая']
    },
    "Доступ к новым технологиям": {
        question1: 'Внедрение современных медицинских технологий',
        answer1: ['Нет', 'Минимальное', 'Умеренное', 'Значительное', 'Полное'],
        question2: 'Доступность технологических партнеров',
        answer2: ['Нет', 'Мало', 'Несколько', 'Много', 'Большинство'],
        question3: 'Готовность персонала к инновациям',
        answer3: ['Не готов', 'Низкая', 'Умеренная', 'Высокая', 'Полная готовность']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Количество международных партнеров',
        answer1: ['Нет', '1-2', '3-5', '6-10', 'Более 10'],
        question2: 'Доля международных медицинских операций',
        answer2: ['Нет', 'Низкая', 'Умеренная', 'Высокая', 'Очень высокая'],
        question3: 'Участие в международных медицинских проектах',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения новых групп пациентов',
        answer1: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question2: 'Спрос на индивидуальные медицинские решения',
        answer2: ['Нет', 'Низкий', 'Умеренный', 'Высокий', 'Очень высокий'],
        question3: 'Привлекательность для иностранных пациентов',
        answer3: ['Нет', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность квалифицированного медицинского персонала',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Программы развития персонала',
        answer2: ['Нет', 'Базовые', 'Умеренные', 'Комплексные', 'Отличные'],
        question3: 'Конкурентоспособность зарплат',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения спроса на традиционную медицину',
        answer1: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Готовность к автоматизации и цифровизации',
        answer2: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная'],
        question3: 'Риск устаревания услуг',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    },
    'Е-замещение': {
        question1: 'Угроза со стороны онлайн- и автоматизированных медицинских платформ',
        answer1: ['Критическая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Уровень цифровизации',
        answer2: ['Нет', 'Базовый', 'Средний', 'Продвинутый', 'Передовой'],
        question3: 'Наличие собственных автоматизированных медицинских линий',
        answer3: ['Нет', '1-2', '3-5', '6-10', 'Более 10']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущества конкурентов',
        answer1: ['Доминирующие', 'Значительные', 'Сопоставимые', 'Незначительные', 'Нет'],
        question2: 'Частота обновления предложений конкурентов',
        answer2: ['Постоянная', 'Очень частая', 'Регулярная', 'Время от времени', 'Редкая'],
        question3: 'Агрессивность маркетинга конкурентов',
        answer3: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Нет']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Вероятность появления сильных новых игроков',
        answer1: ['Очень высокая', 'Высокая', 'Умеренная', 'Низкая', 'Минимальная'],
        question2: 'Риск выхода на рынок иностранных компаний',
        answer2: ['Критический', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question3: 'Скорость адаптации к новой конкуренции',
        answer3: ['Очень медленная', 'Медленная', 'Умеренная', 'Быстрая', 'Очень быстрая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых медицинских нормативов',
        answer1: ['Парализующее', 'Значительное', 'Умеренное', 'Незначительное', 'Минимальное'],
        question2: 'Риск сокращения финансирования',
        answer2: ['Очень высокий', 'Высокий', 'Средний', 'Низкий', 'Минимальный'],
        question3: 'Готовность к изменениям в регулировании',
        answer3: ['Нет', 'Частичная', 'Умеренная', 'В основном', 'Полная']
    }
};

//Транспорт
const transport = {
    //EN
    //S
    'Designated operator status': {
        question1: 'Recognition of the transport field among employers',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Cooperation with transport companies',
        answer2: ['No cooperation', 'Few contacts', 'Moderate cooperation', 'Active cooperation', 'Strategic partnerships'],
        question3: 'Industry accreditations',
        answer3: ['None', '1 accreditation', '2-3 accreditations', '4-5 accreditations', 'More than 5']
    },
    'Brand and tradition': {
        question1: 'History of the transport field',
        answer1: ['Less than 5 years', '5-10 years', '10-20 years', '20-30 years', 'More than 30 years'],
        question2: 'Recognition among candidates',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Diploma prestige',
        answer3: ['Low', 'Rather low', 'Average', 'High', 'Very high']
    },
    'Good financial condition': {
        question1: 'Budget for field development',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'External funding',
        answer2: ['None', 'Few', 'Moderate', 'Significant', 'Very large'],
        question3: 'Investments in modern technologies',
        answer3: ['None', 'Minimal', 'Moderate', 'Significant', 'Very large']
    },
    'Developed infrastructure': {
        question1: 'Modernity of laboratories and classrooms',
        answer1: ['No modern infrastructure', 'Few modern elements', 'Half of equipment is modern', 'Most is modern', 'Fully modern infrastructure'],
        question2: 'Access to specialized transport equipment',
        answer2: ['No access', 'Limited access', 'Basic access', 'Good access', 'Full access to latest solutions'],
        question3: 'Infrastructure for practical training',
        answer3: ['None', 'Minimal', 'Basic', 'Developed', 'Model']
    },
    'Dominant share in some markets': {
        question1: 'Position in the educational market for transport',
        answer1: ['Marginal', 'Niche', 'Average', 'Strong', 'Leading'],
        question2: 'Recognition among key employers',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Share of graduates in the transport sector',
        answer3: ['Below 10%', '10-25%', '25-40%', '40-60%', 'Above 60%']
    },
    //W
    'Perception, image': {
        question1: 'Assessment of the field by students',
        answer1: ['Very negative', 'Rather negative', 'Neutral', 'Rather positive', 'Very positive'],
        question2: 'Attractiveness compared to competition',
        answer2: ['Much worse', 'Slightly worse', 'Comparable', 'Slightly better', 'Much better'],
        question3: 'Opinions of graduates in the labor market',
        answer3: ['Very negative', 'Rather negative', 'Neutral', 'Rather positive', 'Very positive']
    },
    'Poorly developed research base': {
        question1: 'Laboratory equipment',
        answer1: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Latest generation'],
        question2: 'Research projects',
        answer2: ['None', 'Few', 'Moderate number', 'Numerous', 'Very numerous'],
        question3: 'Scientific cooperation with companies',
        answer3: ['None', 'Few', 'Moderate', 'Active', 'Very intensive']
    },
    'Complex organization': {
        question1: 'Transparency of the recruitment process',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Effectiveness of internal communication',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Flexibility in implementing changes',
        answer3: ['No flexibility', 'Low flexibility', 'Average flexibility', 'High flexibility', 'Very high flexibility']
    },
    'Poorly developed marketing': {
        question1: 'Presence in social media',
        answer1: ['None', 'Trace', 'Basic', 'Active', 'Very active'],
        question2: 'Organization of open days',
        answer2: ['None', 'Rare', 'Occasional', 'Regular', 'Very frequent'],
        question3: 'Promotional materials',
        answer3: ['None', 'Few', 'Basic', 'Good', 'Model']
    },
    'Quality of Service': {
        question1: 'Student satisfaction with the teaching process',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Up-to-dateness of the curriculum',
        answer2: ['Outdated', 'Partly outdated', 'Basic', 'Modern', 'Innovative'],
        question3: 'Availability of lecturers',
        answer3: ['Very low', 'Low', 'Average', 'High', 'Very high']
    },
    //O
    'Extension, change of offer': {
        question1: 'Potential to introduce new specializations',
        answer1: ['No possibility', 'Low potential', 'Moderate potential', 'High potential', 'Very high potential'],
        question2: 'Possibility of introducing dual studies',
        answer2: ['Does not exist', 'Unlikely', 'Possible with significant effort', 'Realistic in the medium term', 'Easy to implement'],
        question3: 'Flexibility of program modifications',
        answer3: ['No flexibility', 'Low flexibility', 'Average flexibility', 'High flexibility', 'Full flexibility']
    },
    'Access to new technologies': {
        question1: 'Possibility of implementing transport simulators',
        answer1: ['No possibility', 'To a limited extent', 'To a basic extent', 'To a wide extent', 'Full implementation possible'],
        question2: 'Access to IoT technology in logistics',
        answer2: ['No access', 'Limited access', 'Basic access', 'Good access', 'Full access'],
        question3: 'Cooperation with technology companies',
        answer3: ['No cooperation', 'Few contacts', 'Moderate cooperation', 'Active cooperation', 'Strategic partnerships']
    },
    'Possibility of development and cooperation in the international market': {
        question1: 'Potential of student exchange programs',
        answer1: ['No possibility', 'Low potential', 'Moderate potential', 'High potential', 'Very high potential'],
        question2: 'Possibility of double degrees',
        answer2: ['Does not exist', 'Unlikely', 'Possible with significant effort', 'Realistic in the medium term', 'Easy to implement'],
        question3: 'Cooperation with foreign technical universities',
        answer3: ['No cooperation', 'Few contacts', 'Moderate cooperation', 'Active cooperation', 'Strategic partnerships']
    },
    'The emergence of new customers': {
        question1: 'Potential to attract foreign students',
        answer1: ['No possibility', 'Low potential', 'Moderate potential', 'High potential', 'Very high potential'],
        question2: 'Attractiveness for working professionals',
        answer2: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question3: 'Possibility of lifelong learning',
        answer3: ['No possibility', 'To a limited extent', 'To a basic extent', 'To a wide extent', 'Full possibilities']
    },
    'Availability of specialists in the market': {
        question1: 'Availability of lecturers with transport experience',
        answer1: ['Very low', 'Low', 'Average', 'High', 'Very high'],
        question2: 'Possibility of employing practitioners',
        answer2: ['Very difficult', 'Difficult', 'Moderate', 'Easy', 'Very easy'],
        question3: 'Competitiveness of salaries for specialists',
        answer3: ['Very low', 'Low', 'Average', 'High', 'Very high']
    },
    //T
    'Changes in market trends': {
        question1: 'Risk of decreasing interest in the transport field',
        answer1: ['Critically high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Impact of automation on demand for specialists',
        answer2: ['Very negative', 'Negative', 'Neutral', 'Positive', 'Very positive'],
        question3: 'Adaptation of the program to changing market needs',
        answer3: ['No possibility of adaptation', 'Very limited', 'Partial', 'Good', 'Full']
    },
    'E-substitution': {
        question1: 'Risk of replacing traditional classes with remote forms',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Competition from e-learning platforms',
        answer2: ['Very strong', 'Strong', 'Moderate', 'Weak', 'None'],
        question3: 'Readiness for digital transformation',
        answer3: ['No preparation', 'Weak', 'Basic', 'Good', 'Full']
    },
    'Development of current competition': {
        question1: 'Advantage of competing universities',
        answer1: ['Dominant', 'Significant', 'Moderate', 'Slight', 'None'],
        question2: 'Attractiveness of competitors’ offers',
        answer2: ['Much more attractive', 'Slightly more attractive', 'Comparable', 'Slightly less attractive', 'Much less attractive'],
        question3: 'Frequency of program updates at competitors',
        answer3: ['Very frequent', 'Frequent', 'Moderate', 'Rare', 'Very rare']
    },
    'Opportunity for new competition': {
        question1: 'Risk of entry of foreign universities into the market',
        answer1: ['Very high', 'High', 'Moderate', 'Low', 'Minimal'],
        question2: 'Emergence of new forms of education',
        answer2: ['Very likely', 'Likely', 'Possible', 'Unlikely', 'Very unlikely'],
        question3: 'Ability to quickly respond to new competition',
        answer3: ['No ability to respond', 'Very limited', 'Moderate', 'Good', 'Very good']
    },
    'Change of legislation': {
        question1: 'Impact of new transport regulations',
        answer1: ['Very negative', 'Negative', 'Neutral', 'Positive', 'Very positive'],
        question2: 'Adaptation of the program to new requirements',
        answer2: ['Very difficult', 'Difficult', 'Moderately difficult', 'Easy', 'Very easy'],
        question3: 'Risk of losing entitlements',
        answer3: ['Very high', 'High', 'Moderate', 'Low', 'Minimal']
    },
    //PL
    //S
    'Status operatora wyznaczonego': {
        question1: 'Uznanie kierunku transport wśród pracodawców',
        answer1: ['Bardzo niskie', 'Niskie', 'Średnie', 'Wysokie', 'Bardzo wysokie'],
        question2: 'Współpraca z firmami transportowymi',
        answer2: ['Brak współpracy', 'Nieliczne kontakty', 'Umiarkowana współpraca', 'Aktywna współpraca', 'Strategicze partnerstwa'],
        question3: 'Akredytacje branżowe',
        answer3: ['Brak', '1 akredytacja', '2-3 akredytacje', '4-5 akredytacji', 'Więcej niż 5']
    },
    'Marka i tradycja': {
        question1: 'Historia kierunku transport',
        answer1: ['Mniej niż 5 lat', '5-10 lat', '10-20 lat', '20-30 lat', 'Ponad 30 lat'],
        question2: 'Rozpoznawalność wśród kandydatów',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Prestż dyplomu',
        answer3: ['Niski', 'Raczej niski', 'Średni', 'Wysoki', 'Bardzo wysoki']
    },
    'Dobra kondycja finansowa': {
        question1: 'Budżet na rozwój kierunku',
        answer1: ['Bardzo niski', 'Niski', 'Średni', 'Wysoki', 'Bardzo wysoki'],
        question2: 'Dofinansowanie zewnętrzne',
        answer2: ['Brak', 'Nieliczne', 'Umiarkowane', 'Znaczne', 'Bardzo duże'],
        question3: 'Inwestycje w nowoczesne technologie',
        answer3: ['Brak', 'Minimalne', 'Umiarkowane', 'Znaczne', 'Bardzo duże']
    },
    'Rozbudowana infrastruktura': {
        question1: 'Nowoczesność laboratoriów i sal dydaktycznych',
        answer1: ['Brak nowoczesnej infrastruktury', 'Nieliczne nowoczesne elementy', 'Połowa wyposażenia nowoczesna', 'Większość nowoczesna', 'Całkowicie nowoczesna infrastruktura'],
        question2: 'Dostęp do specjalistycznych urządzeń transportowych',
        answer2: ['Brak dostępu', 'Ograniczony dostęp', 'Podstawowy dostęp', 'Dobry dostęp', 'Pełny dostęp do najnowszych rozwiązań'],
        question3: 'Infrastruktura do praktycznej nauki zawodu',
        answer3: ['Brak', 'Minimalna', 'Podstawowa', 'Rozbudowana', 'Wzorcowa']
    },
    'Dominujący udział w niektórych rynkach': {
        question1: 'Pozycja na rynku edukacyjnym w zakresie transportu',
        answer1: ['Marginalna', 'Niszowa', 'Średnia', 'Silna', 'Wiodąca'],
        question2: 'Rozpoznawalność wśród kluczowych pracodawców',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Udział absolwentów w sektorze transportowym',
        answer3: ['Ponizej 10%', '10-25%', '25-40%', '40-60%', 'Powyżej 60%']
    },
    //W
    'Postrzeganie, wizerunek': {
        question1: 'Ocena kierunku przez studentów',
        answer1: ['Bardzo negatywna', 'Raczej negatywna', 'Neutralna', 'Raczej pozytywna', 'Bardzo pozytywna'],
        question2: 'Atrakcyjność w porównaniu z konkurencją',
        answer2: ['Znacznie gorsza', 'Nieco gorsza', 'Porównywalna', 'Nieco lepsza', 'Znacznie lepsza'],
        question3: 'Opinie absolwentów na rynku pracy',
        answer3: ['Bardzo negatywne', 'Raczej negatywne', 'Neutralne', 'Raczej pozytywne', 'Bardzo pozytywne']
    },
    'Słabo rozwinięte zaplecze badawczo-rozwojowe': {
        question1: 'Wyposażenie laboratoriów',
        answer1: ['Przestarzałe', 'Częściowo nieaktualne', 'Podstawowe', 'Nowoczesne', 'Najnowszej generacji'],
        question2: 'Projekty badawcze',
        answer2: ['Brak', 'Nieliczne', 'Umiarkowana liczba', 'Liczne', 'Bardzo liczne'],
        question3: 'Współpraca naukowo-badawcza z firmami',
        answer3: ['Brak', 'Nieliczne', 'Umiarkowana', 'Aktywna', 'Bardzo intensywna']
    },
    'Złożona organizacja': {
        question1: 'Przejrzystość procesu rekrutacyjnego',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Skuteczność komunikacji wewnętrznej',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Elastyczność w wprowadzaniu zmian',
        answer3: ['Brak elastyczności', 'Niska elastyczność', 'Średnia elastyczność', 'Wysoka elastyczność', 'Bardzo wysoka elastyczność']
    },
    'Słabo rozwinięty marketing': {
        question1: 'Obecność w mediach społecznościowych',
        answer1: ['Brak', 'Śladowa', 'Podstawowa', 'Aktywna', 'Bardzo aktywna'],
        question2: 'Organizacja dni otwartych',
        answer2: ['Brak', 'Rzadkie', 'Okazjonalne', 'Regularne', 'Bardzo częste'],
        question3: 'Materiały promocyjne',
        answer3: ['Brak', 'Nieliczne', 'Podstawowe', 'Dobre', 'Wzorowe']
    },
    'Jakość usług': {
        question1: 'Zadowolenie studentów z procesu dydaktycznego',
        answer1: ['Bardzo niskie', 'Niskie', 'Średnie', 'Wysokie', 'Bardzo wysokie'],
        question2: 'Aktualność programu nauczania',
        answer2: ['Przestarzały', 'Częściowo nieaktualny', 'Podstawowy', 'Nowoczesny', 'Innowacyjny'],
        question3: 'Dostępność wykładowców',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //O
    'Rozszerzenie, zmiana oferty': {
        question1: 'Potencjał wprowadzenia nowych specjalizacji',
        answer1: ['Brak możliwości', 'Niski potencjał', 'Umiarkowany potencjał', 'Duży potencjał', 'Bardzo duży potencjał'],
        question2: 'Możliwość wprowadzenia studiów dualnych',
        answer2: ['Nie istnieje', 'Mało prawdopodobne', 'Możliwe przy znacznym wysiłku', 'Realne w średnim okresie', 'Łatwe do wdrożenia'],
        question3: 'Elastyczność modyfikacji programowych',
        answer3: ['Brak elastyczności', 'Niska elastyczność', 'Średnia elastyczność', 'Wysoka elastyczność', 'Pełna elastyczność']
    },
    'Dostęp do nowych technologii': {
        question1: 'Możliwość wdrożenia symulatorów transportowych',
        answer1: ['Brak możliwości', 'W ograniczonym zakresie', 'W podstawowym zakresie', 'W szerokim zakresie', 'Pełne wdrożenie możliwe'],
        question2: 'Dostęp do technologii IoT w logistyce',
        answer2: ['Brak dostępu', 'Ograniczony dostęp', 'Podstawowy dostęp', 'Dobry dostęp', 'Pełny dostęp'],
        question3: 'Współpraca z firmami technologicznymi',
        answer3: ['Brak współpracy', 'Nieliczne kontakty', 'Umiarkowana współpraca', 'Aktywna współpraca', 'Strategicze partnerstwa']
    },
    'Możliwość rozwoju i współpracy na rynku międzynarodowym': {
        question1: 'Potencjał programu wymiany studentów',
        answer1: ['Brak możliwości', 'Niski potencjał', 'Umiarkowany potencjał', 'Duży potencjał', 'Bardzo duży potencjał'],
        question2: 'Możliwość podwójnych dyplomów',
        answer2: ['Nie istnieje', 'Mało prawdopodobne', 'Możliwe przy znacznym wysiłku', 'Realne w średnim okresie', 'Łatwe do wdrożenia'],
        question3: 'Współpraca z zagranicznymi uczelniami technicznymi',
        answer3: ['Brak współpracy', 'Nieliczne kontakty', 'Umiarkowana współpraca', 'Aktywna współpraca', 'Strategicze partnerstwa']
    },
    'Pojawienie się nowych grup odbiorców': {
        question1: 'Potencjał pozyskania studentów zagranicznych',
        answer1: ['Brak możliwości', 'Niski potencjał', 'Umiarkowany potencjał', 'Duży potencjał', 'Bardzo duży potencjał'],
        question2: 'Atrakcyjność dla pracujących zawodowo',
        answer2: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question3: 'Możliwość kształcenia ustawicznego',
        answer3: ['Brak możliwości', 'W ograniczonym zakresie', 'W podstawowym zakresie', 'W szerokim zakresie', 'Pełne możliwości']
    },
    'Dostępność specjalistów na rynku': {
        question1: 'Dostępność wykładowców z doświadczeniem w transporcie',
        answer1: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka'],
        question2: 'Możliwość zatrudnienia praktyków',
        answer2: ['Bardzo trudna', 'Trudna', 'Umiarkowana', 'Łatwa', 'Bardzo łatwa'],
        question3: 'Konkurencyjność wynagrodzeń dla specjalistów',
        answer3: ['Bardzo niska', 'Niska', 'Średnia', 'Wysoka', 'Bardzo wysoka']
    },
    //T
    'Zmiany trendów rynkowych': {
        question1: 'Ryzyko zmniejszenia zainteresowania kierunkiem transport',
        answer1: ['Krytycznie wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Wpływ automatyzacji na zapotrzebowanie na specjalistów',
        answer2: ['Bardzo negatywny', 'Negatywny', 'Neutralny', 'Pozytywny', 'Bardzo pozytywny'],
        question3: 'Dostosowanie programu do zmieniających się potrzeb rynku',
        answer3: ['Brak możliwości dostosowania', 'Bardzo ograniczone', 'Częściowe', 'Dobre', 'Pełne']
    },
    'E-substytucja': {
        question1: 'Ryzyko zastąpienia tradycyjnych zajęć formami zdalnymi',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Konkurencja ze strony platform e-learningowych',
        answer2: ['Bardzo silna', 'Silna', 'Umiarkowana', 'Słaba', 'Brak'],
        question3: 'Gotowość do transformacji cyfrowej',
        answer3: ['Brak przygotowania', 'Słabe', 'Podstawowe', 'Dobre', 'Pełne']
    },
    'Rozwój obecnej konkurencji': {
        question1: 'Przewaga konkurencyjnych uczelni',
        answer1: ['Dominująca', 'Znaczna', 'Umiarkowana', 'Niewielka', 'Brak'],
        question2: 'Atrakcyjność ofert konkurencji',
        answer2: ['Znacznie bardziej atrakcyjna', 'Nieco bardziej atrakcyjna', 'Porównywalna', 'Nieco mniej atrakcyjna', 'Znacznie mniej atrakcyjna'],
        question3: 'Częstotliwość aktualizacji programów u konkurencji',
        answer3: ['Bardzo częsta', 'Częsta', 'Umiarkowana', 'Rzadka', 'Bardzo rzadka']
    },
    'Możliwość pojawienia się nowej konkurencji': {
        question1: 'Ryzyko wejścia na rynek zagranicznych uczelni',
        answer1: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne'],
        question2: 'Pojawienie się nowych form kształcenia',
        answer2: ['Bardzo prawdopodobne', 'Prawdopodobne', 'Możliwe', 'Mało prawdopodobne', 'Bardzo mało prawdopodobne'],
        question3: 'Zdolność do szybkiej reakcji na nową konkurencję',
        answer3: ['Brak możliwości reakcji', 'Bardzo ograniczona', 'Umiarkowana', 'Dobra', 'Bardzo dobra']
    },
    'Zmiana regulacji prawnych': {
        question1: 'Wpływ nowych przepisów dotyczących transportu',
        answer1: ['Bardzo negatywny', 'Negatywny', 'Neutralny', 'Pozytywny', 'Bardzo pozytywny'],
        question2: 'Dostosowanie programu do nowych wymogów',
        answer2: ['Bardzo trudne', 'Trudne', 'Umiarkowanie trudne', 'Łatwe', 'Bardzo łatwe'],
        question3: 'Ryzyko utraty uprawnień',
        answer3: ['Bardzo wysokie', 'Wysokie', 'Umiarkowane', 'Niskie', 'Minimalne']
    },
    //RU
    //S
    'Статус назначенного оператора': {
        question1: 'Признание направления транспорт среди работодателей',
        answer1: ['Очень низкое', 'Низкое', 'Среднее', 'Высокое', 'Очень высокое'],
        question2: 'Сотрудничество с транспортными компаниями',
        answer2: ['Нет сотрудничества', 'Немного контактов', 'Умеренное сотрудничество', 'Активное сотрудничество', 'Стратегические партнерства'],
        question3: 'Отраслевые аккредитации',
        answer3: ['Нет', '1 аккредитация', '2-3 аккредитации', '4-5 аккредитаций', 'Более 5']
    },
    'Бренд и традиции': {
        question1: 'История направления транспорт',
        answer1: ['Менее 5 лет', '5-10 лет', '10-20 лет', '20-30 лет', 'Более 30 лет'],
        question2: 'Узнаваемость среди абитуриентов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Престиж диплома',
        answer3: ['Низкий', 'Скорее низкий', 'Средний', 'Высокий', 'Очень высокий']
    },
    'Хорошее финансовое состояние': {
        question1: 'Бюджет на развитие направления',
        answer1: ['Очень низкий', 'Низкий', 'Средний', 'Высокий', 'Очень высокий'],
        question2: 'Внешнее финансирование',
        answer2: ['Нет', 'Немного', 'Умеренное', 'Значительное', 'Очень большое'],
        question3: 'Инвестиции в современные технологии',
        answer3: ['Нет', 'Минимальные', 'Умеренные', 'Значительные', 'Очень большие']
    },
    'Развитая инфраструктура': {
        question1: 'Современность лабораторий и аудиторий',
        answer1: ['Нет современной инфраструктуры', 'Мало современных элементов', 'Половина оборудования современная', 'Большинство современное', 'Полностью современная инфраструктура'],
        question2: 'Доступ к специализированному транспортному оборудованию',
        answer2: ['Нет доступа', 'Ограниченный доступ', 'Базовый доступ', 'Хороший доступ', 'Полный доступ к новейшим решениям'],
        question3: 'Инфраструктура для практического обучения',
        answer3: ['Нет', 'Минимальная', 'Базовая', 'Развитая', 'Образцовая']
    },
    'Доминирующая доля на некоторых рынках': {
        question1: 'Позиция на образовательном рынке в области транспорта',
        answer1: ['Маргинальная', 'Нишевая', 'Средняя', 'Сильная', 'Ведущая'],
        question2: 'Узнаваемость среди ключевых работодателей',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Доля выпускников в транспортном секторе',
        answer3: ['Менее 10%', '10-25%', '25-40%', '40-60%', 'Более 60%']
    },
    //W
    'Восприятие, образ': {
        question1: 'Оценка направления студентами',
        answer1: ['Очень негативная', 'Скорее негативная', 'Нейтральная', 'Скорее позитивная', 'Очень позитивная'],
        question2: 'Привлекательность по сравнению с конкурентами',
        answer2: ['Гораздо хуже', 'Немного хуже', 'Сопоставима', 'Немного лучше', 'Гораздо лучше'],
        question3: 'Мнения выпускников на рынке труда',
        answer3: ['Очень негативные', 'Скорее негативные', 'Нейтральные', 'Скорее позитивные', 'Очень позитивные']
    },
    'Недостаточно развитая научно-исследовательская база': {
        question1: 'Оборудование лабораторий',
        answer1: ['Устаревшее', 'Частично устаревшее', 'Базовое', 'Современное', 'Последнего поколения'],
        question2: 'Научно-исследовательские проекты',
        answer2: ['Нет', 'Немного', 'Умеренное количество', 'Много', 'Очень много'],
        question3: 'Научное сотрудничество с компаниями',
        answer3: ['Нет', 'Немного', 'Умеренное', 'Активное', 'Очень интенсивное']
    },
    'Сложная организация': {
        question1: 'Прозрачность процесса набора',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Эффективность внутренней коммуникации',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Гибкость при внедрении изменений',
        answer3: ['Нет гибкости', 'Низкая гибкость', 'Средняя гибкость', 'Высокая гибкость', 'Очень высокая гибкость']
    },
    'Недостаточно развитый маркетинг': {
        question1: 'Присутствие в социальных сетях',
        answer1: ['Нет', 'Следы', 'Базовое', 'Активное', 'Очень активное'],
        question2: 'Организация дней открытых дверей',
        answer2: ['Нет', 'Редко', 'Время от времени', 'Регулярно', 'Очень часто'],
        question3: 'Рекламные материалы',
        answer3: ['Нет', 'Немного', 'Базовые', 'Хорошие', 'Образцовые']
    },
    'Качество обслуживания': {
        question1: 'Удовлетворенность студентов учебным процессом',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Актуальность учебной программы',
        answer2: ['Устаревшая', 'Частично устаревшая', 'Базовая', 'Современная', 'Инновационная'],
        question3: 'Доступность преподавателей',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //O
    'Расширение, изменение предложения': {
        question1: 'Потенциал введения новых специализаций',
        answer1: ['Нет возможности', 'Низкий потенциал', 'Умеренный потенциал', 'Высокий потенциал', 'Очень высокий потенциал'],
        question2: 'Возможность введения дуального обучения',
        answer2: ['Не существует', 'Маловероятно', 'Возможно при значительных усилиях', 'Реально в среднесрочной перспективе', 'Легко реализовать'],
        question3: 'Гибкость программных изменений',
        answer3: ['Нет гибкости', 'Низкая гибкость', 'Средняя гибкость', 'Высокая гибкость', 'Полная гибкость']
    },
    "Доступ к новым технологиям": {
        question1: 'Возможность внедрения транспортных симуляторов',
        answer1: ['Нет возможности', 'В ограниченном объеме', 'В базовом объеме', 'В широком объеме', 'Возможна полная реализация'],
        question2: 'Доступ к IoT-технологиям в логистике',
        answer2: ['Нет доступа', 'Ограниченный доступ', 'Базовый доступ', 'Хороший доступ', 'Полный доступ'],
        question3: 'Сотрудничество с технологическими компаниями',
        answer3: ['Нет сотрудничества', 'Немного контактов', 'Умеренное сотрудничество', 'Активное сотрудничество', 'Стратегические партнерства']
    },
    "Возможность развития и сотрудничества на международном рынке": {
        question1: 'Потенциал программ обмена студентами',
        answer1: ['Нет возможности', 'Низкий потенциал', 'Умеренный потенциал', 'Высокий потенциал', 'Очень высокий потенциал'],
        question2: 'Возможность получения двойных дипломов',
        answer2: ['Не существует', 'Маловероятно', 'Возможно при значительных усилиях', 'Реально в среднесрочной перспективе', 'Легко реализовать'],
        question3: 'Сотрудничество с зарубежными техническими вузами',
        answer3: ['Нет сотрудничества', 'Немного контактов', 'Умеренное сотрудничество', 'Активное сотрудничество', 'Стратегические партнерства']
    },
    'Появление новых аудиторий': {
        question1: 'Потенциал привлечения иностранных студентов',
        answer1: ['Нет возможности', 'Низкий потенциал', 'Умеренный потенциал', 'Высокий потенциал', 'Очень высокий потенциал'],
        question2: 'Привлекательность для работающих специалистов',
        answer2: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question3: 'Возможность непрерывного обучения',
        answer3: ['Нет возможности', 'В ограниченном объеме', 'В базовом объеме', 'В широком объеме', 'Полные возможности']
    },
    'Доступность специалистов на рынке': {
        question1: 'Доступность преподавателей с опытом в транспорте',
        answer1: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая'],
        question2: 'Возможность найма практиков',
        answer2: ['Очень сложно', 'Сложно', 'Умеренно', 'Легко', 'Очень легко'],
        question3: 'Конкурентоспособность зарплат для специалистов',
        answer3: ['Очень низкая', 'Низкая', 'Средняя', 'Высокая', 'Очень высокая']
    },
    //T
    'Изменения рыночных тенденций': {
        question1: 'Риск снижения интереса к направлению транспорт',
        answer1: ['Критически высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Влияние автоматизации на спрос на специалистов',
        answer2: ['Очень негативное', 'Негативное', 'Нейтральное', 'Положительное', 'Очень положительное'],
        question3: 'Адаптация программы к меняющимся потребностям рынка',
        answer3: ['Нет возможности адаптации', 'Очень ограниченная', 'Частичная', 'Хорошая', 'Полная']
    },
    'Е-замещение': {
        question1: 'Риск замещения традиционных занятий дистанционными формами',
        answer1: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Конкуренция со стороны e-learning платформ',
        answer2: ['Очень сильная', 'Сильная', 'Умеренная', 'Слабая', 'Нет'],
        question3: 'Готовность к цифровой трансформации',
        answer3: ['Нет подготовки', 'Слабая', 'Базовая', 'Хорошая', 'Полная']
    },
    'Развитие текущей конкуренции': {
        question1: 'Преимущество конкурирующих вузов',
        answer1: ['Доминирующее', 'Значительное', 'Умеренное', 'Незначительное', 'Нет'],
        question2: 'Привлекательность предложений конкурентов',
        answer2: ['Гораздо более привлекательные', 'Немного более привлекательные', 'Сопоставимые', 'Немного менее привлекательные', 'Гораздо менее привлекательные'],
        question3: 'Частота обновления программ у конкурентов',
        answer3: ['Очень часто', 'Часто', 'Умеренно', 'Редко', 'Очень редко']
    },
    'Возможность появления новой конкуренции': {
        question1: 'Риск выхода на рынок иностранных вузов',
        answer1: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный'],
        question2: 'Появление новых форм образования',
        answer2: ['Очень вероятно', 'Вероятно', 'Возможно', 'Маловероятно', 'Очень маловероятно'],
        question3: 'Способность быстро реагировать на новую конкуренцию',
        answer3: ['Нет возможности реагировать', 'Очень ограниченная', 'Умеренная', 'Хорошая', 'Очень хорошая']
    },
    'Изменение правового регулирования': {
        question1: 'Влияние новых транспортных нормативов',
        answer1: ['Очень негативное', 'Негативное', 'Нейтральное', 'Положительное', 'Очень положительное'],
        question2: 'Адаптация программы к новым требованиям',
        answer2: ['Очень сложно', 'Сложно', 'Умеренно сложно', 'Легко', 'Очень легко'],
        question3: 'Риск потери полномочий',
        answer3: ['Очень высокий', 'Высокий', 'Умеренный', 'Низкий', 'Минимальный']
    }
}