export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the project',
            validation: (Rule: any) => Rule.required().max(100)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A short description of the project'
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
                    }
                },
                {
                    type: 'file',
                    title: 'Video',
                    name: 'video',
                    fields: [
                        {
                            name: 'description',
                            type: 'string',
                            title: 'Description'
                        }
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
                            name: 'description',
                            type: 'string',
                            title: 'Description',
                            validation: (Rule: any) => Rule.required().max(100)
                        }
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
                    }
                },
                {
                    type: 'file',
                    title: 'Video',
                    name: 'video',
                    fields: [
                        {
                            name: 'description',
                            type: 'string',
                            title: 'Description'
                        }
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
                            name: 'description',
                            type: 'string',
                            title: 'Description',
                            validation: (Rule: any) => Rule.required().max(100)
                        }
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
            subtitle: 'description',
            media: 'processMedia'
        },
        prepare(selection: any) {
            const { title, subtitle, media } = selection;

            // Assuming that the first media is always an image
            const firstImageAsset = media && media[0].asset;

            return {
                title,
                subtitle,
                media: firstImageAsset
            };
        }
    }

}
