import React, { useState, ChangeEvent } from "react";
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import backend_Url from "../../api/api";

const Upload: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const config: AxiosRequestConfig = {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          setProgress(percentCompleted);
        },
      };

      try {
        const response: AxiosResponse = await axios.post(
          `${backend_Url}/upload`,
          formData,
          config
        );
        alert("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error uploading file. Please try again.");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor="file" className="text-lg font-semibold block mb-4">
        Choose a ZIP file to upload:
      </label>
      <div className="flex items-center justify-between">
        <input
          type="file"
          id="file"
          accept=".gz"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Select File
        </label>
        {progress > 0 && (
          <div className="ml-4 w-1/2">
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${progress}%` }}
              >
                {progress.toFixed(2)}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
