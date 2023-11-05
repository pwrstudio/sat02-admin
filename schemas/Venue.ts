import {
    MdPinDrop
} from "react-icons/md"

export default {
    name: 'venue',
    title: 'Venue',
    icon: MdPinDrop,
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
            description: 'Name of the venue',
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
            name: "displayOrder",
            title: "Display Order",
            type: "number",
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
            description: 'Address of the venue',
            validation: (Rule: any) => Rule.required(),
            group: "en",
        },
        {
            name: 'address_ar',
            title: 'Address (arabic)',
            type: 'text',
            description: 'Address of the venue',
            group: "ar",
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Geographical location of the venue'
        },
        {
            name: 'description',
            title: 'Description (english)',
            type: 'contentEditor',
            description: 'A short description of the venue',
            group: "en",
        },
        {
            name: 'description_ar',
            title: 'Description (arabic)',
            type: 'contentEditor',
            description: 'A short description of the venue',
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
            of: [{
                type: 'image', options: {
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
            description: 'Images related to the venue',
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
                            validation: (Rule: any) => Rule.required()
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
                    description: 'Links related to the venue'
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
            title: 'title', media: 'images[0]'
        }
    }
}
