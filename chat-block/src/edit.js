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
	RichText,
	ColorPalette,
    InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button, ResponsiveWrapper, PanelBody, ToggleControl} from '@wordpress/components';
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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


export default function Edit( props ) {
	const {	attributes,setAttributes} = props;
	const onChangeBGColor = ( hexColor ) => {
		setAttributes( { bg_color: hexColor } );
	};

	const onChangeTextColor = ( hexColor ) => {
		setAttributes( { text_color: hexColor } );
	};
	const blockProps = useBlockProps();
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } );
	};
	const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: '/wp-content/plugins/le-comment-block/01-rose.png'
		});
	}

 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});

	}
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="setting">
				<div id="gutenpride-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'コメントの向き', 'gutenpride' ) }
						</legend>
						<ToggleControl
							label="向き"
							checked={attributes.active}
							onChange={(newVal) => {setAttributes({ active: newVal }); }}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'アイコン画像', 'gutenpride' ) }
						</legend>
						<PanelBody
							title={__('Select block background image', 'awp')}
							initialOpen={ true }
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectMedia}
									value={attributes.mediaId}
									allowedTypes={ ['image'] }
									render={({open}) => (
										<Button
											className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
											onClick={open}
										>
											{attributes.mediaId == 0 && __('Choose an image', 'awp')}
											{props.media != undefined &&
													<ResponsiveWrapper
														naturalWidth={ props.media.media_details.width }
														naturalHeight={ props.media.media_details.height }
													>
													<img src={props.media.source_url} />
												</ResponsiveWrapper>
												}
										</Button>
									)}
								/>
							</MediaUploadCheck>
							{attributes.mediaId != 0 &&
								<MediaUploadCheck>
									<MediaUpload
										title={__('Replace image', 'awp')}
										value={attributes.mediaId}
										onSelect={onSelectMedia}
										allowedTypes={['image']}
										render={({open}) => (
											<Button className='block' onClick={open} isDefault>{__('画像を変える', 'awp')}</Button>
										)}
									/>
								</MediaUploadCheck>
							}
							{attributes.mediaId != 0 &&
								<MediaUploadCheck>
									<Button className='block' onClick={removeMedia} isDestructive>{__('画像を削除する', 'awp')}</Button>
								</MediaUploadCheck>
							}
						</PanelBody>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'コメントの背景色', 'gutenpride' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeBGColor } // onChange event callback
							style={{backgroundColor: attributes.bg_color} }
							value={attributes.bg_color}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'コメントの色', 'gutenpride' ) }
						</legend>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={ onChangeTextColor } // onChange event callback
							style={{backgroundColor: attributes.text_color} }
							value={attributes.text_color}
						/>
					</fieldset>
				</div>
			</InspectorControls>
			<div className={ attributes.active ? "commentContainer commentContainer--right" : "commentContainer"}>
				<div className="commentUsers">
					<div className="commentUser">
						<div className="commentUser__img">
							<img src={attributes.mediaUrl} alt="" />
						</div>
						<RichText
							{ ...blockProps }
							tagName="p"
							onChange={ onChangeContent }
							value={ attributes.content }
							className="commentUser__name"
						/>
					</div>
				</div>
				<div className='comment__block'>
					<RichText
	                    value={ attributes.message }
	                    onChange={ ( val ) => setAttributes( { message: val } ) }
	                    style={ {
	                        backgroundColor: attributes.bg_color,
	                        color: attributes.text_color,
	                    } }
						className='comment__txt'
						tagName="p"
	                />
					<div className="comment__block--arrow" onChange={ ( val ) => setAttributes( { message: val } ) }
					style={ attributes.active ? {borderLeftColor: attributes.bg_color} : {borderRightColor: attributes.bg_color} }></div>
				</div>
			</div>
		</div>
	);
}
