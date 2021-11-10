import getBookDetail from './../../app/services/getBookDetail'

test('Add book to favrites test', () => {
    let response = getBookDetail(1)
    expect(response).not.toBeNull()
})
