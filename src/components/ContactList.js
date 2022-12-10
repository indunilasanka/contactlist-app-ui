import {Button, Col, Form, FormLabel, Row} from 'react-bootstrap';
import {useContext, useState} from 'react';
import {ContactContext} from '../containers/contact/ContactContext';
import ContactRow from './ContactRow';
import Pagination from './Pagination';

const ContactList = () => {
    const {filteredContacts, filterContacts} = useContext(ContactContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [contactsPerPage] = useState(6);

    const [firstNameSearchStr, setFirstNameSearchStr] = useState("");
    const [lastNameSearchStr, setLastNameSearchStr] = useState("");
    const [organisationSearchStr, setOrganisationSearchStr] = useState("");

    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);
    const totalPagesNum = Math.ceil(contactsPerPage.length / contactsPerPage);

    const handleSubmit = (e) => {
        e.preventDefault();
        filterContacts(firstNameSearchStr, lastNameSearchStr, organisationSearchStr);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Row>
                        <Col sm={3}>
                            <FormLabel style={{fontWeight: "bold"}} htmlFor="firstName">
                                First Name</FormLabel>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={firstNameSearchStr}
                                onChange={(e) => setFirstNameSearchStr(e.target.value)}
                                placeholder="Enter first name to search for here...."
                                name="firstName"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col sm={3}>
                            <FormLabel style={{fontWeight: "bold"}} htmlFor="firstName">
                                Last Name</FormLabel>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={lastNameSearchStr}
                                onChange={(e) => setLastNameSearchStr(e.target.value)}
                                placeholder="Enter last name to search for here...."
                                name="lastName"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col md={3}>
                            <FormLabel style={{fontWeight: "bold"}} htmlFor="firstName">
                                Organisation Name</FormLabel>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="text"
                                value={organisationSearchStr}
                                onChange={(e) => setOrganisationSearchStr(e.target.value)}
                                placeholder="Enter organisation name to search for here...."
                                name="organisation"
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col className={"btn-col"}>
                            <Button variant="primary" type="submit" size={"md"}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <br/>
            <br/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Organisation</th>
                    <th>Date Created</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
                </thead>
                <tbody>

                {
                    currentContacts.map(contact => (
                        <tr key={contact.id}>
                            <ContactRow contact={contact}/>
                        </tr>
                    ))
                }

                </tbody>
            </table>

            <Pagination pages={totalPagesNum}
                        setCurrentPage={setCurrentPage}
                        currentContacts={currentContacts}
                        filteredContacts={filteredContacts}/>

        </>
    )
}

export default ContactList;
