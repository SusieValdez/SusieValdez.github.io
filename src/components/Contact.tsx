import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkIfFormValid = () => {
    if (firstName.length <= 1) {
      return false;
    }
    if (lastName.length <= 1) {
      return false;
    }
    if (email.length <= 1) {
      return false;
    }
    if (message.length <= 1) {
      return false;
    }
    return true;
  };

  const onChange =
    (setFn: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFn(e.target.value);

  return (
    <div
      id="contact"
      className="flex flex-col pt-16 pb-8 justify-center items-center w-full"
    >
      <h3 className="text-4xl text-violet-100 font-bold p-6 md:text-6xl">
        Let's chat!
      </h3>
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-12 rounded-3xl">
        <form
          className="w-full max-w-lg"
          action="https://formsubmit.co/susiivaldez@gmail.com"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="peer appearance-none placeholder:text-gray-500 block w-full bg-gray-200 text-gray-900 border border-pink-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                placeholder="Name"
                name="firstname"
                value={firstName}
                onChange={onChange(setFirstName)}
                required
              ></input>
              <p
                className={`peer-valid:hidden text-pink-500 text-xs font-semibold italic`}
              >
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="text-violet-100 block uppercase tracking-wide text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="peer appearance-none placeholder:text-gray-500 block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded  mb-3 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={onChange(setLastName)}
                name="lastname"
                required
              ></input>
              <p
                className={`peer-valid:hidden text-pink-500 text-xs font-semibold italic`}
              >
                Please fill out this field.
              </p>
            </div>
          </div>
          <input type="text" name="_honey" className="hidden"></input>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
                E-mail
              </label>
              <input
                className="peer appearance-none placeholder:text-gray-500 block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded  mb-3 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange(setEmail)}
                required
              ></input>
              <p
                className={`peer-valid:hidden text-pink-500 text-xs font-semibold italic`}
              >
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
                Message
              </label>
              <textarea
                className="peer no-resize appearance-none placeholder:text-gray-500 block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded  mb-3 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                placeholder="Type your message"
                name="message"
                id="message"
                value={message}
                onChange={onChange(setMessage)}
              ></textarea>
              <p
                className={`peer-valid:hidden text-pink-500 text-xs font-semibold italic`}
              >
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="h-12 disabled:opacity-50 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:cursor-not-allowed w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 font-mono rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                type="submit"
                disabled={!checkIfFormValid()}
              >
                <span className="px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
