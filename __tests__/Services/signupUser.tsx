import signupUser from './../../app/services/signupUser'

test('Add book to favrites test', () => {
    let response = signupUser('check')
    expect(response).not.toBeNull()
})
