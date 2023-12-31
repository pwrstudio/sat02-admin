import {
    MdStar,
} from "react-icons/md"

export default {
    name: 'landingPage',
    title: 'Landing Page',
    icon: MdStar,
    type: 'document',
    fields: [
        {
            name: 'topPost',
            title: 'Top post',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'project' }]
                }
            ],
            description: 'Post shown at the top of the landing page. Leave empty to show a random post.'
        },
        {
            name: 'timestamp',
            title: 'Timestamp',
            type: 'number',
            readOnly: true,
            description: 'READ ONLY: Timestamp of the last time the landing page was updated'
        },
        {
            name: 'randomSelection',
            title: 'Random selection',
            type: 'array',
            readOnly: true,
            of: [
                {
                    name: 'postId',
                    title: 'Post ID',
                    type: 'string'
                }
            ],
            description: 'READ ONLY: Randomly selected posts to be shown on the landing page'
        },
    ],
}
