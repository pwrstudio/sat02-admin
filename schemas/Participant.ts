export default {
    name: 'participant',
    title: 'Participant',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Name of the participant',
            validation: (Rule: any) => Rule.required().max(100)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A short description of the participant',
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Images related to the participant',
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
            subtitle: 'description',
            media: 'images[0]'
        }
    }
}