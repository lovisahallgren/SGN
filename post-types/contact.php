<?php

declare(strict_types=1);

add_action('init', function () {
    register_post_type('contact', [
        'has_archive' => true,
        'labels' => [
            'add_new_item' => __('Add New Contact'),
            'edit_item' => __('Edit Contact'),
            'name' => __('Contact'),
            'search_items' => __('Search Contact'),
            'singular_name' => __('Contact'),
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
