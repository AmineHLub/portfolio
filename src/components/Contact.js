import React from 'react';

export default function Contact() {
  return (
    <section className="contact-container d-flex" id="contact">
      <h2>Contact me</h2>
      <div className="contact-layout-container">
        <div className="contact-header">
          <p>
            I&apos;m always interested in hearing about new projects,
            so if you&apos;d like to chat please get in touch.
          </p>
        </div>
        <form action="https://formspree.io/f/xayvjvar" method="POST">
          <div className="form-container d-flex">
            <h2 className="temp-contact-header">Contact me</h2>
            <input type="text" className="input input-name" placeholder="Full name" maxLength="30" name="username" required />
            <input type="email" className="input input-email" placeholder="Email address" name="_replyto" />
            <textarea className="input input-message" placeholder="Type your message here..." minLength="5" maxLength="500" name="message" required />
            <button className="button-submit" type="submit">Get in touch</button>
          </div>
        </form>
      </div>
      <div className="seperator last-seperator" />
    </section>
  );
}
