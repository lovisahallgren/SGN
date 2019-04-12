<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('postItCard', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New PostItCards'),
            'edit_item' => __('Edit PostItCards'),
            'name' => __('PostItCards'),
            'search_items' => __('Search PostItCards'),
            'singular_name' => __('PostItCard'),
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
