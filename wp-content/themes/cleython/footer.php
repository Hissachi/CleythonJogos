<?php
// Verifica se o script foi carregado
if (!wp_script_is('cleython-main', 'done')) {
    echo '<script>
        console.warn("Carregando fallback para main.js");
        var script = document.createElement("script");
        script.src = "' . get_template_directory_uri() . '/dist/js/main.js?ver=' . filemtime(get_template_directory() . '/dist/js/main.js') . '";
        document.body.appendChild(script);
    </script>';
}
wp_footer();
?>