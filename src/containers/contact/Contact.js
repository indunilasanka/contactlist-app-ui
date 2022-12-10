import ContactList from '../../components/ContactList';
import ContactContextProvider from './ContactContext';

function Contact() {
    return (
        <>
            <ContactContextProvider>
                <ContactList/>
            </ContactContextProvider>
        </>
    );
}

export default Contact;



