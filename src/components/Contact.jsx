import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import ContactCard from './ContactCard';
import NavImg from '../assets/navImg.png';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.contact = [
      {
        img: NavImg,
        category: "office address",
        value: "New-Delhi,India"
      },
      {
        img: NavImg,
        category: "Official Mail",
        value: "info@priyam.com"
      },
      {
        img: NavImg,
        category: "Official Phone",
        value: "+91 8595660465"
      },
    ];
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    // Email.js parameters
    const emailParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    // Your Email.js service ID, template ID, and user ID
    const serviceId = 'service_uupx2h9';
    const templateId = 'template_lbw7kbi';
    const userId = 'QHMq2dMrSuQ1PXcDS';

    // Send the email using Email.js
    emailjs.send(serviceId, templateId, emailParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });

    // Clear the form fields
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  render() {
    return (
      <div className='bg-radial-gradient2 flex flex-col p-20'>
        <div className=' text-center text-white flex flex-col space-y-2'>
          <div>
            <h1 className=' text-5xl font-bold'>Let’s Talk</h1>
          </div>
          <div className='text-xl'>
            <p>Must explain to you how all this mistaken idea pleasure born and give you a complete account.</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-around'>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>

          <div className='flex flex-col space-y-5 '>
            {this.contact.map((data, index) => (
              <ContactCard
                key={index}
                img={data.img}
                category={data.category}
                value={data.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
