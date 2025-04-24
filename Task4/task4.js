$(document).ready(function() {
    // Відстежуємо зміну стану будь-якого чекбокса
    $('input[type="checkbox"]').on('change', function() {
        // Рахуємо кількість позначених чекбоксів
        const checkedCount = $('input[type="checkbox"]:checked').length;

        // Якщо позначено 3 або більше, блокуємо всі чекбокси
        if (checkedCount >= 3) {
            $('input[type="checkbox"]').attr('disabled', true);
        }
    });
});
