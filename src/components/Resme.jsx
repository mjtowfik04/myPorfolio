import React from "react";

export default function Resme() {
  const pdfUrl = "https://vercel.com/mjtowfiks-projects/my-cv/my-cv.pdf"; // আপনার pdf URL

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <a
        href={pdfUrl}
        download="My_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Download My CV (PDF)
      </a>
    </div>
  );
}
