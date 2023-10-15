import {
    MdFolder,
    MdArticle,
    MdPerson,
    MdEvent,
    MdBook,
    MdPinDrop,
    MdNewspaper,
    MdMail,
    MdPeople,
    MdHome,
    MdShop,
    MdCalendarMonth
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("SAT02")
        .items([
            S.listItem()
                .title("Pages")
                .icon(MdArticle)
                .child(
                    S.list()
                        .title("Pages")
                        .items([
                            S.listItem()
                                .title("About")
                                .icon(MdHome)
                                .child(
                                    S.editor()
                                        .id("about")
                                        .title("About")
                                        .schemaType("about")
                                        .documentId("about")
                                ),
                            S.listItem()
                                .title("Team")
                                .icon(MdPeople)
                                .child(
                                    S.editor()
                                        .id("team")
                                        .title("Team")
                                        .schemaType("team")
                                        .documentId("team")
                                ),
                            S.listItem()
                                .title("Contact")
                                .icon(MdMail)
                                .child(
                                    S.editor()
                                        .id("contact")
                                        .title("Contact")
                                        .schemaType("contact")
                                        .documentId("contact")
                                ),
                            S.listItem()
                                .title("Design store")
                                .icon(MdShop)
                                .child(
                                    S.editor()
                                        .id("design-store")
                                        .title("Design store")
                                        .schemaType("designStore")
                                        .documentId("design-store")
                                ),
                            S.listItem()
                                .title("Press")
                                .icon(MdNewspaper)
                                .child(
                                    S.editor()
                                        .id("press")
                                        .title("Press")
                                        .schemaType("press")
                                        .documentId("press")
                                ),
                            S.listItem()
                                .title("Calendar")
                                .icon(MdCalendarMonth)
                                .child(
                                    S.editor()
                                        .id("calendar")
                                        .title("Calendar")
                                        .schemaType("calendar")
                                        .documentId("calendar")
                                ),
                            S.listItem()
                                .title("Venues")
                                .icon(MdPinDrop)
                                .child(
                                    S.editor()
                                        .id("venues")
                                        .title("Venues")
                                        .schemaType("page")
                                        .documentId("venues")
                                ),
                        ])
                ),
            S.divider(),
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
            S.divider(),
            S.listItem()
                .title("Press releases")
                .icon(MdBook)
                .child(
                    S.documentList()
                        .title('Press releases')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "pressRelease" })
                ),
            S.listItem()
                .title("Press coverage")
                .icon(MdNewspaper)
                .child(
                    S.documentList()
                        .title('Press coverage')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "pressCoverage" })
                ),
            S.divider(),
            S.listItem()
                .title("Store items")
                .icon(MdShop)
                .child(
                    S.documentList()
                        .title('Store items')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "storeItem" })
                ),
        ])
