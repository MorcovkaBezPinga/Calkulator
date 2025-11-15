// ==================== PRICING TABLES ====================

// Ціни для офсетного паперу 80г, формат A4/A3 (210x297мм та 297x420мм)
const OFFSET_80_PRICES = {
    '1-9': { '4+0': 17, '4+4': 25 },
    '10-29': { '4+0': 14.62, '4+4': 21.5 },
    '30-49': { '4+0': 12.75, '4+4': 18.75 },
    '50-99': { '4+0': 10.88, '4+4': 16 },
    '100-299': { '4+0': 9.35, '4+4': 13.75 },
    '300-999': { '4+0': 8.16, '4+4': 12 },
    '1000-2999': { '4+0': 7.31, '4+4': 10.75 },
    '3000+': { '4+0': 5.78, '4+4': 8.5 }
};

// Ціни для дизайнерського паперу 297х420мм
const DESIGNER_297x420_PRICES = {
    'Dali candido, 285 г/м': {
        '1': 110,
        '2-4': 100,
        '5-14': 95,
        '15-24': 90,
        '25+': 85
    },
    'Dali neve, 285 г/м': {
        '1': 110,
        '2-4': 100,
        '5-14': 95,
        '15-24': 90,
        '25+': 85
    },
    'Stardream crystal, 285 г/м': {
        '1': 120,
        '2-4': 109.1,
        '5-14': 103.64,
        '15-24': 98.18,
        '25+': 92.73
    },
    'Stardream diamond, 285 г/м': {
        '1': 120,
        '2-4': 109.1,
        '5-14': 103.64,
        '15-24': 98.18,
        '25+': 92.73
    },
    'Stardream opal, 285 г/м': {
        '1': 120,
        '2-4': 109.1,
        '5-14': 103.64,
        '15-24': 98.18,
        '25+': 92.73
    },
    'Stardream citrine, 285 г/м': {
        '1': 140,
        '2-4': 127.3,
        '5-14': 120.8,
        '15-24': 114.55,
        '25+': 108.18
    },
    'Flora avorio, 350 г/м': {
        '1': 100,
        '2-4': 90.9,
        '5-14': 86.36,
        '15-24': 81.82,
        '25+': 77.27
    },
    'Tintoretto gesso, 300 г/м': {
        '1': 100,
        '2-4': 90.9,
        '5-14': 86.36,
        '15-24': 81.82,
        '25+': 77.27
    },
    'Sirio pearl aurum, 300 г/м': {
        '1': 160,
        '2-4': 145.45,
        '5-14': 138.18,
        '15-24': 130.91,
        '25+': 123.64
    },
    'Icelite 2s Toile moyenne, 300-335 г/м': {
        '1': 100,
        '2-4': 90.9,
        '5-14': 86.36,
        '15-24': 81.82,
        '25+': 77.27
    },
    'SplendorGel avorio 300 г/м': {
        '1': 100,
        '2-4': 90.9,
        '5-14': 86.36,
        '15-24': 81.82,
        '25+': 77.27
    },
    'Sirio white white 350 г/м': {
        '1': 110,
        '2-4': 100,
        '5-14': 95,
        '15-24': 90,
        '25+': 85
    },
    'GSK Калька EW, 200': {
        '1': 120,
        '2-4': 109.1,
        '5-14': 103.64,
        '15-24': 98.18,
        '25+': 92.73
    }
};

// Ціни для крейдованого паперу А3 297х420мм (4+0)
const COATED_A3_PRICES = {
    'Крейдований 130г': {
        '1-4': 36,
        '5-14': 30.23,
        '15-24': 26.63,
        '25-49': 23.03,
        '50-149': 20.15,
        '150-499': 17.28,
        '500-1499': 14.4,
        '1500+': 11.51
    },
    'Крейдований 200г': {
        '1-4': 44,
        '5-14': 36.96,
        '15-24': 32.56,
        '25-49': 28.16,
        '50-149': 24.64,
        '150-499': 21.1,
        '500-1499': 17.6,
        '1500+': 14.08
    },
    'Крейдований 300г': {
        '1-4': 54,
        '5-14': 45.36,
        '15-24': 39.96,
        '25-49': 34.56,
        '50-149': 30.24,
        '150-499': 25.91,
        '500-1499': 21.6,
        '1500+': 17.28
    },
    'ОФСЕТНИЙ ПАПІР 160': {
        '1-4': 43,
        '5-14': 40.32,
        '15-24': 35.52,
        '25-49': 30.72,
        '50-149': 26.88,
        '150-499': 23.04,
        '500-1499': 19.2,
        '1500+': 15.36
    },
    'ОФСЕТНИЙ ПАПІР, 300': {
        '1-4': 70,
        '5-14': 58.8,
        '15-24': 51.8,
        '25-49': 44.79,
        '50-149': 39.2,
        '150-499': 33.6,
        '500-1499': 28,
        '1500+': 22.4
    }
};

// Ціни для друку на звороті (4+4) А3 297х420мм
const COATED_A3_4x4_PRICES = {
    'Друк на звороті (4+4)': {
        '1-4': 18,
        '5-14': 15.12,
        '15-24': 13.32,
        '25-49': 11.52,
        '50-149': 10.08,
        '150-499': 8.64,
        '500-1499': 7.2,
        '1500+': 5.76
    }
};

// ==================== INITIALIZATION ====================

