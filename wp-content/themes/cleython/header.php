<?php
/**
 * Header principal do tema Cleython
 * 
 * @package Cleython
 */
if (!defined('ABSPATH')) {
    exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Pré-carregamento crítico -->
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/css/main.css" as="style">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/dist/js/main.js" as="script">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'); ?>>
    <!-- Navbar responsiva com dark mode -->
    <header class="fixed inset-x-0 top-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg transition-colors duration-300">
        <div class="container mx-auto px-4 sm:px-6">
            <div class="flex h-16 items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2" aria-label="Página inicial">
                        <span class="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                            <?php bloginfo('name'); ?>
                        </span>
                    </a>
                </div>

                <!-- Menu Desktop -->
                <nav class="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'menu_class' => 'flex items-center space-x-8',
                        'container' => false,
                        'link_before' => '<span class="text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200">',
                        'link_after' => '</span>',
                        'fallback_cb' => false
                    ]);
                    ?>
                    
                    <!-- Toggle Dark Mode -->
                    <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="Alternar tema">
                        <svg id="theme-icon" class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path id="theme-icon-path" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </nav>

                <!-- Mobile Menu Button -->
                <div class="flex md:hidden items-center space-x-4">
                    <button id="theme-toggle-mobile" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Alternar tema">
                        <svg class="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                    <button id="mobile-menu-button" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobile-menu">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg transition-all duration-300">
            <div class="container mx-auto px-4 py-3">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'menu_class' => 'flex flex-col space-y-3',
                    'container' => false,
                    'link_before' => '<span class="block py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200">',
                    'link_after' => '</span>',
                    'fallback_cb' => false
                ]);
                ?>
            </div>
        </div>
    </header>

    <!-- Espaço para a navbar fixa -->
    <div class="h-16"></div>

    <!-- Conteúdo principal -->
    <main id="main-content" class="min-h-[calc(100vh-4rem)]">