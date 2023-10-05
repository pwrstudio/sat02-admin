import {
    MdShop,
} from "react-icons/md"

export default {
    name: 'designStore',
    title: 'Design store',
    icon: MdShop,
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
            name: 'content',
            title: 'Content (english)',
            type: 'contentEditor',
            description: 'Main content in English',
            group: "en"
        },
        {
            name: 'content_ar',
            title: 'Content (arabic)',
            type: 'contentEditor',
            description: 'Main content in Arabic',
            group: "ar"
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
}
