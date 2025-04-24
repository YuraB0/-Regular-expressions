$(document).ready(function() {
    // Знаходимо всі <a>, у яких href починається з "https://"
    $('a[href^="https://"]').attr('target', '_blank');
});
