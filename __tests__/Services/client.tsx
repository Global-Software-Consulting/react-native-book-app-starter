import api from './../../app/services/client'

test('Add book to favrites test', () => {
    let response = api(1, 2, 3, 4)
    expect(response).not.toBeNull()
})
