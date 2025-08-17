<?php
/**
 * Template Name: Sobre Nós
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="about-page bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors duration-300">
  <section class="hero py-20 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6" id="aboutTitle">
        <?php the_title(); ?>
      </h1>
      <div class="prose max-w-none text-white opacity-90 dark:prose-invert" id="aboutContent">
        <?php the_content(); ?>
      </div>
    </div>
  </section>

  <section class="team py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Nosso Time</h2>
      <div class="team-grid grid grid-cols-1 md:grid-cols-3 gap-8" id="teamMembers">
      </div>
    </div>
  </section>

  <div class="contact-cta bg-white dark:bg-gray-800 py-12 shadow-lg transition-colors duration-300">
    <div class="container mx-auto px-4 text-center">
      <button id="contactBtn" class="btn-primary px-8 py-3 rounded-full text-white font-semibold transition-all bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800">
        Fale Conosco
      </button>
    </div>
  </div>
</main>

<?php get_footer(); ?>