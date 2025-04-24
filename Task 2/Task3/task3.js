$(document).ready(function() {
    // Знаходимо всі <h3>, після яких безпосередньо йде <div>
    $('h3 + div').each(function() {
        // Поточний <div>
        const divElem = $(this);

        // Переміщуємо <div> перед відповідним <h3>
        divElem.prev().before(divElem);
    });
});
