<?php
/**
 * Template Name: Sobre Nós
 */
get_header();
?>

<main class="about-page bg-gray-50 min-h-screen">
  <section class="hero py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-6" id="aboutTitle">
        <?php the_title(); ?>
      </h1>
      <div class="text-xl text-white opacity-90" id="aboutContent"></div>
    </div>
  </section>

  <section class="team py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center">Nosso Time</h2>
      <div class="team-grid grid grid-cols-1 md:grid-cols-3 gap-8" id="teamMembers"></div>
    </div>
  </section>

  <div class="contact-cta bg-white py-12 shadow-lg">
    <div class="container mx-auto px-4 text-center">
      <button id="contactBtn" class="btn-primary px-8 py-3 rounded-full text-white font-semibold transition-all">
        Fale Conosco
      </button>
    </div>
  </div>
</main>

<?php get_footer(); ?>