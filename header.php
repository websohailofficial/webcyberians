<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Web_Cyberians
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<style type="text/css">
	.small-header{
	background-color: <?php echo get_theme_mod('webcyberians_nav_bg_color', '#fe6e0e');?>;
}

</style>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary">
		<?php esc_html_e( 'Skip to content', 'webcyberians' ); ?>
	</a>

	<header id="masthead" class="site-header">


		<div class="desktop-header">
			<?php get_template_part( 'template-parts/headers/header', 'desktop'); ?>
		</div>
	</header><!-- #masthead -->
