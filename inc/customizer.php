<?php
/**
 * Web Cyberians Theme Customizer
 *
 * @package Web_Cyberians
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function webcyberians_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-title a',
				'render_callback' => 'webcyberians_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'webcyberians_customize_partial_blogdescription',
			)
		);
	}

	

	// custom customizer
	$wp_customize->add_panel( 'webcyberians_settings', array( 
		'title' => _( 'Global Settings' ),
		'description' => '', // Include html tags such as <p>.
		'priority' => 10, // Mixed with top-level-section hierarchy.
		) );

	$wp_customize->add_section( 'webcyberians_colors', array( 
			'title' => 'Colors',
			'panel' => 'webcyberians_settings',
		) );

	$wp_customize->add_setting( 'webcyberians_nav_bg_color', array(
		'type' => 'theme_mod', // or 'option' 
		'capability' => 'edit_theme_options', 
		'default' => '',
		'transport' => 'refresh', // or postMessage 
		'sanitize_callback' => 'sanitize_hex_color',
		) ); 

	$wp_customize->add_control( 'webcyberians_nav_bg_color', array(
			'label' => ('Top Menu Background' ),
			'type' =>  'color',
			'section' => 'webcyberians_colors', 
		) );







}
add_action( 'customize_register', 'webcyberians_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function webcyberians_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function webcyberians_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function webcyberians_customize_preview_js() {
	wp_enqueue_script( 'webcyberians-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), _S_VERSION, true );
}
add_action( 'customize_preview_init', 'webcyberians_customize_preview_js' );