import removeBookFromFavoite from './../../app/services/removeBookFromFavoite'

test('Add book to favrites test', () => {
    let response = removeBookFromFavoite(1)
    expect(response).not.toBeNull()
})
