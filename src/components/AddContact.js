import React from 'react';

class AddContact extends React.Component {
	state = {
		name: '',
		email: '',
	};

    add = (e) => {
      e.preventDefault(); //code dient pas uitgevoerd te worden na button te gebruiken
      if(this.state.name === "" || this.state.email === "") {
        alert ("All the fields are mandatory!");
        return
      }
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" }); //to clear
    }
	render() {
		return (
			<div className="ui main">
				<form className="ui form" onSubmit={this.add}>
					<h2>Add Contact</h2>
					<div className="field">
						<label>Name</label>
						<input
							type="text"
							name="name"
							placeholder="name"
							value={this.state.name}
							onChange={e => this.setState({ name: e.target.value })}
						/>
					</div>
					<div className="field">
						<label>Email</label>
						<input
							type="email"
							name="email"
							placeholder="Name@..."
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</div>
					<button className="ui button blue">Add</button>
				</form>
			</div>
		);
	}
}

export default AddContact;
