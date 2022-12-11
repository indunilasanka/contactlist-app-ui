import {createContext, useEffect, useState} from 'react';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

    const [contacts, setContacts] = useState([
        {
            id: 1,
            firstName: 'Sophie',
            lastName: 'Klein',
            organisation: 'Australian Agent for International Students',
            organisationABN: '99 999 999 991',
            dateCreated: '10/12/2022'
        },
        {
            id: 2,
            firstName: 'Perry',
            lastName: 'Kennedy',
            organisation: 'Australian Agent for International Students',
            organisationABN: '99 999 999 991',
            dateCreated: '10/12/2022'
        },
        {
            id: 3,
            firstName: 'Alma',
            lastName: 'Armstrong',
            organisation: 'Australian Agent for International Students',
            organisationABN: '99 999 999 991',
            dateCreated: '10/12/2022'
        },
        {
            id: 4,
            firstName: 'Alexander',
            lastName: 'Morris',
            organisation: 'CRP AUSTRALIA PTY LTD',
            organisationABN: '99 999 999 992',
            dateCreated: '10/12/2022'
        },
        {
            id: 5,
            firstName: 'Wm',
            lastName: 'Brady',
            organisation: 'CRP AUSTRALIA PTY LTD',
            organisationABN: '99 999 999 992',
            dateCreated: '10/12/2022'
        },
        {
            id: 6,
            firstName: 'Rudy',
            lastName: 'Bush',
            organisation: 'CRP AUSTRALIA PTY LTD',
            organisationABN: '99 999 999 992',
            dateCreated: '10/12/2022'
        },
        {
            id: 7,
            firstName: 'Andres',
            lastName: 'Mcguire',
            organisation: 'CRP AUSTRALIA PTY LTD',
            organisationABN: '99 999 999 992',
            dateCreated: '10/12/2022'
        },
        {
            id: 8,
            firstName: 'Nick',
            lastName: 'Lane',
            organisation: 'THE AUSTRALIAN',
            organisationABN: '99 999 999 993',
            dateCreated: '10/12/2022'
        },
    ])

    const [organisations] = useState([
        {
            id: 10,
            name: 'Australian Agent for International Students',
            abn: '99 999 999 991'
        },
        {
            id: 11,
            name: 'CRP AUSTRALIA PTY LTD',
            abn: '99 999 999 992'
        },
        {
            id: 12,
            name: 'THE AUSTRALIAN',
            abn: '99 999 999 993'
        },
    ]);

    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const updateContact = (id, updatedContact) => {
        setContacts(contacts.map((contact) => contact.id === id ? updatedContact : contact))
    }

    useEffect(() => {
        filterContacts(null, null, null)
    }, [contacts])

    const filterContacts = (firstNameSearchStr, lastNameSearchStr, organisationSearchStr) => {
        let result = contacts;
        if (firstNameSearchStr) {
            result = contacts.filter(a => a.firstName.toUpperCase().includes(firstNameSearchStr.toUpperCase()));
        }
        if (lastNameSearchStr) {
            result = result.filter(a => a.lastName.toUpperCase().includes(lastNameSearchStr.toUpperCase()));
        }
        if (organisationSearchStr) {
            result = result.filter(a => a.organisation.toUpperCase().includes(organisationSearchStr.toUpperCase()));
        }
        setFilteredContacts(result);
    };

    return (
        <ContactContext.Provider value={{filteredContacts, filterContacts, updateContact, organisations}}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider;
