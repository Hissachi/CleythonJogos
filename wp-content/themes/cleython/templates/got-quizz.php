<?php
/**
 * Template Name: Got Quizz
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="got-quizz-page bg-gray-50 dark:bg-gray-800 min-h-screen py-12 transition-colors duration-300">
    <div class="container mx-auto px-4 max-w-3xl">
        <!-- Cabeçalho do Quiz -->
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">Game of Thrones Quiz</h1>
            <p class="text-lg text-gray-600 dark:text-gray-300">Teste seu conhecimento sobre as casas de Westeros</p>
        </div>

        <!-- Tela de Início -->
        <div id="start-screen" class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 text-center">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/got-banner.jpg'); ?>" 
                 alt="Game of Thrones" 
                 class="w-full h-48 object-cover rounded-lg mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Quiz das Casas de Westeros</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-6">Você consegue identificar todas as casas nobres de Game of Thrones apenas por suas bandeiras?</p>
            <button id="start-btn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition">
                Começar Quiz
            </button>
        </div>

        <!-- Container de Perguntas (inicialmente oculto) -->
        <div id="question-container" class="hidden bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
            <div class="mb-6">
                <h2 id="question" class="text-xl font-semibold text-gray-900 dark:text-white mb-4"></h2>
                <img id="flag-image" src="" alt="Bandeira da Casa" class="w-full max-w-xs mx-auto rounded-lg shadow">
            </div>
            
            <div id="options" class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"></div>
            
            <div id="result" class="hidden text-center text-xl font-semibold py-4"></div>
            
            <div class="progress-bar bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-4">
                <div id="progress" class="bg-indigo-600 h-2.5 rounded-full" style="width: 0%"></div>
            </div>
        </div>
    </div>
</main>

<?php 
// Adiciona o script específico para esta página
wp_enqueue_script('cleython-got-cards');
get_footer(); 
?>