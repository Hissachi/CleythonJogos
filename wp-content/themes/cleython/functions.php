<?php
// Funções do tema

if (!defined('ABSPATH')) {
    die('Acesso direto negado');
}

// Debug: Verifique funções do WordPress
if (!function_exists('add_action')) {
    die('WordPress não carregado');
}

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
    wp_enqueue_script('jquery');
    
    wp_enqueue_script(
        'cleython-main',
        get_template_directory_uri() . '/dist/js/main.js',
        ['jquery'],
        filemtime(get_template_directory() . '/dist/js/main.js'),
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

function cleython_body_classes($classes) {
    // Adiciona classe quando estiver na página inicial
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    return $classes;
}
add_filter('body_class', 'cleython_body_classes');

function cleython_fix_quirks_mode() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Adiciona meta tag X-UA-Compatible
    add_action('wp_head', function() {
        echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    }, 1);
}
add_action('init', 'cleython_fix_quirks_mode');