import React, { Component } from 'react';
import Form from './Form';
import ContactsList from './Contacts';
import ContactFilter from './Contacts/ContactFilter';
import {connect} from 'react-redux';
import tasksOperation from './redux/taskOperation'

class App extends Component{
    componentDidMount(){
       this.props.onFetchContacts();
    }
    render(){
        return (
            <>
                <Form />
                {this.props.isLoadingContacts && <h2>loading contacts...</h2>}
                {this.props.contacts.length > 1 && 
                    <ContactFilter /> 
                }       
                <ContactsList/>
            </>
        )
    }
}


const mapStateToProps = state => ({
        isLoadingContacts:state.contacts.loading,
        contacts:state.contacts.items,
})

const mapDispatchProps = {
    onFetchContacts:tasksOperation.fetchItems
}

export default connect(mapStateToProps,mapDispatchProps)(App);