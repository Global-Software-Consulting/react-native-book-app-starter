import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
i18n.use(initReactI18next).init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                'Dark Theme': 'Dark Theme',
                'Languages': 'Languages',
                'Home Sreen': 'Home Sreen',
                'Login': 'Login',
                'Login Status': 'Login Status',
                'Forgot Password': 'Forgot Password',
                'Explore': 'Explore',
                'Favorite': 'Favorite',
                'User Details': 'User Details',
                'Log out': 'Log out',

                'Hi': 'Hi',
                'Search Here': 'Search Here',
                'Lets find something new': 'Lets find something new',
                'Trending': 'Trending',
                'Selected for you': 'Selected for you',
                'New Releases': 'New Releases',

                'My Favorites': 'My Favorites',

                'First Name': 'First Name',
                'Last Name': 'Last Name',
                'Email': 'Email',
                'Gender': 'Gender',

                'Genre': 'Genre',
                'Launched': 'Launched',
                'pages': 'pages',
                'Synopse': 'Synopse',

                'Edit': 'Edit',
                'Update': 'Update',

                'Log In Now': 'Log In Now',
                'Please login to continue using our app': 'Please login to continue using our app',
                'Enter your email address': 'Enter your email address',
                'Enter your password': 'Enter your password',
                'Forgot Password': 'Forgot Password',
                'Log in': 'Log in',
                'Do not have an account?': 'Do not have an account?',
                'Sign up': 'Sign up',
                'Change Language': 'Change Language',
                'Email is required':'Email is required',
                'Password is required': 'Password is required',
                
                'Fill in the sign up form': 'Fill in the sign up form',
                'Enter your first name': 'Enter your first name',
                'Enter your last name': 'Enter your last name',
                'Enter your email': 'Enter your email',
                'Enter password': 'Enter password',
                'Please select gender': 'Please select gender',
                'First name is required': 'First name is required',
                'Last name is required': 'Last name is required',
                'Male': 'Male',
                'Female': 'Female',

                'Submit':'Submit',
                'Operation failed, please try again':'Operation failed, please try again'


                
            },
        },
        es: {
            translation: {
                'Dark Theme': 'Dunkles Thema',
                'Languages': 'Sprachen',
                'Home Sreen': 'Startbildschirm',
                'Login': 'Anmeldung',
                'Login Status': 'Login-Status',
                'Forgot Password': 'Passwort vergessen',
                'Explore': 'ontdekken',
                'Favorite': 'favoriet',
                'User Details': 'gebruiker',
                'Log out': 'Log out',

                'Hi': 'Hoi',
                'Search Here': 'Zoek hier',
                'Lets find something new': 'Laten we iets nieuws vinden',
                'Trending': 'Trending',
                'Selected for you': 'Voor jou geselecteerd',
                'New Releases': 'nieuwe uitgaven',

                'My Favorites': 'Mijn favorieten',

                'First Name': 'Voornaam',
                'Last Name': 'Achternaam',
                'Email': 'Email',
                'Gender': 'Geslacht',

                'Genre': 'Género',
                'Launched': 'Lanzado',
                'pages': 'paginas',
                'Synopse': 'Sinopsis',

                'Edit': 'Editar',
                'Update': 'Actualizar',

                'Log In Now': 'Inicia sesión ahora',
                'Please login to continue using our app': 'Inicie sesión para seguir usando nuestra aplicación',
                'Enter your email address': 'Ingrese su dirección de correo electrónico',
                'Enter your password': 'Ingresa tu contraseña',
                'Forgot Password': 'Has olvidado tu contraseña',
                'Log in': 'Iniciar sesión',
                'Do not have an account?': '¿No tiene una cuenta?',
                'Sign up': 'Inscribirse',
                'Change Language': 'Cambiar idioma',
                'Email is required':'correo electronico es requerido',
                'Password is required': 'se requiere contraseña',

                'Fill in the sign up form': 'Complete el formulario de registro',
                'Enter your first name': 'Ponga su primer nombre',
                'Enter your last name': 'Ingrese su apellido',
                'Enter your email': 'Introduce tu correo electrónico',
                'Enter password': 'Introducir la contraseña',
                'Please select gender': 'Por favor seleccione el género',
                'First name is required': 'Se requiere el primer nombre',
                'Last name is required': 'Se requiere apellido',
                'Male': 'Masculino',
                'Female': 'Mujer',
                
                'Submit':'Enviar',
                'Operation failed, please try again':'Error en la operación, inténtelo de nuevo'
            },
        },
        de: {
            translation: {
                'Dark Theme': 'Tema oscuro',
                'Languages': 'Idiomas',
                'Home Sreen': 'Pantalla de inicio',
                'Login': 'Acceso',
                'Login Status': 'Estado de inicio de sesiÃ³n',
                'Forgot Password': 'Has olvidado tu contraseÃ±a',
                'Explore': 'explorar',
                'Favorite': 'favorito',
                'User Details': 'usuaria',
                'Logout': 'cerrar sesiÃ³n',
                'Hi': 'Hola',
                'Search Here': 'busca aquÃ­',
                'Lets find something new': 'Busquemos algo nuevo',
                'Trending': 'Tendencias',
                'Selected for you': 'Seleccionado para ti',
                'New Releases': 'Nuevos lanzamientos',

                'My Favorites': 'Mis favoritas',

                'First Name': 'Primer nombre',
                'Last Name': 'Apellido',
                'Email': 'Correo electrÃ³nico',
                'Gender': 'GÃ©nero',

                'Genre': 'Genre',
                'Launched': 'gelanceerd',
                'pages': 'Pagina',
                'Synopse': 'Korte inhoud',

                'Edit': 'Bewerking',
                'Update': 'Update',

                'Log In Now': 'Log nu in',
                'Please login to continue using our app': 'Log in om onze app te blijven gebruiken',
                'Enter your email address': 'Vul je e-mail adres in',
                'Enter your password': 'Voer uw wachtwoord in',
                'Forgot Password': 'Wachtwoord vergeten',
                'Log in': 'Log in',
                'Do not have an account?': 'Heb je geen account?',
                'Sign up': 'Inschrijven',
                'Change Language': 'Taal wijzigen',
                'Email is required':'E-mail is vereist',
                'Password is required': 'Password is vereist',
                
                'Fill in the sign up form': 'Vul het aanmeldformulier in',
                'Enter your first name': 'Vul uw voornaam in',
                'Enter your last name': 'Vul je achternaam in',
                'Enter your email': 'Vul je e-mailadres in',
                'Enter password': 'Voer wachtwoord in',
                'Please select gender': 'Selecteer a.u.b. geslacht',
                'First name is required': 'voornaam is verplicht',
                'Last name is required': 'Achternaam is verplicht',
                'Male': 'Mannelijk',
                'Female': 'Vrouwelijk',
                
                'Submit':'Indienen',
                'Operation failed, please try again':'Bewerking mislukt, probeer het opnieuw'
                
            },
        },
    },
});
export default i18n;
