<?php
/**
 * Template Name: Quizzes
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="quizzes-page bg-gray-50 dark:bg-gray-800 min-h-screen py-12 transition-colors duration-300">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Escolha um Quiz</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <!-- Quiz Game of Thrones -->
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('got-quizz'))); ?>" 
               class="quiz-card bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
                <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
                    <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/got-thumbnail.jpg'); ?>" 
                         alt="Game of Thrones" 
                         class="h-full w-full object-cover opacity-90">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Game of Thrones</h3>
                    <p class="text-gray-600 dark:text-gray-300">Teste seu conhecimento sobre as casas de Westeros</p>
                </div>
            </a>

            <!-- Quiz Pokémon (placeholder) -->
            <div class="quiz-card bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 opacity-50">
                <div class="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <span class="text-5xl">?</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Pokémon</h3>
                    <p class="text-gray-600 dark:text-gray-300">Em breve</p>
                </div>
            </div>

            <!-- Quiz Bandeiras (placeholder) -->
            <div class="quiz-card bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 opacity-50">
                <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span class="text-5xl">?</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Bandeiras</h3>
                    <p class="text-gray-600 dark:text-gray-300">Em breve</p>
                </div>
            </div>

            <!-- Quiz Times (placeholder) -->
            <div class="quiz-card bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 opacity-50">
                <div class="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                    <span class="text-5xl">?</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Times</h3>
                    <p class="text-gray-600 dark:text-gray-300">Em breve</p>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>