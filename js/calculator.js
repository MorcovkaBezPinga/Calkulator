// ==================== CALCULATOR CONFIGURATION ====================

// Формати паперу з розмірами в мм
const FORMATS = {
    'a6': { width: 105, height: 148, name: 'A6' },
    'a5': { width: 148, height: 210, name: 'A5' },
    'a4': { width: 210, height: 297, name: 'A4' },
    'a3': { width: 297, height: 420, name: 'A3' },
    'custom': { width: null, height: null, name: 'Власний розмір' }
};

// Базові ціни за площу паперу (вихідні ціни за м²)
const BASE_PRICES = {
    'offset80': 15,
    'offset160': 25,
    'offset300': 45,
    'coated130': 35,
    'coated200': 50,
    'coated300': 70,
    'designer_dali': 85,
    'designer_gsk': 60,
    'designer_stardream': 85,
    'designer_flora': 100,
    'designer_tintoretto': 90,
    'designer_icelite': 95,
    'designer_splendor': 88
};

// Множники для типів друку
const PRINT_MULTIPLIERS = {
    '4+0': 1.0,      // односторонній
    '4+4': 1.5       // двосторонній
};

// Множники для тиражу (чим більше - тим дешевше)
const TIRAGE_MULTIPLIERS = {
    1: 1.0,
    10: 0.95,
    50: 0.85,
    100: 0.75,
    500: 0.65,
    1000: 0.55,
    5000: 0.45
};

// ==================== INITIALIZATION ====================

$(document).ready(function() {
    // Слухачі змін
    setupEventListeners();
    
    // Обробка вибору формату
    $('#format').on('change', function() {
        handleFormatChange();
    });

    // Обробка змін щільності паперу
    $('#paperDensity').on('change', function() {
        validateDensityWithPaperType();
    });

    // Скидання формити
    $('#calculatorForm').on('reset', function() {
        $('#resultsSection').slideUp(300);
    });
});

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    // Кнопка розрахунку
    $('#calculateBtn').on('click', function(e) {
        e.preventDefault();
        
        // Валідація
        if (!validateForm()) {
            return;
        }

        // Розрахунок
        const result = calculatePrice();
        
        // Відображення результатів
        displayResults(result);
    });

    // Слухач зміни паперу для автоматичної щільності
    $('#paperType').on('change', function() {
        updateDensityByPaperType();
    });

    // Слухач зміни розмірів при власному розмірі
    $('#customWidth, #customHeight').on('change', function() {
        if ($('#format').val() === 'custom') {
            validateCustomSize();
        }
    });
}

// ==================== FORMAT HANDLING ====================

function handleFormatChange() {
    const format = $('#format').val();
    const customContainer = $('#customSizeContainer');

    if (format === 'custom') {
        customContainer.slideDown(300);
        // Встановити мінімальні значення
        $('#customWidth').val('40');
        $('#customHeight').val('40');
    } else {
        customContainer.slideUp(300);
    }
}

function validateCustomSize() {
    const width = parseInt($('#customWidth').val()) || 0;
    const height = parseInt($('#customHeight').val()) || 0;

    if (width < 40 || height < 40) {
        showAlert('Мінімальний розмір: 40x40мм', 'warning');
        return false;
    }

    if (width > 420 || height > 420) {
        showAlert('Максимальний розмір: 420x420мм', 'warning');
        return false;
    }

    return true;
}

// ==================== PAPER TYPE & DENSITY ====================

function updateDensityByPaperType() {
    const paperType = $('#paperType').val();
    const densitySelect = $('#paperDensity');
    
    // Встановити відповідну щільність на основі типу паперу
    let density = '80';

    if (paperType.includes('offset160')) density = '160';
    else if (paperType.includes('offset300')) density = '300';
    else if (paperType.includes('coated130')) density = '130';
    else if (paperType.includes('coated200')) density = '200';
    else if (paperType.includes('coated300')) density = '300';
    else if (paperType.includes('designer')) {
        // Для дизайнерського паперу беремо щільність з опції
        const option = $(`#paperType option[value="${paperType}"]`).text();
        const match = option.match(/(\d+)\s*г\/м²/);
        if (match) density = match[1];
    }

    densitySelect.val(density);
}

function validateDensityWithPaperType() {
    // Перевірка сумісності щільності з типом паперу
    return true; // Всі комбінації дозволені
}

// ==================== VALIDATION ====================

function validateForm() {
    const format = $('#format').val();
    const paperType = $('#paperType').val();
    const paperDensity = $('#paperDensity').val();
    const printType = $('#printType').val();
    const tirage = parseInt($('#tirage').val()) || 0;
    const kits = parseInt($('#kits').val()) || 1;

    if (!format) {
        showAlert('Будь ласка, виберіть формат', 'error');
        return false;
    }

    if (format === 'custom') {
        if (!validateCustomSize()) return false;
    }

    if (!paperType) {
        showAlert('Будь ласка, виберіть папір', 'error');
        return false;
    }

    if (!paperDensity) {
        showAlert('Будь ласка, виберіть щільність паперу', 'error');
        return false;
    }

    if (!printType) {
        showAlert('Будь ласка, виберіть тип друку', 'error');
        return false;
    }

    if (tirage < 1) {
        showAlert('Тираж повинен бути не менше 1', 'error');
        return false;
    }

    if (kits < 1) {
        showAlert('Кількість комплектів повинна бути не менше 1', 'error');
        return false;
    }

    return true;
}

