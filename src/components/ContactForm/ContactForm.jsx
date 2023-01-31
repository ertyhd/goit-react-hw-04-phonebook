import React, { Component } from 'react';
import shortid from 'shortid';
import contactForm from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInpitId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form className={contactForm.form} onSubmit={this.handleSubmit}>
        <label className={contactForm.label} htmlFor={this.nameInputId}>
          Name
          <input
            className={contactForm.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label className={contactForm.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={contactForm.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button className={contactForm.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
