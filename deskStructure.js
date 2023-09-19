import {
    MdFolder,
    MdArticle,
    MdPerson,
    MdEvent,
    MdBook,
    MdPinDrop,
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("SAT02")
        .items([
            S.listItem()
                .title("Pages")
                .icon(MdArticle)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "page" })
                ),
            S.listItem()
                .title("Participants")
                .icon(MdPerson)
                .child(
                    S.documentList()
                        .title('Participants')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "participant" })
                ),
            S.listItem()
                .title("Projects")
                .icon(MdFolder)
                .child(
                    S.documentList()
                        .title('Projects')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "project" })
                ),
            S.listItem()
                .title("Events")
                .icon(MdEvent)
                .child(
                    S.documentList()
                        .title('Events')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "event" })
                ),
            S.listItem()
                .title("Field notes")
                .icon(MdBook)
                .child(
                    S.documentList()
                        .title('Field notes')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "fieldNote" })
                ),
            S.listItem()
                .title("Venues")
                .icon(MdPinDrop)
                .child(
                    S.documentList()
                        .title('Venues')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "venue" })
                ),
        ])
