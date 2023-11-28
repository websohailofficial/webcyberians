<?php if ( have_rows( 'buttons' ) ) : ?>
	<?php while ( have_rows( 'buttons' ) ) : the_row(); ?>
		<?php the_sub_field( 'button' ); ?>
		<?php $anchor = get_sub_field( 'anchor' ); ?>
		<?php if ( $anchor ) : ?>
			<a href="<?php echo esc_url( $anchor['url'] ); ?>" target="<?php echo esc_attr( $anchor['target'] ); ?>"><?php echo esc_html( $anchor['title'] ); ?></a>
		<?php endif; ?>
		<?php the_sub_field( 'button_text' ); ?>
		<?php the_sub_field( 'button_style_1' ); ?>
		<?php the_sub_field( 'class' ); ?>
	<?php endwhile; ?>
<?php else : ?>
	<?php // No rows found ?>
<?php endif; ?>



