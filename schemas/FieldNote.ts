import {
    MdBook
} from "react-icons/md"

export default {
    name: 'fieldNote',
    title: 'Field Note',
    icon: MdBook,
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
            title: 'Title',
            type: 'string',
            description: 'Title of the field note in english',
            validation: (Rule: any) => Rule.required().max(100),
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
            name: 'participants',
            title: 'Participants',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'participant' }]
                }
            ],
            description: 'Participants referenced in this field note'
        },
        {
            name: 'content',
            title: 'Content (english)',
            type: 'contentEditor',
            description: 'Content of the field note',
            group: "en",
        },
        {
            name: 'content_ar',
            title: 'Content (arabic)',
            type: 'contentEditor',
            description: 'Content of the field note',
            group: "ar",
        },
        {
            name: 'pullQuote',
            title: 'Pull quote (english)',
            type: 'text',
            description: 'Short quote in english',
            validation: (Rule: any) => Rule.max(400),
            group: "en",
        },
        {
            name: 'pullQuote_ar',
            title: 'Pull quote (arabic)',
            type: 'text',
            description: 'Short quote in arabic',
            validation: (Rule: any) => Rule.max(400),
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
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title (english)',
                            validation: (Rule: any) => Rule.required().max(100)
                        },
                        {
                            name: 'title_ar',
                            type: 'string',
                            title: 'Title (arabic)',
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'URL',
                            validation: (Rule: any) => Rule.required().uri({
                                scheme: ['http', 'https', 'mailto', 'tel']
                            }),
                        }
                    ],
                    title: 'Link',
                    description: 'Links related to the field note'
                }
            ],
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
    preview: {
        select: {
            title: 'title',
            subtitle: 'content',
            media: 'images[0]'
        }
    }
}
