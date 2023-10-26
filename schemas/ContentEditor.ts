import { largeDecorator } from "./decorators/LargeDecorator"

export default {
    title: 'Content editor',
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            description: 'To make a single line-break within a paragraph, press SHIFT + ENTER',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        {
                            title: 'Large',
                            value: 'large',
                            component: largeDecorator
                        },
                        { title: 'Quote', value: 'blockquote' },
                        // { title: 'H1', value: 'h1' },
                        // { title: 'H2', value: 'h2' },
                        // { title: 'H3', value: 'h3' },
                    ],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                        ]
                    },
                },
            ]
        }
    ]
}