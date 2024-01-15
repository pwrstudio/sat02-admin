import {
    MdShop
} from "react-icons/md"

export default {
    name: 'storeItem',
    title: 'Store Item',
    icon: MdShop,
    type: 'document',
    groups: [
        {
            name: 'en',
            title: 'English',
        },
        {
            name: 'ar',
            title: 'Arabic',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Title (english)',
            type: 'string',
            description: 'Title in English',
            validation: (Rule: any) => Rule.required(),
            group: "en",
        },
        {
            name: 'title_ar',
            title: 'Title (arabic)',
            type: 'string',
            description: 'Title in Arabic',
            group: "ar",
        },
        {
            name: 'featuredImage',
            title: 'Featured image',
            type: 'image',
            description: 'Featured image of the project',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption (english)',
                },
                {
                    name: 'caption_ar',
                    type: 'string',
                    title: 'Caption (arabic)',
                },
            ],
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption (english)',
                        },
                        {
                            name: 'caption_ar',
                            type: 'string',
                            title: 'Caption (arabic)',
                        },
                    ],
                },
                {
                    title: 'Video',
                    name: 'video',
                    type: 'object',
                    fields: [
                        {
                            type: 'url',
                            title: 'Url',
                            name: 'url',
                            description: 'Youtube or Vimeo url, eg. https://vimeo.com/235224162',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption (english)',
                        },
                        {
                            name: 'caption_ar',
                            type: 'string',
                            title: 'Caption (arabic)',
                        },
                    ]
                }],
            description: 'Images related to the participant',
            validation: (Rule: any) => Rule.min(1)
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'content',
            title: 'Content (english)',
            type: 'contentEditor',
            description: 'Main content in English',
            group: "en"
        },
        {
            name: 'content_ar',
            title: 'Content (arabic)',
            type: 'contentEditor',
            description: 'Main content in Arabic',
            group: "ar"
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}
