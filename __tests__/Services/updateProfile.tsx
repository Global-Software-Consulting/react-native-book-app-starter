import updateProfile from './../../app/services/updateProfile'

test('Add book to favrites test', () => {
    let response = updateProfile({ firstName: 'ac', lastName: 'de' })
    expect(response).not.toBeNull()
})
