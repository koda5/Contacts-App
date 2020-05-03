import React, { useReducer } from 'react';
import uuid from 'uuid';
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
                type: 'personal'

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
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );

};

export default ContactState;
