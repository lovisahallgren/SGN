<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('social', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Social'),
            'edit_item' => __('Edit Social'),
            'name' => __('Social'),
            'search_items' => __('Search Social'),
            'singular_name' => __('Social'),
        ],
				'supports' => [
            'title',
            'editor',
            'thumbnail',
        ],
        'menu_icon' => 'dashicons-editor-ol',
        'menu_position' => 20,
        'public' => true,
    ]);
});
