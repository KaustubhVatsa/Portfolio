import { useState } from "react";
import { CONTACT } from "../constants";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = "Contact Form Message";
    const body = encodeURIComponent(message);

    // Open Gmail web compose
    const gmailUrl = [
      "https://mail.google.com/mail/?view=cm&fs=1",
      `&to=${CONTACT.email}`,
      `&su=${encodeURIComponent(subject)}`,
      `&body=${body}`,
    ].join("");
    window.open(gmailUrl, "_blank");

    // Fallback to default mail client
    setTimeout(() => {
      window.location.href =
        `mailto:${CONTACT.email}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${body}`;
    }, 500);

    setMessage("");
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
              d="M14.752 11.168l-8.086 5.645a1 1 0
                 01-1.499-.866V7.053a1 1 0
                 011.5-.866l8.085 5.645a1 1 0 010 1.732z"
            />
          </svg>
        </button>

        <a
          href="https://drive.google.com/uc?export=download&id=1z_-uA6PXCGHMDehU16CoE1BW3KH0P83J"
          className="inline-block px-8 py-3 text-lg font-semibold text-neutral-200 bg-neutral-900 rounded-full hover:bg-neutral-700 transition"
        >
          RESUME
        </a>
      </div>

      {/* —————————————— Contact Info —————————————— */}
      <div className="mt-16 max-w-4xl mx-auto text-neutral-200 space-y-2">
        <h2 className="text-2xl font-semibold">Contact Info</h2>
        <p>📍 {CONTACT.address}</p>
        <p>
          📞{" "}
          <a href={`tel:${CONTACT.phoneNo}`} className="hover:underline">
            {CONTACT.phoneNo}
          </a>
        </p>
        <p>
          ✉️{" "}
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
}
