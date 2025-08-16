<?php
/**
 * The header for our theme
 *
 * @package cleython
 */
if (!defined('ABSPATH')) {
  exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <!-- Navbar/Header -->
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between px-4">
      <div class="mr-4 flex items-center space-x-2">
        <a href="<?php echo home_url('/'); ?>" class="flex items-center space-x-2 font-bold text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3z"/>
          </svg>
          <span><?php bloginfo('name'); ?></span>
        </a>
      </div>

      <!-- Menu Principal -->
      <nav class="flex items-center space-x-6">
        <?php
        wp_nav_menu([
          'theme_location' => 'primary',
          'menu_class' => 'flex items-center space-x-6',
          'container' => false,
          'link_before' => '<span class="text-sm font-medium transition-colors hover:text-primary">',
          'link_after' => '</span>',
        ]);
        ?>
      </nav>
    </div>
  </header>

  <main class="flex-1">