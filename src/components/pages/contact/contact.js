import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    successClass: 'hidden',
    failureClass: 'hidden',
    formClass: '',
    errorMessage: '',
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    if (data.name === '' || data.email === '' || data.message === '') {
      this.setState({
        errorMessage: 'Please fill in all fields'
      });
      return;
    }

    // fetch('https://taeil2-backend.herokuapp.com/contact', {
    fetch('http://localhost:8000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      console.log(res)
      if (res.status === 202) { // expecting a 250 response
        console.log('success');
        this.formSuccess();
      } else {
        console.log('failure');
        this.formFailure();
      }
    })
    .catch((e) => {
      console.log(e);
    })
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  formSuccess() {
    this.setState({
      name: '',
      email: '',
      message: '',
      successClass: ``,
      failureClass: 'hidden',
      formClass: 'hidden'
    })
  }

  formFailure() {
    this.setState({
      name: '',
      email: '',
      message: '',
      successClass: 'hidden',
      failureClass: ``,
      formClass: 'hidden'
    })
  }

  render() {
    return (
      <div className="contact-page background">
        <div className="wrapper">
          <h1>Contact</h1>
          <form onSubmit={e => this.handleSubmit(e)} className={this.state.formClass}>
            <p>Send me a message or email me at <a href="mailto:taeil2@gmail.com">taeil2@gmail.com</a></p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={this.state.name} onChange={e => this.handleChange('name', e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={this.state.email} onChange={e => this.handleChange('email', e.target.value)}></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={this.state.message} onChange={e => this.handleChange('message', e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <button type="submit"><i className="far fa-paper-plane"></i> Send</button>
            </div>
            <div className="error-message">{this.state.errorMessage}</div>
          </form>
          <div className={this.state.successClass}>Thank you for your message! I'll get back to you as soon as I can.</div>
          <div className={this.state.failureClass}>Your message couldn't be sent. Please try again later or email me at <a href="mailto:taeil2@gmail.com">taeil2@gmail.com</a>.</div>
        </div>
      </div>
    );
  }
}
