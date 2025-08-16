<?php
/**
 * The main template file
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="container mx-auto px-4 py-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="mb-12">
            <h2 class="text-3xl font-bold mb-4">
                <a href="<?php the_permalink(); ?>" class="hover:text-indigo-600 transition-colors">
                    <?php the_title(); ?>
                </a>
            </h2>
            <div class="prose max-w-none">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>