import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  AR: {
    translation: {
      Login: 'Entrar',
      Email: 'Correo electronico',
      Password: 'Contraseña',
      Enter: 'Ingresar',
      register: 'registrate',
      Register: 'Registrarse',
      Name: 'Nombre',
      Lastname: 'Apellido',
      Repeat: 'Repetir',
      Phone: 'Telefono',
      Address: 'Direccion',
      'Select Language': 'Seleccionar lenguage',
      'Login with facebook': 'Entrar con facebook',
      'Login with google': 'Entrar con google',
      'Enter email': 'Ingrese su correo electronico',
      'We will never share your email with anyone else.': 'Nunca compartiremos su correo electrónico con nadie más.',
      'Enter password': 'Ingrese su contraseña',
      'If you have not account, ': 'Si no tenes cuenta, ',
      'Enter name': 'Ingrese su nombre',
      'Enter lastname': 'Ingrese su apellido',
      'Repeat password': 'Repita su contraseña',
      'Enter phone number': 'Ingrese su numero de telefono',
      'Enter address': 'Ingrese su direccion',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'US',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
