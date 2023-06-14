/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText,InnerBlocks  } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes } = props;
	const {
		content,
		title,
		uniformRadius,
		uniformPadding,
		topLeftRadius,
		topRightRadius,
		bottomLeftRadius,
		bottomRightRadius,
		borderColors,
		borderWidth,
		borderStyle,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		ttlColors,
		contentColors
	} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className={`accordion`}
			style={{
				borderRadius: uniformRadius ? `${topLeftRadius}px` : `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`,
				borderColor:`${borderColors}`,
				borderWidth:`${borderWidth}px`,
				borderStyle:`${borderStyle}`,
			}}>
				<div className="accordion-header js-accordion__btn"
					style={{
						padding: uniformPadding ? `${topPadding}%` : `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`,
						backgroundColor:`${ttlColors}`
					}}
				>
					<RichText.Content
						tagName="p" // 使用するHTMLタグ名
						className="accordion-title" // クラス名
						value={title} // テキストの値
					/>
					<span className="accordion-icon dashicons" />
				</div>
				<div className='accordion-content js-accordion__content'
				style={{
					borderTopColor:`${borderColors}`,
					borderTopWidth:`${borderWidth}px`,
					borderTopStyle:`${borderStyle}`,
					backgroundColor:`${contentColors}`
				}}
				>
					{/* <RichText.Content
						tagName="p" // 使用するHTMLタグ名
						className="accordion-content-inner" // クラス名
						value={content} // テキストの値
						style={{
							padding: uniformPadding ? `${topPadding}%` : `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`,
						}}
					/> */}
					<div
						style={{
							padding: uniformPadding ? `${topPadding}%` : `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`,
						}}
					>
						<InnerBlocks.Content/>
					</div>
				</div>
			</div>
		</div>
	);
}
