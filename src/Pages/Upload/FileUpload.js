import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [uploadMessage, setUploadMessage] = useState("");

  const types = ["image/png", "image/jpeg", "application/pdf"];

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && types.includes(file.type)) {
      setFile(file);
      setError("");
    } else {
      setFile(null);
      setError("Please select a valid image or pdf file");
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) return;

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    setUploadPercentage(0);
    setUploadMessage("");
    for (let i = 0; i <= 100; i++) {
      await sleep(100); // wait for 100 milliseconds
      setUploadPercentage(i);
    }

    // after successful upload, show the message
    setUploadMessage(`Successfully uploaded with file name: ${file.name}`);
  };

  return (
    <div className="container">
      <h1>Upload an image or a pdf file</h1>
      <form onSubmit={uploadFile}>
        <div>
          <input type="file" name="file" onChange={handleFileInputChange} />
          {error && <div>{error}</div>}
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
        {uploadPercentage > 0 && (
          <div>
            <progress max="100" value={uploadPercentage} />
            <p>{uploadPercentage}%</p>
          </div>
        )}
        {uploadMessage && <div>{uploadMessage}</div>}
      </form>
    </div>
  );
};

export default FileUpload;
