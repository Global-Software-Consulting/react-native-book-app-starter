import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        'Dark Theme':'Dark Theme',
        'Languages':'Languages',
        'Home Sreen':'Home Sreen',
        'Login':'Login',
        'Login Status':'Login Status',
        'Forgot Password':'Forgot Password',
        'Explore': 'Explore',
        'Favorite': 'Favorite',
        'User Details': 'User Details',
        'Languages': 'Languages',
        'Log out':'Log out',

        'Hi':'Hi',
        'Search Here':'Search Here',
        'Lets find something new':'Lets find something new',
        'Trending':'Trending',
        'Selected for you':'Selected for you',
        'New Releases':'New Releases',

        'My Favorites':'My Favorites',

        'First Name': 'First Name',
        'Last Name': 'Last Name',
        'Email': 'Email',
        'Gender': 'Gender',

        'Genre':'Genre',
        'Launched':'Launched',
        'pages':'pages',
        "Synopse":'Synopse',

      },
    },
    es: {
      translation: {
        'Dark Theme': 'Dunkles Thema',
        'Languages':'Sprachen',
        'Home Sreen':'Startbildschirm',
        'Login':'Anmeldung',
        'Login Status':'Login-Status',
        'Forgot Password':'Passwort vergessen',
        'Explore': 'ontdekken',
        'Favorite': 'favoriet',
        'User Details': 'gebruiker',
        'Languages': 'Lanuages',
        'Log out':'Log out',

        'Hi':'Hoi',
        'Search Here':'Zoek hier',
        'Lets find something new':'Laten we iets nieuws vinden',
        'Trending':'Trending',
        'Selected for you':'Voor jou geselecteerd',
        'New Releases':'nieuwe uitgaven',

        'My Favorites':'Mijn favorieten',

        'First Name': 'Voornaam',
        'Last Name': 'Achternaam',
        'Email': 'Email',
        'Gender': 'Geslacht',

        'Genre':'Género',
        'Launched':'Lanzado',
        'pages':'paginas',
        "Synopse":'Sinopsis',
      },
    },
    de: {
      translation: {
        'Dark Theme': 'Tema oscuro',
      'Languages':'Idiomas',
      'Home Sreen':'Pantalla de inicio',
      'Login':'Acceso',
      'Login Status':'Estado de inicio de sesiÃ³n',
      'Forgot Password':'Has olvidado tu contraseÃ±a',
      'Explore': 'explorar',
      'Favorite': 'favorito',
      'User Details': 'usuaria',
      'Languages': 'idiomas',
      'Logout':'cerrar sesiÃ³n',
      'Hi':'Hola',
        'Search Here':'busca aquÃ­',
        'Lets find something new':'Busquemos algo nuevo',
        'Trending':'Tendencias',
        'Selected for you':'Seleccionado para ti',
        'New Releases':'Nuevos lanzamientos',

        'My Favorites':'Mis favoritas',

        'First Name': 'Primer nombre',
        'Last Name': 'Apellido',
        'Email': 'Correo electrÃ³nico',
        'Gender': 'GÃ©nero',


        'Genre':'Genre',
        'Launched':'gelanceerd',
        'pages':'Pagina',
        "Synopse":'Korte inhoud',
      },
    },
  },
});
export default i18n;

