import { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    window.location.href = `mailto:kaustubh26vatsa@gmail.com?subject=Contact%20Form%20Message&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="border-b border-neutral-800 pb-24 px-4">
      <h1 className="my-20 text-center text-5xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        Contact
      </h1>
      <div className="flex flex-col items-center space-y-8">
        <textarea
          className="w-full max-w-4xl h-48 p-4 bg-neutral-800 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="flex items-center px-6 py-3 text-lg font-semibold text-neutral-200 bg-red-600 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          <span>Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="ml-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-8.086 5.645a1 1 0 01-1.499-.866V7.053a1 1 0 011.5-.866l8.085 5.645a1 1 0 010 1.732z"
            />
          </svg>
        </button>
        <div className="mt-8">
          <a
            href="https://drive.google.com/uc?export=download&id=1z_-uA6PXCGHMDehU16CoE1BW3KH0P83J"
            className="inline-block px-8 py-3 text-lg font-semibold text-neutral-200 bg-neutral-900 rounded-full hover:bg-neutral-700 transition"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
