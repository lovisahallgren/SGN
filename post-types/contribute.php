<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('contribute', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Contribute'),
            'edit_item' => __('Edit Contribute'),
            'name' => __('Contribute'),
            'search_items' => __('Search Contribute'),
            'singular_name' => __('Contribute'),
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
