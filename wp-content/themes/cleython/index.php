<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <!-- Container principal -->
    <div class="min-h-screen flex flex-col">
        <!-- Navbar -->
        <nav id="navbar" class="bg-white shadow-lg">
            <!-- O conteúdo será inserido pelo JavaScript -->
        </nav>

        <!-- Conteúdo -->
        <main class="flex-grow">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article class="container mx-auto px-4 py-8">
                        <h2 class="text-2xl font-bold mb-4">
                            <a href="<?php the_permalink(); ?>" class="hover:text-blue-600">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        <div class="prose max-w-none">
                            <?php the_content(); ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php endif; ?>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto px-4">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
            </div>
        </footer>
    </div>

    <?php wp_footer(); ?>
</body>
</html>