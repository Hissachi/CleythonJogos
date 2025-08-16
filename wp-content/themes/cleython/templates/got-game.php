<?php
/**
 * Template Name: Got Game
 */
get_header();
?>

<main class="about-page bg-gray-50 min-h-screen">
    <div
        class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-bl from-red-500 to-gray-300 text-white">
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-8">Quiz das Casas de <span class="text-red-500">Game of Thrones</span></h1>

            <div id="quiz-container" class="max-w-3xl w-full bg-gray-800 rounded-lg p-6 shadow-lg">
                <div id="question-container" class="hidden">
                    <h2 id="question" class="text-2xl font-semibold mb-6">Qual casa tem esta bandeira?</h2>
                    <img id="flag-image" src="" alt="Bandeira" class="mx-auto mb-6 h-64 object-contain">

                    <div id="options" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                </div>

                <div id="start-screen" class="text-center">
                    <button id="start-btn"
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
                        Iniciar Quiz
                    </button>
                </div>

                <div id="result" class="hidden mt-6 text-xl font-semibold"></div>
            </div>
        </div>

        <script src="../../src/ts/got-cards.ts" type="module"></script>
</main>

<?php get_footer(); ?>