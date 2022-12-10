import {Button, Form, FormLabel} from "react-bootstrap"

import {ContactContext} from '../containers/contact/ContactContext';
import {useContext, useEffect, useState} from 'react';

const ViewEditForm = ({contact}) => {

    const id = contact.id;
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [organisation, setOrganisation] = useState(contact.organisation);
    const [organisationABN, setOrganisationABN] = useState(contact.organisationABN);
    const [dateCreated] = useState(contact.dateCreated);
    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        const org = organisations.find(o => o.name === organisation);
        setOrganisationABN(org.abn);
    }, [setOrganisation])

    const allowEdit = (e) => {
        e.preventDefault();
        setReadOnly(false);
    }

    const {updateContact, organisations} = useContext(ContactContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateContact(id, {id, firstName, lastName, organisation, organisationABN, dateCreated});
        setReadOnly(true);
    }

    return (
        readOnly ?
            <Form onSubmit={allowEdit}>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="firstName">
                        First Name</FormLabel>
                    <Form.Control
                        type="text"
                        name="firstName"
                        readOnly={readOnly}
                        value={firstName}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="lastName">
                        Last Name</FormLabel>
                    <Form.Control
                        type="text"
                        name="lastName"
                        readOnly={readOnly}
                        value={lastName}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="organisation">
                        Organisation</FormLabel>
                    <Form.Control
                        type="text"
                        readOnly={readOnly}
                        name="lastName"
                        value={organisation}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="organisationABN">
                        Organisation ABN</FormLabel>
                    <Form.Control
                        type="text"
                        readOnly={readOnly}
                        name="organisationABN"
                        value={organisationABN}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="lastName">
                        Date Created</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="Created at"
                        readOnly={readOnly}
                        name="dateCreated"
                        value={dateCreated}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={allowEdit} block>
                    Edit Contact
                </Button>
            </Form> :
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="firstName">
                        First Name</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="First name *"
                        name="firstName"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="lastName">
                        Last Name</FormLabel>
                    <Form.Control
                        type="text"
                        placeholder="Last name *"
                        name="lastName"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <FormLabel style={{fontWeight: "bold"}} htmlFor="organisation">
                        Organisation</FormLabel>

                    <Form.Control
                        as="select"
                        name="organisation"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}>
                        {organisations.map(organisation => (
                            <option key={organisation.id}
                                    value={organisation.name}>{organisation.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Button variant="success" type="submit" block>
                    Save Contact
                </Button>
            </Form>

    )
}

export default ViewEditForm;
