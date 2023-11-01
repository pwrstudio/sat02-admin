import {
    MdEvent,
} from "react-icons/md"

export default {
    name: 'event',
    title: 'Event',
    icon: MdEvent,
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
        category: "discussion",
        period: "openingEvent"
    },
    fields: [
        {
            name: 'title',
            title: 'Title (english)',
            type: 'string',
            description: 'Title of the event i english',
            validation: (Rule: any) => Rule.required().max(100),
            group: "en",
        },
        {
            name: 'title_ar',
            title: 'Title (arabic)',
            type: 'string',
            description: 'Title of the event in arabic',
            group: "ar",
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string',
            options: {
                list: [
                    { title: 'Discussion', value: 'discussion' },
                    { title: 'Performance', value: 'performance' }
                ],
                layout: 'radio',
            }
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
            description: 'Participants attending this event'
        },
        {
            name: 'description',
            title: 'Description (english)',
            type: 'contentEditor',
            group: "en",
        },
        {
            name: 'description_ar',
            title: 'Description (arabic)',
            type: 'contentEditor',
            group: "ar",
        },
        {
            name: 'dateTime',
            title: 'DateTime',
            type: 'datetime',
            description: 'Date and time of the event',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Period',
            name: 'period',
            type: 'string',
            options: {
                list: [
                    { title: 'Opening event', value: 'openingEvent' },
                    { title: 'Closing event', value: 'closingEvent' }
                ],
                layout: 'radio'
            }
        },
        {
            name: 'venues',
            title: 'Venues',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'venue' }]
                }
            ],
            description: 'Event venues'
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
            ]
        },
        {
            name: 'media',
            title: 'Media',
            type: 'array',
            of: [
                {
                    type: 'image',
                    title: 'Image',
                    name: 'image',
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
                    type: 'file',
                    title: 'Video',
                    name: 'video',
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
                    options: {
                        accept: 'video/*'
                    },
                    validation: (Rule: any) => Rule.required()
                },
                {
                    type: 'file',
                    title: 'Audio',
                    name: 'audio',
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
                    options: {
                        accept: 'audio/*'
                    },
                    validation: (Rule: any) => Rule.required()
                },
            ],
            description: 'Media related to the event'
        },
        {
            name: 'credits',
            title: 'Credits (english)',
            type: 'contentEditor',
            group: "en",
        },
        {
            name: 'credits_ar',
            title: 'Credits (arabic)',
            type: 'contentEditor',
            group: "ar",
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
    // preview: {
    //     select: {
    //         title: 'title',
    //         media: 'featuredImage'
    //     },
    //     prepare(selection: any) {
    //         const { title, media } = selection;
    //         return {
    //             title,
    //             media: media.asset ? media.asset : ''
    //         };
    //     }
    // }
}