$(document).ready(function() {
    setupEventListeners();
    
    $('#format').on('change', function() {
        handleFormatChange();
    });

    $('#calculatorForm').on('reset', function() {
        $('#resultsSection').hide();
    });
});

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    $('#calculateBtn').on('click', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const result = calculatePrice();
        displayResults(result);
    });
}

// ==================== FORMAT HANDLING ====================

function handleFormatChange() {
    const format = $('#format').val();
    const customContainer = $('#customSizeContainer');

    if (format === 'custom') {
        customContainer.show();
        $('#customWidth').val('40');
        $('#customHeight').val('40');
    } else {
        customContainer.hide();
    }
}

// ==================== VALIDATION ====================

function validateForm() {
    const paperType = $('#paperType').val();
    const printType = $('#printType').val();
    const tirage = parseInt($('#tirage').val()) || 0;
    const kits = parseInt($('#kits').val()) || 1;

    if (!paperType) {
        alert('Будь ласка, виберіть папір');
        return false;
    }

    if (!printType) {
        alert('Будь ласка, виберіть тип друку');
        return false;
    }

    if (tirage < 1) {
        alert('Тираж повинен бути не менше 1');
        return false;
    }

    if (kits < 1) {
        alert('Кількість комплектів повинна бути не менше 1');
        return false;
    }

    return true;
}

// ==================== PRICE RETRIEVAL ====================

function getPriceByTirage(prices, tirage) {
    for (const range in prices) {
        const parts = range.split('-');
        const min = parseInt(parts[0]);
        const max = parts[1] ? parseInt(parts[1]) : Infinity;
        
        if (tirage >= min && tirage <= max) {
            return prices[range];
        }
    }
    return null;
}

function getPriceByComplexRange(prices, quantity) {
    // Для дизайнерського паперу
    if (prices['1'] !== undefined) {
        if (quantity === 1) return prices['1'];
        if (quantity >= 2 && quantity <= 4) return prices['2-4'];
        if (quantity >= 5 && quantity <= 14) return prices['5-14'];
        if (quantity >= 15 && quantity <= 24) return prices['15-24'];
        if (quantity >= 25) return prices['25+'];
    }
    return null;
}

// ==================== PRICE CALCULATION ====================

function calculatePrice() {
    const format = $('#format').val();
    const paperType = $('#paperType').val();
    const printType = $('#printType').val();
    const tirage = parseInt($('#tirage').val());
    const kits = parseInt($('#kits').val());

    let pricePerUnit = 0;

    // Офсетний папір 80г - таблиця цін
    if (paperType === 'offset80') {
        const prices = OFFSET_80_PRICES;
        const priceData = getPriceByTirage(prices, tirage);
        if (priceData) {
            pricePerUnit = priceData[printType] || 0;
        }
    }
    
    // Крейдований папір та офсетний А3 (4+0)
    else if (paperType.includes('coated_a3') && printType === '4+0') {
        const paperName = $('#paperType option:selected').text();
        if (COATED_A3_PRICES[paperName]) {
            pricePerUnit = getPriceByTirage(COATED_A3_PRICES[paperName], tirage) || 0;
        }
    }
    
    // Друк на звороті (4+4) А3
    else if (printType === '4+4' && format === 'a3') {
        const priceData = getPriceByTirage(COATED_A3_4x4_PRICES['Друк на звороті (4+4)'], tirage);
        if (priceData) {
            pricePerUnit = priceData;
        }
    }
    
    // Дизайнерський папір 297х420
    else if (paperType.startsWith('designer_')) {
        const paperName = $('#paperType option:selected').text();
        if (DESIGNER_297x420_PRICES[paperName]) {
            pricePerUnit = getPriceByComplexRange(DESIGNER_297x420_PRICES[paperName], tirage) || 0;
        }
    }

    const totalCostPerKit = pricePerUnit * tirage;
    const totalCost = totalCostPerKit * kits;
    const pricePerKit = totalCostPerKit;

    return {
        pricePerUnit,
        pricePerKit,
        totalCost,
        tirage,
        kits,
        paperType,
        format,
        printType
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
    const unitCost = result.pricePerUnit;
    const kitCost = result.pricePerKit;
    const totalCost = result.totalCost;

    $('#unitPrice').text(formatCurrency(unitCost));
    $('#totalPrice').text(formatCurrency(totalCost));

    // Показати ціну за комплект якщо комплектів більше 1
    const kitPriceRow = $('#kitPriceRow');
    if (result.kits > 1) {
        $('#kitPrice').text(formatCurrency(kitCost));
        kitPriceRow.show();
    } else {
        kitPriceRow.hide();
    }

    // Деталі розрахунку
    let details = `
        <strong>Параметри:</strong><br>
        Тип паперу: ${$('#paperType option:selected').text()}<br>
        Тип друку: ${result.printType}<br>
        Кількість листів: ${result.tirage} шт.<br>
        Кількість комплектів: ${result.kits}<br>
        <br>
        <strong>Розрахунок:</strong><br>
        Ціна за один лист: ${formatCurrency(unitCost)}<br>
        Вартість за комплект (${result.tirage} листів): ${formatCurrency(kitCost)}<br>
    `;

    if (result.kits > 1) {
        details += `Вартість ${result.kits} комплектів: ${formatCurrency(totalCost)}`;
    }

    $('#calculationDetails').html(details);
    $('#resultsSection').show();
}

// ==================== HELPERS ====================

function formatCurrency(value) {
    return new Intl.NumberFormat('uk-UA', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

function showAlert(message, type = 'info') {
    alert(message);
}

function updateDensityByPaperType() {
    // Автоматичне оновлення вибору паперу
}
