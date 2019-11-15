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
      Provider: 'Proveedor',
      Price: 'Precio',
      Max: 'Maximo',
      Options: 'Opciones',
      Loading: 'Cargando',
      Categories: 'Categorias',
      Description: 'Descripcion',
      Select: 'Seleccionar',
      Create: 'Crear',
      Website: 'Sitio web',
      Locality: 'Localidad',
      Logo: 'Logo',
      'Open from': 'Abierto desde',
      'Radius in meters': 'Radio en metros',
      'Phone number': 'Numero de telefono',
      'Create provider': 'Crear proveedor',
      'Create menu': 'Crear menu',
      'Valid from': 'Valido desde',
      'Valid to': 'Valido hasta',
      'Max. sales': 'Max. ventas',
      'Delivery from': 'Entrega desde',
      'Delivery to': 'Entrega hasta',
      'Individual price': 'Precio individual',
      'Min. amount': 'Cant. minima',
      'Amount price': 'Precio minimo',
      'Delivery time': 'Tiempo entrega',
      'Delivery price': 'Precio entrega',
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
