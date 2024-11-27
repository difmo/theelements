// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Element')
    .items([
      S.documentTypeListItem('contact').title('Contact'),
      S.documentTypeListItem('career').title('Career'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['contact', 'career', 'author'].includes(item.getId()),
      ),
    ])
