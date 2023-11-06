import {
    MdNewspaper,
} from "react-icons/md"

export default {
    name: 'pressRelease',
    title: 'Press Release',
    icon: MdNewspaper,
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
    initialValue: {
        targetType: "pdf"
    },
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
            name: 'date',
            title: 'Date',
            type: 'date'
        },
        {
            name: 'targetType',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'PDF', value: 'pdf' },
                    { title: 'External link', value: 'link' },
                ],
                layout: 'radio',
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'pdf',
            title: 'PDF ',
            type: 'file',
            options: {
                accept: '.pdf'
            },
        },
        {
            name: 'pdf_ar',
            title: 'PDF (arabic)',
            type: 'file',
            options: {
                accept: '.pdf'
            },
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
    orderings: [
        {
            title: 'Release Date, New',
            name: 'dateDesc',
            by: [
                { field: 'date', direction: 'desc' }
            ]
        },
    ]
}
