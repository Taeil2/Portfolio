import React from 'react';
import './contact.scss';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  handleChange(name, value) {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="contact-page background">
        <div className="wrapper">
          <article>
            <h4>Send me a message or email me at taeil2@gmail.com</h4>
            <form onSubmit={e => this.handleSubmit(e)}>
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
            </form>
          </article>
        </div>
      </div>
    );
  }
}
