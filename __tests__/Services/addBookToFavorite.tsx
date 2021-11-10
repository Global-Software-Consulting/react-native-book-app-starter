import addBookToFavorite from './../../app/services/addBookToFavoite'

test('Add book to favrites test', () => {
    let response = addBookToFavorite(1)
    expect(response).not.toBeNull()
})
