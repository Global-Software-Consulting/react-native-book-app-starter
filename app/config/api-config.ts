/* App config for apis
 */
const ApiConfig = {
  BASE_URL: 'https://ebook-application.herokuapp.com/v1',
  LOGIN: '/users/login',
  BOOKSLIST:'/books/search?filter[title][iLike]=',
  FAVBOOKLIST: '/favorites',
  USERDETAILS: '/users/me',
  BOOKDETAIL: '/books/',
  ADDTOFAVORITES: '/favorites/',
  REMOVEFROMFAVORITES: '/favorites/'
};

export default ApiConfig;
