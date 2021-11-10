import getBooks from './../../app/services/getBooks'

test('Add book to favrites test', () => {
    let response = getBooks('sea')
    expect(response).not.toBeNull()
})
