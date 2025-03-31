import React, { useState } from "react";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Code analysis started!");
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-12 font-sans">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Upload Your React App
        </h1>
        <p className="text-gray-600 max-w-md mx-auto text-base">
          Upload a zipped GitHub repo (UI only). We’ll analyze render patterns and help optimize your app.
        </p>
      </header>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6"
        encType="multipart/form-data"
      >
        {/* Dropzone */}
        <label
          htmlFor="zip-upload"
          className="group relative w-full h-44 border-2 border-dashed border-black rounded-md flex flex-col items-center justify-center cursor-pointer transition hover:bg-gray-50"
        >
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-400 group-hover:text-black transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-sm text-gray-500">
              {fileName
                ? `📦 ${fileName}`
                : "Click to browse or drag a .zip file here"}
            </p>
          </div>
          <input
            id="zip-upload"
            type="file"
            accept=".zip"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 border border-black text-black text-sm font-medium rounded-md hover:bg-black hover:text-white transition"
        >
          Analyze Codebase
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-12 text-xs text-gray-500 text-center">
        &copy; 2025 React Analyzer · We don’t store your code · Fully private
      </footer>
    </div>
  );
}