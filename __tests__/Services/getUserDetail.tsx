import getUserDetail from './../../app/services/getUserDetail'

test('Add book to favrites test', () => {
    let response = getUserDetail()
    expect(response).not.toBeNull()
})
