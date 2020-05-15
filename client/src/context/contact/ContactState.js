import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER

} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Mila Krsteva Panova",
                email: "milak@yahoo.com",
                phone: '11111111111',
                type: 'professional'

            },
            {
                id: 2,
                name: "Mimoza Panova",
                email: "mimoza@yahoo.com",
                phone: '44444444444',
                type: 'personal'
            },
            {
                id: 3,
                name: "Damjan Kodovski",
                email: "kodovskii@yahoo.com",
                phone: '1274566668',
                type: 'personal'
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact

    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // Set Contact

    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }
    // Clear Contact
    const clearCurrent = contact => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update Contact

    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // Filter Contact

    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACT, payload: text })
    }

    //Clear Filter

    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );

};

export default ContactState;
