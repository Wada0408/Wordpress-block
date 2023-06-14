/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText
 } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {
	const blockProps = useBlockProps.save();
	return (
		<div className={ props.attributes.active ? "commentContainer commentContainer--right" : "commentContainer"}>
			<div className="commentUsers">
				<div className="commentUser__img"><img src={props.attributes.mediaUrl} alt="" /></div>
				<div className="commentUser">
					<RichText.Content
						{ ...blockProps }
						tagName="p"
						value={ props.attributes.content }
						className="commentUser__name"
					/>
				</div>
			</div>
			<div className='comment__block'>
				<RichText.Content
	                { ...useBlockProps.save() }
	                style={ {
	                    backgroundColor: props.attributes.bg_color,
	                    color: props.attributes.text_color,
	                } }
					className='comment__txt'
					value={ props.attributes.message }
					tagName="p"
	            />
				<div className="comment__block--arrow" style={ props.attributes.active ? {borderLeftColor: props.attributes.bg_color} : {borderRightColor: props.attributes.bg_color} }></div>
			</div>
		</div>
	);
}
