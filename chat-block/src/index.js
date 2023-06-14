/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType,Fragment } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'wdl/chat-block', {
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p.commentUser__name',
            default: '名前',
        },
		bg_color: { type: 'string', default: '#FFF8DB' },
		text_color: { type: 'string', default: '#000' },
        message: {
            type: 'string',
            source: 'html',
            selector: 'p.comment__txt',
            default: 'テキスト', // empty default
        },
		mediaId: {
			type: 'number',
			default: 0
		},
		mediaUrl: {
			type: 'string',
			default: '/wp-content/plugins/chat-block/01-rose.png'
		},
		active: {
            type: 'Boolean',
            selector: 'div',
		}
    },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: Save,
	example: {
		attributes: {
			backgroundColor: '#000000',
		}
	}
},

window.wp.blocks,
window.wp.element,
window.wp.blockEditor );
