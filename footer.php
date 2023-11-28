<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Web_Cyberians
 */

?>
<footer>
    <div class="container footer-top">
        <div class="row">
            <div class="col-md-4"><?php dynamic_sidebar( 'footer-1' )?></div>
            <div class="col-md-4"><?php dynamic_sidebar( 'footer-2' )?></div>
            <div class="col-md-4"><?php dynamic_sidebar( 'footer-3' )?></div>
        </div>
    </div>
	<div class="container footer-bottom">
		<div class="row">
			<div class="col-md-12"></div>
		</div>
	</div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>