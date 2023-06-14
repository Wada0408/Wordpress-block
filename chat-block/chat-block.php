<?php
/**
 * Plugin Name:       chat-block
 * Description:       チャットの会話のような吹き出しを表示します。
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       le-comment-block
 *
 * @package           wdl
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function wdl_le_comment_block_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'wdl_le_comment_block_block_init' );
