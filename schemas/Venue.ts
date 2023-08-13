export default {
    name: 'venue',
    title: 'Venue',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Name of the venue',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
            description: 'Address of the venue',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            description: 'Geographical location of the venue'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'contentEditor',
            description: 'A short description of the venue',
        },
        {
            name: 'featuredImage',
            title: 'Featured image',
            type: 'image',
            description: 'Featured image of the project',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Images related to the venue',
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
                    description: 'Links related to the venue'
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
