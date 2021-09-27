/* App config for apis
 */
const ApiConfig = {
    BASE_URL: 'https://ebook-application.herokuapp.com/v1',
    LOGIN: '/users/login',
    SIGNUP: '/users/signup',
    BOOKSLIST: '/books/search?filter[title][iLike]=',
    FAVBOOK_LIST: '/favorites',
    USERDETAILS: '/users/me',
    BOOKDETAIL: '/books/',
    ADDTOFAVORITES: '/favorites/',
    REMOVEFROMFAVORITES: '/favorites/',
    FORGETPASSWORD: '/users/forgot',
    UPDATEUSERDETAIL: '/users/profile',
    LOGINWITHGOOGLE: '---',
};

export default ApiConfig;
