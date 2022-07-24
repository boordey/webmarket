export default{
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            Title: 'Image',
            type: 'image',
            options:{
                hotspot:true,
            },
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },
        {
            name: 'product',
            title:'product',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'smallText',
            type: 'string',
        },
        {
            name:'midText',
            title: 'midText',
            type: 'string',

        },
        {
            name: 'largeText1',
            title: 'LargeText',
            type: 'string',
        },
        {
            name: 'largeText2',
            title:'LargeText',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
    ],
};