<?php
/**
 * The main template file
 */
if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<main class="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="mb-12">
            <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                <a href="<?php the_permalink(); ?>" class="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <?php the_title(); ?>
                </a>
            </h2>
            <div class="prose max-w-none dark:prose-invert">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>