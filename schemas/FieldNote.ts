export default {
    name: 'fieldNote',
    title: 'Field Note',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the field note',
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
            description: 'Participants referenced in this field note'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
            description: 'Content of the field note',
            validation: (Rule: any) => Rule.required().min(10).max(2000)
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Images related to the field note',
            options: {
                hotspot: true,
            },
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
                            title: 'Title',
                            validation: (Rule: any) => Rule.required().max(100)
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
            subtitle: 'content',
            media: 'images[0]'
        }
    }
}
