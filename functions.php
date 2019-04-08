<?php

declare(strict_types=1);

error_reporting(E_ALL & ~E_NOTICE);

// Register custom post types.
require get_template_directory().'/post-types/branch.php';
require get_template_directory().'/post-types/project.php';
require get_template_directory().'/post-types/news.php';

// Register example taxonomy for the custom post types if needed.
// require get_template_directory().'/taxonomies/example.php';

// Add Branches to Rest API
add_action( 'init', 'my_branch_cpt' );
function my_branch_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'Branches'
    );
    register_post_type( 'branch', $args );
}
// Add News to Rest API
add_action( 'init', 'my_news_cpt' );
function my_news_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'News'
    );
    register_post_type( 'news', $args );
}
// Add Projects to Rest API
add_action( 'init', 'my_project_cpt' );
function my_project_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'Projects'
    );
    register_post_type( 'project', $args );
}
// Add Info to Rest API
add_action( 'init', 'my_info_cpt' );
function my_info_cpt() {
    $args = array(
      'public'       => true,
      'show_in_rest' => true,
      'label'        => 'Info'
    );
    register_post_type( 'info', $args );
}

// Get the advanced custom fields for Branches in JSON
function my_rest_prepare_branch($data, $post, $request) {
  $_data = $data->data;

  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;

  return $data;
}
add_filter("rest_prepare_branch", 'my_rest_prepare_branch', 10, 3);

// Get the advanced custom fields for Info in JSON
function my_rest_prepare_info($data, $post, $request) {
  $_data = $data->data;

  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;

  return $data;
}
add_filter("rest_prepare_info", 'my_rest_prepare_info', 10, 3);

// Get the advanced custom fields for Projects in JSON
function my_rest_prepare_project($data, $post, $request) {
  $_data = $data->data;

  $fields = get_fields($post->ID);
  foreach ($fields as $key => $value){
    $_data[$key] = get_field($key, $post->ID);
  }
  $data->data = $_data;

  return $data;
}
add_filter("rest_prepare_project", 'my_rest_prepare_project', 10, 3);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(false);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Enqueue and register scripts the right way.
add_action('wp_enqueue_scripts', function () {
    wp_deregister_script('jquery');

    // wp_enqueue_style('wordplate', mix('styles/app.css'));

    // wp_register_script('wordplate', mix('scripts/app.js'), '', '', true);
    // wp_enqueue_script('wordplate');
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);


//
add_theme_support( 'custom-logo' );

function themename_custom_logo_setup() {
    $defaults = array(
    );
    add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'themename_custom_logo_setup' );

function get_latest_logo() {

    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $logo = wp_get_attachment_image_src( $custom_logo_id , "thumbnail" );
    $logolol = [
        'current_site_logo' => $logo[0]
    ];
    if (empty($logo)) {
    return new WP_Error( 'empty_category', 'there is no post in this category', array('status' => 404) );

    }

    $response = new WP_REST_Response($logolol);
    $response->set_status(200);

    return $response;
}


add_action('rest_api_init', 'custom_logo_api' );

function custom_logo_api() {
    register_rest_route( 'sgn/v1', 'site_logo',array(
                  'methods'  => 'GET',
                  'callback' => 'get_latest_logo'
        ));
  };
