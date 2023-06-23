(function() {
    var __ = wp.i18n.__;
    var registerFormatType = wp.richText.registerFormatType;
    var toggleFormat = wp.richText.toggleFormat;
    var ColorPicker = wp.components.ColorPicker; // カラーピッカーコンポーネント
    registerFormatType(
        'underline/inline', {
            title: __('Underline', 'text-domain'),
            tagName: 'u',
            className: 'has-underline',
            edit: function(props) {
                var isActive = props.isActive;
                var value = props.value;
                var onChange = props.onChange; // 初期のアクティブな色
                var activeColor = props.value.activeFormats[0]?.unregisteredAttributes?.color; // 初期のアクティブな色
                // console.log();
                // console.log(props);
                function onToggle() {
                    if(!activeColor){
                        activeColor = "#000000"
                    }
                    onChange(toggleFormat(value, {
                        type: 'underline/inline',
                        attributes: { 
                            style: 'text-decoration-color: ' + activeColor + '',
                            color: activeColor
                        }
                    }));
                }

                function onColorChange(color) {
                    // カラーピッカーの値が変更されたときの処理
                    activeColor = color.hex;
                    onChange(wp.richText.applyFormat(value, {
                        type: 'underline/inline',
                        attributes: { 
                            style: 'text-decoration-color: ' + activeColor + '',
                            color: activeColor
                        },
                        value: value
                    }));
                }

                // カラーピッカーのスタイルと位置調整用のスタイル
                var colorPickerStyle = {
                    position: 'absolute',
                    zIndex: 9999,
                    top: '40%',
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
                            icon: 'editor-underline',
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
