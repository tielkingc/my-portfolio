import React from "react";
import emailjs, { init } from 'emailjs-com';
init('user_ja2wZURnqKxM1uQwQNyxz')

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    const serviceID = 'service_e9o1aii';
    const templateID = 'template_zvz7u1g';

    emailjs.sendForm(serviceID, templateID, e.target)
    .then((result) => {
        console.log(result.text);
        window.location.reload()
    }, (error) => {
        console.log(error.text);
    });
    
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          onSubmit={sendEmail}
          name="contact"
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Please feel free to reach out for any inquries or comments you may have. I look forward 
            to speaking with you!
          </p>
          <p className="leading-relaxed mb-5">
            Send me a direct email at: <a href="mailto:tielking5@gmail.com" target="_blank" style={{ color: "white"}}>tielking5@gmail.com</a><br />
            Or check out my <a href="https://www.linkedin.com/in/christian-tielking/" target="_blank" style={{ color: "white"}}>LinkedIn</a> Profile
          </p>
          <div className="relative mb-4">
            <label htmlFor="from_name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="from_email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}