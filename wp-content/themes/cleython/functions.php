<?php
// Funções do tema

function cleython_setup() {
    add_theme_support('post-thumbnails');
    register_nav_menus(['primary' => __('Menu Principal', 'cleython')]);
    add_theme_support('title-tag');
    add_theme_support('html5', ['comment-list', 'comment-form', 'search-form', 'gallery', 'caption']);
}
add_action('after_setup_theme', 'cleython_setup');

function cleython_enqueue_scripts() {
    // CSS
    wp_enqueue_style(
        'cleython-tailwind',
        get_template_directory_uri() . '/dist/css/main.css',
        [],
        filemtime(get_template_directory() . '/dist/css/main.css')
    );
    
    // JS
    wp_enqueue_script(
        'cleython-navbar',
        get_template_directory_uri() . '/dist/js/navbar.js',
        ['jquery'],
        filemtime(get_template_directory() . '/dist/js/navbar.js'),
        true
    );
    
    // Para página "Sobre Nós"
    if (is_page('sobre-nos')) {
        wp_enqueue_script(
            'cleython-about',
            get_template_directory_uri() . '/dist/js/about.js',
            ['jquery'],
            filemtime(get_template_directory() . '/dist/js/about.js'),
            true
        );
    }
    
    // Variáveis globais
    wp_localize_script('cleython-main', 'wp_theme_vars', [
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('cleython_nonce')
    ]);
}
add_action('wp_enqueue_scripts', 'cleython_enqueue_scripts');