$(document).ready(function() {
    // Крок 1: Знаходимо всі <h2 class="head"> і задаємо їм зелений фон
    const headers = $('h2.head').css('background-color', 'green');

    // Крок 2: Серед цих елементів шукаємо ті, що містять .inner і змінюємо їм розмір шрифту
    headers.find('.inner').css('font-size', '35px');
});
