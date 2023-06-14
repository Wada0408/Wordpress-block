/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,RichText,InspectorControls,InnerBlocks } from '@wordpress/block-editor';
import { PanelBody,RangeControl,ColorPalette,ToggleControl,SelectControl  } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {attributes,setAttributes} = props;
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

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeContent = (newTitle) => {
		setAttributes({ content: newTitle });
	};
	const blockProps = useBlockProps();
	const updateIndividualRadii = (value) => {
        setAttributes({
            topLeftRadius: value,
            topRightRadius: value,
            bottomLeftRadius: value,
            bottomRightRadius: value,
        });
    };
	const updatePadding  = (value) => {
        setAttributes({
            topPadding: value,
            rightPadding: value,
            bottomPadding: value,
            leftPadding: value,
        });
    };
	const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
	return (
		<div { ...blockProps }>
			<InspectorControls>
                <PanelBody title="Border Settings">
					<div>
						<p>Border Radius</p>
	                    <ToggleControl
	                        label="Uniform Radius"
	                        checked={uniformRadius}
	                        onChange={(value) => setAttributes({ uniformRadius: value })}
	                    />
						{uniformRadius ? (
	                        <RangeControl
	                            label="Radius"
	                            value={topLeftRadius}
	                            min={0}
	                            max={100}
	                            onChange={(value) => updateIndividualRadii(value)}
	                        />
	                    ) : (
	                        <div>
	                            <RangeControl
	                                label="Top Left Radius"
	                                value={topLeftRadius}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ topLeftRadius: value })}
	                            />
	                            <RangeControl
	                                label="Top Right Radius"
	                                value={topRightRadius}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ topRightRadius: value })}
	                            />
	                            <RangeControl
	                                label="Bottom Left Radius"
	                                value={bottomLeftRadius}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ bottomLeftRadius: value })}
	                            />
	                            <RangeControl
	                                label="Bottom Right Radius"
	                                value={bottomRightRadius}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ bottomRightRadius: value })}
	                            />
	                        </div>
	                    )}
					</div>
					<div>
						<p>Border Width</p>
	                    <RangeControl
	                        value={borderWidth}
	                        min={0}
	                        max={10}
	                        onChange={(value) => setAttributes({ borderWidth: value })}
	                    />
					</div>
					<div>
						<p>Border Style</p>
	                    <SelectControl
	                        value={borderStyle}
							options={[
								{ label: 'dotted', value: 'dotted' },
								{ label: 'dashed', value: 'dashed' },
								{ label: 'solid', value: 'solid' },
								{ label: 'double', value: 'double' },
								{ label: 'groove', value: 'groove' },
								{ label: 'ridge', value: 'ridge' },
								{ label: 'inset', value: 'inset' },
								{ label: 'outset', value: 'outset' },
							]}
	                        onChange={(options) => setAttributes({ borderStyle: options })}
	                    />
					</div>
					<div>
						<p>Border Color</p>
						<ColorPalette
	                        colors={[
	                            { name: 'Red', color: '#ff0000' },
	                            { name: 'Blue', color: '#0000ff' },
	                            { name: 'Green', color: '#00ff00' },
	                            { name: 'transparent', color: 'transparent' },
	                            // Add more colors as needed
	                        ]}
	                        value={borderColors}
							clearable={false}
	                        onChange={(value) => setAttributes({ borderColors: value })}
	                    />
					</div>
                </PanelBody>
                <PanelBody title="Padding Settings">
					<div>
	                    <ToggleControl
	                        label="Uniform Padding"
	                        checked={uniformPadding}
	                        onChange={(value) => setAttributes({ uniformPadding: value })}
	                    />
						{uniformPadding ? (
	                        <RangeControl
	                            label="Padding"
	                            value={topPadding}
	                            min={0}
	                            max={100}
	                            onChange={(value) => updatePadding(value)}
	                        />
	                    ) : (
	                        <div>
	                            <RangeControl
	                                label="Top Padding"
	                                value={topPadding}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ topPadding: value })}
	                            />
	                            <RangeControl
	                                label="Right Padding"
	                                value={rightPadding}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ rightPadding: value })}
	                            />
	                            <RangeControl
	                                label="Bottom Padding"
	                                value={bottomPadding}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ bottomPadding: value })}
	                            />
	                            <RangeControl
	                                label="Left Padding"
	                                value={leftPadding}
	                                min={0}
	                                max={100}
	                                onChange={(value) => setAttributes({ leftPadding: value })}
	                            />
	                        </div>
	                    )}
					</div>
                </PanelBody>
				<PanelBody title="Accordion background Settings">
					<div>
						<p>Accordion title background Color</p>
						<ColorPalette
	                        colors={[
	                            { name: 'Red', color: '#ff0000' },
	                            { name: 'Blue', color: '#0000ff' },
	                            { name: 'Green', color: '#00ff00' },
	                            { name: 'transparent', color: 'transparent' },
	                            // Add more colors as needed
	                        ]}
	                        value={ttlColors}
							clearable={false}
	                        onChange={(value) => setAttributes({ ttlColors: value })}
	                    />
					</div>
					<div>
						<p>Accordion content background Color</p>
						<ColorPalette
	                        colors={[
	                            { name: 'Red', color: '#ff0000' },
	                            { name: 'Blue', color: '#0000ff' },
	                            { name: 'Green', color: '#00ff00' },
	                            { name: 'transparent', color: 'transparent' },
	                            // Add more colors as needed
	                        ]}
	                        value={contentColors}
							clearable={false}
	                        onChange={(value) => setAttributes({ contentColors: value })}
	                    />
					</div>
				</PanelBody>
            </InspectorControls>
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
					<RichText
						tagName="p" // 使用するHTMLタグ名
						className="accordion-title" // クラス名
						value={title} // テキストの値
						onChange={onChangeTitle} // テキストが変更されたときのコールバック関数
					/>
					<span className={`accordion-icon dashicons`} />
				</div>
				<div className='accordion-content js-accordion__content'
				style={{
					borderTopColor:`${borderColors}`,
					borderTopWidth:`${borderWidth}px`,
					borderTopStyle:`${borderStyle}`,
					backgroundColor:`${contentColors}`
				}}
				>
					{/* <RichText
						tagName="p" // 使用するHTMLタグ名
						className="accordion-content-inner" // クラス名
						value={content} // テキストの値
						onChange={onChangeContent}
						style={{
							padding: uniformPadding ? `${topPadding}%` : `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`,
						}}
					/> */}
					<div
						style={{
							padding: uniformPadding ? `${topPadding}%` : `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`,
						}}
					>
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
					</div>
				</div>
			</div>
		</div>
	);
}
