<?php

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function webcyberians_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'webcyberians' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer widget 1', 'webcyberians' ),
			'id'            => 'footer-1',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);register_sidebar(
		array(
			'name'          => esc_html__( 'Footer widget 2', 'webcyberians' ),
			'id'            => 'footer-2',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);register_sidebar(
		array(
			'name'          => esc_html__( 'Footer widget 3', 'webcyberians' ),
			'id'            => 'footer-3',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);register_sidebar(
		array(
			'name'          => esc_html__( 'Footer widget 4', 'webcyberians' ),
			'id'            => 'footer-4',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
	register_sidebar(
		array(
			'name'          => esc_html__( 'Footer Bottom', 'webcyberians' ),
			'id'            => 'footer-bottom-1',
			'description'   => esc_html__( 'Add widgets here.', 'webcyberians' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'webcyberians_widgets_init' );