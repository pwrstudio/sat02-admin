import {
    MdFolder
} from "react-icons/md"

export default {
    name: 'project',
    title: 'Project',
    icon: MdFolder,
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
            title: "Exhibition strand",
            name: "exhibitionStrand",
            type: "string",
            options: {
                list: [
                    { title: "Renewed Contextual", value: "renewed-contextual" },
                    { title: "Extraction Politics", value: "extraction-politics" },
                    { title: "Intangible Bodies", value: "intangible-bodies" },
                ],
                layout: "radio",
            },
        },
        {
            name: 'description',
            title: 'Description (english)',
            type: 'contentEditor',
            description: 'Project text',
            group: "en",
        },
        {
            name: 'description_ar',
            title: 'Description (arabic)',
            type: 'contentEditor',
            description: 'Project text',
            group: "ar",
        },
        {
            name: 'pullQuote',
            title: 'Pull quote (english)',
            type: 'text',
            description: 'Short quote',
            group: "en",
        },
        {
            name: 'pullQuote_ar',
            title: 'Pull quote (arabic)',
            type: 'text',
            description: 'Short quote in arabic',
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
            description: 'List of participants in the project'
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
            description: 'Project venues'
        },
        {
            name: 'matterportLink',
            title: 'Matterport Link',
            type: 'url',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
            description: 'Year of the project'
        },
        {
            name: 'medium',
            title: 'Medium',
            type: 'string',
            description: 'Medium of the project',
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
            name: 'processMedia',
            title: 'Process media',
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
                    ]
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
                }
            ],
            description: 'Media related to the project'
        },
        {
            name: 'documentationMedia',
            title: 'Documentation media',
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
            description: 'Media related to the project'
        },
        {
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'event' }]
                }
            ],
            description: 'List of events related to the project'
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
