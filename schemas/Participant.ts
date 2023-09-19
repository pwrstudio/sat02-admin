import {
    MdPerson,

} from "react-icons/md"
export default {
    name: 'participant',
    title: 'Participant',
    icon: MdPerson,
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
            description: 'Name of the participant',
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
            name: 'description',
            title: 'Description (english)',
            type: 'contentEditor',
            description: 'Description of the participant',
            group: "en",
        },
        {
            name: 'description_ar',
            title: 'Description (arabic)',
            type: 'contentEditor',
            description: 'Description of the participant',
            group: "ar",
        },
        {
            name: 'pullQuote',
            title: 'Pull quote (english)',
            type: 'text',
            description: 'Short quote',
            validation: (Rule: any) => Rule.max(400),
            group: "en",
        },
        {
            name: 'pullQuote_ar',
            title: 'Pull quote (arabic)',
            type: 'text',
            description: 'Short quote',
            group: "ar"
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
            of: [{
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
            }],
            description: 'Images related to the participant',

            validation: (Rule: any) => Rule.min(1).max(10)
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
                    description: 'Links related to the participant'
                }
            ],
            validation: (Rule: any) => Rule.min(1).max(5)
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
            media: 'featuredImage'
        },
        prepare(selection: any) {
            const { title, media } = selection;
            return {
                title,
                media: media.asset
            };
        }
    }
}