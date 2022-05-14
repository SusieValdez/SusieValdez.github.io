import React from "react";

const Card = () => {
  return (
    <div className="md:w-72">
      <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full"
          src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
            <div className="flex flex-wrap gap-1">
              <span className="bg-brands-react rounded-full px-3 py-1">
                React
              </span>
              <span className="bg-brands-js rounded-full px-3 py-1">JS</span>
              <span className="bg-brands-node rounded-full px-3 py-1">
                Node
              </span>
              <span className="bg-brands-ws rounded-full px-3 py-1">
                Websockets
              </span>
              <span className="bg-brands-db rounded-full px-3 py-1">
                MongoDB
              </span>
            </div>
          </h2>
          <h1 className="title-font text-lg font-medium text-pink-300 mb-3">
            Discuss
          </h1>
          <p className="leading-relaxed mb-3 text-violet-200 text-ellipsis overflow-hidden">
            Complete discord clone. Features: multiple servers and channels,
            real-time communication between users,secure log-in using email and
            password/QR code, link highlighting and expanded images, user
            profiles and online-status, user roles, admin/moderator roles.
          </p>
          <div className="flex items-center flex-wrap">
            <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 active:outline-none focus:ring-purple-300">
              <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0 text-ellipsis overflow-hidden truncate">
                Source code
              </span>
            </button>

            <button className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 active:outline-none focus:ring-purple-300">
              <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0">
                Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
