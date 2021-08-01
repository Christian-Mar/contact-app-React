import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = props => {
	console.log(props);
	const inputEl = useRef("");
	const deleteContactHandler = id => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map(contact => {
		return (
			<ContactCard
				contact={contact}
				clickHandler={deleteContactHandler}
				key={contact.id}
			></ContactCard>
		);
	});
	const getSearchTerm = () => {
		console.log(inputEl.current.value);
		props.searchKeyword(inputEl.current.value);
	};
	return (
		<div className="main">
			<h2>Contact List</h2>
			<Link to="/add">
				<button className="ui button blue right">Add Contact</button>
			</Link>
			<div className="ui search">
				<div className="ui icon input"></div>
				<input
					ref={inputEl}
					type="text"
					placeholder="Search Contacts"
					className="prompt"
					value={props.term}
					onChange={getSearchTerm}
				></input>
				<i className="search icon"></i>
			</div>
			<div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
		</div>
	);
};

export default ContactList;
