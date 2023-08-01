(function() {
    var __ = wp.i18n.__;
    var registerFormatType = wp.richText.registerFormatType;
    var toggleFormat = wp.richText.toggleFormat;
    var ColorPicker = wp.components.ColorPicker; // カラーピッカーコンポーネント
    registerFormatType(
        'underline/inline', {
            title: __('Underline', 'text-domain'),
            tagName: 'span',
            className: 'has-underline',
            edit: function(props) {
                var isActive = props?.isActive;
                var value = props?.value;
                var onChange = props?.onChange; // 初期のアクティブな色
                if (!props.value.activeFormats) {
                    props.value.activeFormats = [];
                }
                var activeColor = props?.value.activeFormats[0]?.unregisteredAttributes?.color; // 初期のアクティブな色
                // console.log(props?.value.activeFormats[0]);
                // console.log(activeColor);
                function onToggle() {
                    if(!activeColor){
                        activeColor = "#000000"
                    }
                    onChange(toggleFormat(value, {
                        type: 'underline/inline',
                        attributes: { 
                            style: 'border-bottom: solid 2px ' + activeColor + '',
                            color: activeColor
                        },
                        unregisteredAttributes:{
                            color:activeColor
                        }
                    }));
                }

                function onColorChange(color) {
                    // カラーピッカーの値が変更されたときの処理
                    activeColor = color.hex;
                    onChange(wp.richText.applyFormat(value, {
                        type: 'underline/inline',
                        attributes: { 
                            style: 'border-bottom: solid 2px ' + activeColor + '',
                            color: activeColor
                        },
                        unregisteredAttributes:{
                            color:activeColor
                        },
                        value: value
                    }));
                }
                var isRootContainer = document.querySelector('.is-root-container');
                // var formatBoundaryTag = document.querySelector('[data-rich-text-format-boundary="true"]');
                // .is-selectedクラスを持つ要素を取得
                const parentElement = document.querySelector('.is-selected');

                // 子要素の中から[data-rich-text-format-boundary="true"]属性を持つ要素を取得
                const formatBoundaryTag = parentElement?.querySelector('[data-rich-text-format-boundary="true"]');

                // console.log(formatBoundaryTag);
                // カラーピッカーのスタイルと位置調整用のスタイル
                var colorPickerStyle = {
                    position: 'absolute',
                    zIndex: 9999,
                    top: formatBoundaryTag ? formatBoundaryTag.getBoundingClientRect().top - isRootContainer.getBoundingClientRect().top + formatBoundaryTag.offsetHeight + 'px' : '40%',
                    left: '0',
                    right: '0',
                    margin: "0 auto",
                    width: "fit-content",
                    padding: "10px",
                    background: "#fff",
                    border: "solid 1px #333",
                    borderRadius: "5px",
                };

                return wp.element.createElement(
                    wp.element.Fragment,
                    null,
                    wp.element.createElement(
                        wp.blockEditor.RichTextToolbarButton, {
                            icon: wp.element.createElement('svg', {xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"48", height:"48", ariaHidden:"true" ,focusable:"false", dangerouslySetInnerHTML: { __html: '<path d="M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"></path>' } }),
                            title: __('下線', 'text-domain'),
                            onClick: onToggle,
                            isActive: isActive,
                        }
                    ),
                    isActive && wp.element.createElement(
                        'div', {
                            style: colorPickerStyle,
                        },
                        wp.element.createElement(
                            ColorPicker, {
                                color: activeColor,
                                onChangeComplete: onColorChange,
                            }
                        )
                    )
                );
            }
        }
    );
})();
