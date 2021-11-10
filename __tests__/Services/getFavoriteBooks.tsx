import getFavoriteBooks from './../../app/services/getFavoriteBooks'

test('Add book to favrites test', () => {
    let response = getFavoriteBooks()
    expect(response).not.toBeNull()
})
