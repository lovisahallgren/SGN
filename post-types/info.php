<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('info', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Info'),
            'edit_item' => __('Edit Info'),
            'name' => __('Info'),
            'search_items' => __('Search Info'),
            'singular_name' => __('Info'),
        ],
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-admin-home',
        'menu_position' => 20,
        'public' => true,
    ]);
});
