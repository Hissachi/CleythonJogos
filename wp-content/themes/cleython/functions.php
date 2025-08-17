<?php
/**
 * Theme Functions - Cleython
 * 
 * @package Cleython
 */

defined('ABSPATH') || exit('Acesso direto negado');

/**
 * Verifica dependências do WordPress
 */
if (!function_exists('add_action')) {
    wp_die('WordPress não está carregado corretamente');
}

/**
 * Configurações básicas do tema
 */
add_action('after_setup_theme', function() {
    // Suporte a recursos do WordPress
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', [
        'comment-list',
        'comment-form',
        'search-form',
        'gallery',
        'caption',
        'style',
        'script'
    ]);
    
    // Registro de menus
    register_nav_menus([
        'primary' => __('Menu Principal', 'cleython'),
        'footer'  => __('Menu do Rodapé', 'cleython')
    ]);
    
    // Suporte a block editor (opcional)
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
});

/**
 * Carrega scripts e estilos
 */
add_action('wp_enqueue_scripts', function() {
    $theme_version = wp_get_theme()->get('Version');
    $assets_path = get_template_directory_uri() . '/dist';
    
    // Remove jQuery padrão se não for necessário
    wp_deregister_script('jquery');
    wp_register_script(
        'jquery',
        includes_url('/js/jquery/jquery.min.js'),
        [],
        null,
        true
    );
    
    // CSS principal
    wp_enqueue_style(
        'cleython-main',
        $assets_path . '/css/main.css',
        [],
        filemtime(get_template_directory() . '/dist/css/main.css')
    );
    
    // JS principal
    wp_enqueue_script(
        'cleython-main',
        $assets_path . '/js/main.js',
        ['jquery'],
        filemtime(get_template_directory() . '/dist/js/main.js'),
        true
    );
    
    // JS condicional para página "Sobre"
    if (is_page('sobre-nos')) {
        wp_enqueue_script(
            'cleython-about',
            $assets_path . '/js/about.js',
            ['jquery', 'cleython-main'],
            filemtime(get_template_directory() . '/dist/js/about.js'),
            true
        );
    }
    
    // Variáveis globais para JS
    wp_localize_script('cleython-main', 'wp_theme_vars', [
        'ajaxurl'    => admin_url('admin-ajax.php'),
        'nonce'      => wp_create_nonce('cleython_ajax_nonce'),
        'themePath'  => get_template_directory_uri(),
        'isMobile'   => wp_is_mobile(),
        'debug'      => WP_DEBUG
    ]);
    
    // Inline script para verificação
    wp_add_inline_script('cleython-main', 
        'console.log("Tema Cleython carregado");',
        'before'
    );
}, 20);

/**
 * Otimizações e limpeza do WordPress
 */
add_action('init', function() {
    // Remove meta tags desnecessárias
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'feed_links_extra', 3);
    
    // Adiciona meta tag para compatibilidade
    add_action('wp_head', function() {
        echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    }, 1);
    
    // Remove emojis (opcional)
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
});

/**
 * Adiciona classes ao body
 */
add_filter('body_class', function($classes) {
    // Página inicial
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    
    // Página de blog
    if (is_home() || is_archive() || is_search()) {
        $classes[] = 'blog-page';
    }
    
    // Página single
    if (is_singular()) {
        $classes[] = 'singular-page';
    }
    
    return $classes;
});

/**
 * Personaliza classes do menu
 */
add_filter('nav_menu_css_class', function($classes, $item, $args) {
    if ('primary' === $args->theme_location) {
        $classes[] = 'nav-item';
        $classes[] = 'relative';
        
        // Adiciona classe ativa personalizada
        if (in_array('current-menu-item', $classes)) {
            $classes[] = 'active';
        }
    }
    return $classes;
}, 10, 3);



/**
 * Fallback para carregamento de scripts
 */
add_action('wp_footer', function() {
    if (!wp_script_is('cleython-main', 'done')) {
        echo '<script>
            console.warn("Carregando fallback para main.js");
            var script = document.createElement("script");
            script.src = "' . get_template_directory_uri() . '/dist/js/main.js?ver=' . filemtime(get_template_directory() . '/dist/js/main.js') . '";
            document.body.appendChild(script);
        </script>';
    }
}, 9999);

/**
 * Debug mode (apenas em desenvolvimento)
 */
if (WP_DEBUG) {
    add_action('admin_notices', function() {
        echo '<div class="notice notice-warning"><p>Modo debug ativado</p></div>';
    });

    // Log de carregamento de scripts
    add_action('wp_enqueue_scripts', function() {
        error_log('Scripts do tema carregados');
        $assets_path = get_template_directory_uri() . '/dist';
        if (is_page('got-quizz')) {
            wp_enqueue_script(
                'cleython-got-cards',
                $assets_path . '/js/got-cards.js',
                ['jquery'],
                filemtime(get_template_directory() . '/dist/js/got-cards.js'),
                true
            );
        }
    }, 20);
}