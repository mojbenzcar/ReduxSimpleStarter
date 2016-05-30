export function selectBook(book) {
    return {
      type:'BOOK_SELECT',
      payload: book
    };
}
