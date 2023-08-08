export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the event',
            validation: (Rule: any) => Rule.required().max(100)
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
            title: 'Description',
            type: 'text',
            description: 'A short description of the event',
            validation: (Rule: any) => Rule.required().min(10).max(200)
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
            description: 'Venue where the event will be held',
            validation: (Rule: any) => Rule.required().max(100)
        },
        {
            name: 'dateTime',
            title: 'DateTime',
            type: 'datetime',
            description: 'Date and time of the event',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'medium',
            title: 'Medium',
            type: 'string',
            description: 'Medium of the event',
            validation: (Rule: any) => Rule.required().max(100)
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
                            title: 'Description',
                            validation: (Rule: any) => Rule.required().max(100)
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
            description: 'Media related to the event'
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
            media: 'media[0]'
        }
    }
}
