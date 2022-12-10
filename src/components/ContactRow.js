import {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ViewEditForm from './ViewEditForm'

const ContactRow = ({contact}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [contact])

    return (
        <>
            <td>{contact.lastName ? contact.firstName + ' ' + contact.lastName : contact.firstName}</td>
            <td>{contact.organisationABN ? contact.organisation + ' {' + contact.organisationABN + '}' : contact.organisation}</td>
            <td>{contact.dateCreated}</td>
            <td style={{textAlign: "center"}}>
                <Button variant="info" size={"sm"} onClick={handleShow} data-toggle="modal">View</Button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewEditForm contact={contact}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ContactRow;
