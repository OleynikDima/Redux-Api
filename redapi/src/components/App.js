import React from 'react';
import Form from './Form';
import ContactsList from './Contacts';
import ContactFilter from './Contacts/ContactFilter';
import {connect} from 'react-redux';


function App ({contacts}) {
        return (
            <>
                <Form />
                {contacts.length > 1 && 
                    <ContactFilter /> 
                }       
                <ContactsList/>
            </>
        )
    }


const mapStateToProps = state => {
    return {
        contacts:state.contacts.items
    }
}


export default connect(mapStateToProps,null)(App);