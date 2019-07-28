export const EDITOR_CONFIG_BASIC={
    height:350
}

export const EDITOR_CONFIG_CLASSIC = {
    height: 350,
    plugins: [
        'link table paste ',
    ],
    toolbar1:
        'newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect',
    toolbar2:
        'table | cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor',
    menubar: false,
    font_formats: "굴림=굴림;굴림체=굴림체;돋움=돋움;돋움체=돋움체;바탕=바탕;바탕체=바탕체;Arial=Arial; Comic Sans MS='Comic Sans MS';Courier New='Courier New';Tahoma=Tahoma;Verdana=Verdana", 
	extended_valid_elements : 'img[src|width|height|align],div[id|style|contenteditable],span[id|style|contenteditable],strong,em,pre[class|name],br',
    toolbar_items_size: 'small',
    style_formats: [
        {
            title: 'Bold text',
            inline: 'b',
        },
        {
            title: 'Red text',
            inline: 'span',
            styles: {
                color: '#ff0000',
            },
        },
        {
            title: 'Red header',
            block: 'h1',
            styles: {
                color: '#ff0000',
            },
        },
        {
            title: 'Example 1',
            inline: 'span',
            classes: 'example1',
        },
        {
            title: 'Example 2',
            inline: 'span',
            classes: 'example2',
        },
        {
            title: 'Table styles',
        },
        {
            title: 'Table row 1',
            selector: 'tr',
            classes: 'tablerow1',
        },
    ],
    templates: [
        {
            title: 'Test template 1',
            content: 'Test 1',
        },
        {
            title: 'Test template 2',
            content: 'Test 2',
        },
    ],
    init_instance_callback: function () { },
};