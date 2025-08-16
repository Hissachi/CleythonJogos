<?php
// Funções do tema
function cleython_setup() {
    // Suporte para thumbnails
    add_theme_support('post-thumbnails');
    
    // Menus de navegação
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'cleython'),
    ));
    
    // Suporte para título do WordPress
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'cleython_setup');

// Carregar estilos e scripts
function enqueue_tailwind() {
    wp_enqueue_style('tailwind', get_template_directory_uri() . '/dist/output.css');
}
add_action('wp_enqueue_scripts', 'enqueue_tailwind');

function cleython_scripts() {
    // Estilo principal
    wp_enqueue_style('cleython-style', get_stylesheet_uri());
    
    // Scripts (se necessário)
    // wp_enqueue_script('meu-script', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'cleython_scripts');