// ==================== PRICE CALCULATION ====================

function calculatePrice() {
    const format = $('#format').val();
    const paperType = $('#paperType').val();
    const printType = $('#printType').val();
    const tirage = parseInt($('#tirage').val());
    const kits = parseInt($('#kits').val());

    // 1. Отримати розміри
    let width, height;
    if (format === 'custom') {
        width = parseInt($('#customWidth').val());
        height = parseInt($('#customHeight').val());
    } else {
        const formatInfo = FORMATS[format];
        width = formatInfo.width;
        height = formatInfo.height;
    }

    // 2. Розрахувати площу в м²
    const areaMm2 = width * height;
    const areaM2 = areaMm2 / 1_000_000;

    // 3. Отримати базову ціну за м²
    const basePricePerM2 = BASE_PRICES[paperType] || 50;

    // 4. Розрахувати ціну за один лист
    const pricePerSheet = basePricePerM2 * areaM2;

    // 5. Застосувати множник типу друку
    const printMultiplier = PRINT_MULTIPLIERS[printType] || 1.0;
    const pricePerSheetWithPrint = pricePerSheet * printMultiplier;

    // 6. Застосувати множник тиражу
    const tirageMultiplier = getTirageMultiplier(tirage);
    const pricePerSheetWithTirage = pricePerSheetWithPrint * tirageMultiplier;

    // 7. Розрахувати загальну вартість
    const totalCostBeforeKits = pricePerSheetWithTirage * tirage;
    const totalCost = totalCostBeforeKits * kits;

    // 8. Вивести результати
    return {
        width,
        height,
        areaMm2,
        areaM2,
        basePricePerM2,
        pricePerSheet,
        printMultiplier,
        tirageMultiplier,
        pricePerSheetWithTirage,
        totalCostBeforeKits,
        totalCost,
        tirage,
        kits,
        printType,
        paperType,
        format
    };
}

function getTirageMultiplier(tirage) {
    // Динамічний розрахунок множника залежно від тиражу
    if (tirage <= 1) return 1.0;
    if (tirage <= 10) return 0.95;
    if (tirage <= 50) return 0.85;
    if (tirage <= 100) return 0.75;
    if (tirage <= 500) return 0.65;
    if (tirage <= 1000) return 0.55;
    return 0.45; // 5000+
}

// ==================== DISPLAY RESULTS ====================

function displayResults(result) {
    const unitCost = result.totalCost / (result.tirage * result.kits);
    
    $('#totalCost').text(formatCurrency(result.totalCost));
    $('#unitCost').text(formatCurrency(unitCost));

    // Деталі розрахунку
    const details = `
        <strong>Параметри:</strong><br>
        Формат: ${FORMATS[result.format].name} (${result.width}×${result.height}мм)<br>
        Площа: ${result.areaM2.toFixed(4)}м²<br>
        Тип друку: ${result.printType}<br>
        Базова ціна паперу: ${formatCurrency(result.basePricePerM2)}/м²<br>
        <br>
        <strong>Розрахунок:</strong><br>
        Ціна за лист: ${formatCurrency(result.pricePerSheet)}<br>
        Множник друку (${result.printType}): ×${result.printMultiplier.toFixed(2)}<br>
        Множник тиражу (${result.tirage} шт.): ×${result.tirageMultiplier.toFixed(2)}<br>
        Ціна за лист з урахуванням: ${formatCurrency(result.pricePerSheetWithTirage)}<br>
        <br>
        <strong>Кінцевий результат:</strong><br>
        Всього листів: ${result.tirage} × ${result.kits} комплектів = ${result.tirage * result.kits} шт.<br>
        Загальна вартість: ${formatCurrency(result.totalCost)}<br>
        Ціна за одиницю: ${formatCurrency(unitCost)}
    `;

    $('#calculationDetails').html(details);
    $('#resultsSection').slideDown(300);
}

// ==================== HELPERS ====================

function formatCurrency(value) {
    return new Intl.NumberFormat('uk-UA', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function showAlert(message, type = 'info') {
    // Простий alert або можна використовувати Bootstrap Toast
    alert(message);
    
    // Альтернатива з Bootstrap (якщо потрібно):
    // const alertClass = `alert-${type}`;
    // const alertHtml = `<div class="alert ${alertClass} alert-dismissible fade show" role="alert">
    //     ${message}
    //     <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    // </div>`;
    // $(alertHtml).insertBefore('#calculatorForm');
}
