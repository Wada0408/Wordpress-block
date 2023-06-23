<?php
function enqueue_richtext_underline_assets() {
    wp_enqueue_script(
        'richtext-underline-script',
        get_template_directory_uri() . '/richtext-underline.js', // 必要なパスを指定してください
        array( 'wp-rich-text' ),
        '1.0',
        true
    );
}
add_action( 'enqueue_block_editor_assets', 'enqueue_richtext_underline_assets' );


