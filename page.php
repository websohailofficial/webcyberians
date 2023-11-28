<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Web_Cyberians
 */

get_header();
?>
<?php if(has_flexible('main')): ?>
	<main>
		<?php the_flexible('main'); ?>
			<?php if ( have_rows( 'main' ) ): ?>
				<?php while ( have_rows( 'main' ) ) : the_row(); ?>

					<?php if ( get_row_layout() == 'section' ) : ?>
						<section style= "<?php require get_template_directory() . '/parts/sections/builder-style.php'; ?>">
							<?php if ( have_rows( 'row' ) ): ?>
								<div class="container">
									<div class="row">
										<?php while ( have_rows( 'row' ) ) : the_row(); ?>
											<?php if ( get_row_layout() == 'column' ) : ?>
												<div class="col-<?php echo get_layout_col(); ?>">
												<?php if ( have_rows( 'web_components' ) ): ?>	
													<?php while ( have_rows( 'web_components' ) ) : the_row(); ?>
														<?php															
															get_template_part( 'parts/components/headings' );
																												
														?>
													<?php endwhile; ?>
													<?php else: ?>
													<?php // No layouts found ?>
												<?php endif; ?>
												</div>
											<?php endif; ?>
										<?php endwhile; ?>
									</div>
								</div>
							<?php else: ?>
						</section>
					<?php // No layouts found ?>
					<?php endif; ?>
					<?php endif; ?>
				<?php endwhile; ?>
			<?php else: ?>
			<?php // No layouts found ?>
			<?php endif; ?>
	</main>
<?php endif; ?>





<main id="primary" class="site-main">

    <?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) :
				comments_template();
			endif;

		endwhile; // End of the loop.
		?>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();