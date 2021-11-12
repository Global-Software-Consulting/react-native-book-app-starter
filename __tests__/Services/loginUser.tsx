import loginUser from './../../app/services/loginUser'

test('Add book to favrites test', () => {
    let response = loginUser({})
    expect(response).not.toBeNull()
})
