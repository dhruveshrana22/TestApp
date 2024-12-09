// localization.js
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
    en: {
        homeTitle: "Home",
        detailsTitle: "Details",
        helloWorld: "Hello World",
        goToDetails: "Go to Details",
        detailsScreen: "This is the Details Screen",
        goBack: "Go Back",
    },
    es: {
        homeTitle: "Inicio",
        detailsTitle: "Detalles",
        helloWorld: "Hola Mundo",
        goToDetails: "Ir a Detalles",
        detailsScreen: "Esta es la pantalla de detalles",
        goBack: "Regresar",
    },
    // Add more languages here
});

export default strings;
