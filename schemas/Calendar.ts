import {
    MdCalendarMonth,
} from "react-icons/md"

export default {
    name: 'calendar',
    title: 'Calendar',
    icon: MdCalendarMonth,
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
            name: 'opening',
            title: 'Opening text (english)',
            type: 'contentEditor',
            description: 'Opening text in English',
            group: "en"
        },
        {
            name: 'opening_ar',
            title: 'Opening text (arabic)',
            type: 'contentEditor',
            description: 'Opening text in Arabic',
            group: "ar"
        },
        {
            name: 'closing',
            title: 'Closing text (english)',
            type: 'contentEditor',
            description: 'Closing text in English',
            group: "en"
        },
        {
            name: 'closing_ar',
            title: 'Closing text (arabic)',
            type: 'contentEditor',
            description: 'Closing text in Arabic',
            group: "ar"
        },
    ],
}
