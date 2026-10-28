

$(document).ready(function() {
    if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "en");
    }

    // Función para actualizar los títulos estáticos del Style Switcher al cargar
    function updateStaticSwitcherTexts() {
        if (typeof window.t === 'function') {
            $('#switcher-theme-title').text(window.t('theme-color'));
            $('#switcher-lang-title').text(window.t('lang')); // Asegúrate de tener "lang" en tu JSON/config
        }
    }

    // Ejecutamos la función apenas carga el documento
    updateStaticSwitcherTexts();

    // Evento al hacer clic en las banderas
    $(document).on('click', '.translate', function() {
        var selectedLang = $(this).attr('id'); // 'en' o 'es'
        if (selectedLang) {
            localStorage.setItem("lang", selectedLang);
            location.reload(); // Recarga la página aplicando el nuevo idioma de inmediato
        }
    });
});