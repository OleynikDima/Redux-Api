import React, { Component } from 'react';
import Form from './Form';
import ContactsList from './Contacts';
import ContactFilter from './Contacts/ContactFilter';
import {connect} from 'react-redux';
import tasksOperation from './redux/taskOperation'
import selectors from './redux/selectors'



class App extends Component{
    componentDidMount(){
       this.props.onFetchContacts();
    }
    render(){
        return (
            <>
                <Form />
                {this.props.contacts.length > 1 && 
                    <ContactFilter /> 
                }       
                <ContactsList/>
            </>
        )
    }
}


const mapStateToProps = state => ({
        contacts:selectors.getContactsItems(state)
})

const mapDispatchProps = {
    onFetchContacts:tasksOperation.fetchItems
}

export default connect(mapStateToProps,mapDispatchProps)(App);